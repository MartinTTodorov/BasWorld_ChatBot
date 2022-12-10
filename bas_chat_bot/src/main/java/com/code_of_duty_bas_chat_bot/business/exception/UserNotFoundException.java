package com.code_of_duty_bas_chat_bot.business.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class UserNotFoundException extends ResponseStatusException {
    public UserNotFoundException(String text)
    {
        super(HttpStatus.BAD_REQUEST, "USER_WITH_GIVEN_"+text+"NOT_FOUND");
    }
}
