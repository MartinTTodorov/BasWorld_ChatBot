package com.code_of_duty_bas_chat_bot.controller;

import com.code_of_duty_bas_chat_bot.business.ConversationService;
import com.code_of_duty_bas_chat_bot.business.UserService;
import com.code_of_duty_bas_chat_bot.domain.Conversation;
import com.code_of_duty_bas_chat_bot.domain.CreateUserRequest;
import com.code_of_duty_bas_chat_bot.repository.entity.UserEntity;
import lombok.Getter;
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
public class ConversationController {
    private final ConversationService conversation_service;

    @GetMapping("/{id}")
    ResponseEntity<Conversation> getConversation(@PathVariable (value = "id") Integer conversation_id){
        try{
        return ResponseEntity.ok(conversation_service.readConversation(conversation_id));

        }catch (Exception ex){
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/save")
    ResponseEntity<Conversation> saveConversation(@RequestBody Conversation conversation){
        try{

            return ResponseEntity.ok(conversation_service.saveConversation(conversation));

        }catch (Exception ex){
            return ResponseEntity.badRequest().build();
        }
    }
}
