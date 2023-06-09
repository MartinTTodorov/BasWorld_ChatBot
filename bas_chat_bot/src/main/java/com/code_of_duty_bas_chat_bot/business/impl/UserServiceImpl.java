package com.code_of_duty_bas_chat_bot.business.impl;

import com.code_of_duty_bas_chat_bot.business.UserService;
import com.code_of_duty_bas_chat_bot.business.exception.EmailAddressAlreadyExistException;
import com.code_of_duty_bas_chat_bot.business.exception.EmailAddressNotFoundException;
import com.code_of_duty_bas_chat_bot.business.exception.InvalidCredentialsException;
import com.code_of_duty_bas_chat_bot.business.exception.UserNotFoundException;
import com.code_of_duty_bas_chat_bot.domain.requests.CreateUserRequest;
import com.code_of_duty_bas_chat_bot.repository.UserRepository;
import com.code_of_duty_bas_chat_bot.repository.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
@Transactional
public class UserServiceImpl implements UserService, UserDetailsService {
    private UserRepository userRepository;
    private final PasswordEncoder encoder;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByEmail(username);
        if (user == null) {
            log.error("User not found");
            throw new UsernameNotFoundException("Username not found in db");
        } else {
            log.info("User with email {} found", username);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(user.getRole()));
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);
    }
    @Override
    public UserEntity findByEmail(String email){
        if(!userRepository.existsByEmail(email)){
            throw new EmailAddressNotFoundException();
        }
        return userRepository.findByEmail(email);
    }
    @Override
    public UserEntity createUser(CreateUserRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            log.error("Email address already exists");
            throw new EmailAddressAlreadyExistException();
        } else if (request.getName().length()<2||request.getName().length()>30
        ||request.getLastName().length()<2||request.getLastName().length()>30
        ||request.getEmail().length()>50) {
            throw new InvalidCredentialsException();
        } else {
            log.info("Saving new user {} .", request.getName());

            UserEntity newUser = UserEntity.builder()
                    .name(request.getName())
                    .lastName(request.getLastName())
                    .CompanyName(request.getCompanyName())
                    .email(request.getEmail())
                    .password(encoder.encode(request.getPassword()))
                    .role("admin")
                    .build();

            request.setPassword(encoder.encode(request.getPassword()));
            return userRepository.save(newUser);
        }
    }
}
