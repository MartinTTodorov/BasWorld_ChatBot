package com.code_of_duty_bas_chat_bot.business;

import com.code_of_duty_bas_chat_bot.domain.CreateUserRequest;
import com.code_of_duty_bas_chat_bot.repository.entity.UserEntity;

import java.util.Optional;

public interface UserService {
    UserEntity createUser(CreateUserRequest request);

    UserEntity findByEmail(String email);

}
