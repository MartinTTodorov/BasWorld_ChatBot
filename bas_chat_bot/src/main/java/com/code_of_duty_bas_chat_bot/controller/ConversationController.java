package com.code_of_duty_bas_chat_bot.controller;

import com.code_of_duty_bas_chat_bot.business.ConversationService;
import com.code_of_duty_bas_chat_bot.domain.Conversation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/conversations")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class ConversationController {
    private final ConversationService service;

    @PostMapping()
    public ResponseEntity<Conversation> saveConversation(@RequestBody Conversation conversation) {
        conversation.setDate_time(LocalDateTime.now());
        return  ResponseEntity.ok().body(service.saveConversation(conversation));
    }
/*
    @GetMapping("{id}")
    public ResponseEntity<List<Conversation>> getAllConversations(@RequestBody Long id) {
        return  ResponseEntity.ok().body(service.getAllBySenderAndReceiver(id));
    }*/
}
