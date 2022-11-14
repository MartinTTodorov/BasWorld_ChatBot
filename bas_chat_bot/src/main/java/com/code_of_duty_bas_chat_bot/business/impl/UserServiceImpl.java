package com.code_of_duty_bas_chat_bot.business.impl;

import com.code_of_duty_bas_chat_bot.business.UserService;
import com.code_of_duty_bas_chat_bot.domain.CreateUserRequest;
import com.code_of_duty_bas_chat_bot.domain.CreateUserResponse;
import com.code_of_duty_bas_chat_bot.domain.User;
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

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;
import java.util.Random;

@Service
@AllArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService, UserDetailsService {
    private UserRepository userRepository;
    private final PasswordEncoder encoder;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByEmail(username);
        if (user.isEmpty()) {
            log.error("User not found");
            throw new UsernameNotFoundException("Username not found in db");
        } else {
            log.info("User with email {} found", username);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("Customer"));
        return new org.springframework.security.core.userdetails.User(user.get().getEmail(), user.get().getPassword(), authorities);
    }
    @Override
    public UserEntity createUser(CreateUserRequest request) {

        if (userRepository.existsByEmail(request.getEmail()) == true) {
            log.error("User not found");
            return null;
        } else {
            log.info("Saving new user {} .", request.getName());
            request.setPassword(encoder.encode(request.getPassword()));
            UserEntity newUser = UserEntity.builder()
                    .name(request.getName())
                    .lastName(request.getLastName())
                    .CompanyName(request.getCompanyName())
                    .email(request.getEmail())
                    .password(request.getPassword())
                    .build();

            return userRepository.save(newUser);
        }
    }
}
