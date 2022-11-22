package com.code_of_duty_bas_chat_bot.controller;

import com.code_of_duty_bas_chat_bot.business.ConversationService;
import com.code_of_duty_bas_chat_bot.business.UserService;
import com.code_of_duty_bas_chat_bot.domain.Conversation;
import com.code_of_duty_bas_chat_bot.domain.CreateUserRequest;
import com.code_of_duty_bas_chat_bot.repository.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/conversations")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class ConversationController {
    private final ConversationService service;

    @PostMapping()
    public ResponseEntity<Conversation> saveConversation(@RequestBody Conversation conversation) {
        conversation.setDateTime(LocalDateTime.now());
        return  ResponseEntity.ok().body(service.save(conversation));
    }
/*
    @GetMapping("{id}")
    public ResponseEntity<List<Conversation>> getAllConversations(@RequestBody Long id) {
        return  ResponseEntity.ok().body(service.getAllBySenderAndReceiver(id));
    }*/
}
