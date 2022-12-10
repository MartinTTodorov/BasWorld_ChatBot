package com.code_of_duty_bas_chat_bot.business.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class InvalidCredentialsException extends ResponseStatusException {
    public InvalidCredentialsException()
    {
        super(HttpStatus.BAD_REQUEST, "USERNAME_AND_LASTNAME_SHOULD_BE_BETWEEN_2_AND_" +
                "30_CHARS_AND_EMAIL_SHOULD_HAVE _MAX_50_CHARS");
    }
}
