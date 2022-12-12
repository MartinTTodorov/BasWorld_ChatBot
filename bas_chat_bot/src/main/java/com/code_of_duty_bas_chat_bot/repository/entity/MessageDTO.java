package com.code_of_duty_bas_chat_bot.repository.entity;

import com.code_of_duty_bas_chat_bot.domain.User;
import lombok.Data;

@Data
public class MessageDTO {
    String message;
    String sender;

    public String toString(){
        return sender + " " + message;
    }
}