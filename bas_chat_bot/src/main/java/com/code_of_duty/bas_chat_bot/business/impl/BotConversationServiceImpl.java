package com.code_of_duty.bas_chat_bot.business.impl;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class BotConversationServiceImpl {
    public String greeter(boolean loggedIn){
        if(loggedIn){
            return "Hello, " + "user" + ", how can I help you today?";
        }
        return "Hello, how can I help you today?";
    }
}


