package com.code_of_duty_bas_chat_bot.business;

import com.code_of_duty_bas_chat_bot.domain.CreateUserRequest;
import com.code_of_duty_bas_chat_bot.domain.CreateUserResponse;

public interface UserService {
    CreateUserResponse createUser(CreateUserRequest request);

}
