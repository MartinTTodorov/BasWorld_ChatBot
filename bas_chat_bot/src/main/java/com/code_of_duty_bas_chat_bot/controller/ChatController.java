package com.code_of_duty_bas_chat_bot.controller;

import com.code_of_duty_bas_chat_bot.domain.SentMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public SentMessage greeting(SentMessage message) throws Exception {
        return new SentMessage(message.getUsername(), message.getContent());
    }
}
