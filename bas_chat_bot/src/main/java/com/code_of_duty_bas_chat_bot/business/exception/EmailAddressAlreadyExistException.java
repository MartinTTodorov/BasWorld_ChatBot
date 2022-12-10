package com.code_of_duty_bas_chat_bot.business.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class EmailAddressAlreadyExistException extends ResponseStatusException {
    public EmailAddressAlreadyExistException()
    {
        super(HttpStatus.BAD_REQUEST, "EMAIL_ADDRESS_ALREADY_EXISTS");
    }
}
