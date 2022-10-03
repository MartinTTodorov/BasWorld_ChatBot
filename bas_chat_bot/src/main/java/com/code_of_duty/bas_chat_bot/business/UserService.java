package com.code_of_duty.bas_chat_bot.business;

import com.code_of_duty.bas_chat_bot.domain.CreateUserRequest;
import com.code_of_duty.bas_chat_bot.domain.CreateUserResponse;
import com.code_of_duty.bas_chat_bot.domain.User;

public interface UserService {
    CreateUserResponse createUser(CreateUserRequest request);

    User getUser(String email, String password);
}
