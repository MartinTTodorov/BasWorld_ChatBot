package com.code_of_duty.bas_chat_bot.business.impl;

import com.code_of_duty.bas_chat_bot.business.UserService;
import com.code_of_duty.bas_chat_bot.domain.CreateUserRequest;
import com.code_of_duty.bas_chat_bot.domain.CreateUserResponse;
import com.code_of_duty.bas_chat_bot.domain.User;
import com.code_of_duty.bas_chat_bot.repository.UserRepository;
import com.code_of_duty.bas_chat_bot.repository.entity.UserEntity;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    UserRepository userRepository;
    @Override
    public CreateUserResponse createUser(CreateUserRequest request) {
        Random rand = new Random();
        UserEntity newUser = UserEntity.builder()
                .id(Long.valueOf(rand.nextInt(1000000000)))
                .name(request.getName())
                .lastName(request.getLastName())
                .CompanyName(request.getCompanyName())
                .email(request.getEmail())
                .password(request.getPassword())
                .build();

        UserEntity savedUser = save(newUser);


        return CreateUserResponse.builder()
                .userId(savedUser.getId())
                .build();
    }

    @Override
    public User getUser(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }

    //Check later
    private UserEntity save(UserEntity user){
         //return userRepository.save(user);
//        return UserEntity.builder().id(user.getId())
//                .name(user.getName())
//                .lastName(user.getLastName())
//                .CompanyName(user.getCompanyName())
//                .email(user.getEmail())
//                .password(user.getPassword())
//                .build();
        return null;
    }
}
