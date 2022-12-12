package com.code_of_duty_bas_chat_bot.controller;

import com.code_of_duty_bas_chat_bot.repository.entity.MessageDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MessageController
{
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/chat/{to}")
    public void sendMessage(@DestinationVariable String to, MessageDTO message){
        
        System.out.println("handling send message"+ message + "to:"+ to);
        simpMessagingTemplate.convertAndSend("/topic/messages/" + to,message);
    }
}
