package com.code_of_duty.bas_chat_bot.business;

import com.code_of_duty.bas_chat_bot.domain.*;

public interface UserService {
    CreateUserResponse createUser(CreateUserRequest request);
    LoginUserResponse login(LoginUserRequest request);

    User getUser(String email, String password);
}
