package com.code_of_duty_bas_chat_bot.business.impl;

import com.code_of_duty_bas_chat_bot.business.ConversationService;
import com.code_of_duty_bas_chat_bot.domain.Conversation;
import com.code_of_duty_bas_chat_bot.repository.ConversationRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@AllArgsConstructor
public class ConversationServiceImpl implements ConversationService {
    private ConversationRepository conversation_repository;

    @Override
    public Conversation saveConversation(Conversation conversation) {
        if(conversation != null){
            return conversation_repository.save(conversation);
        }else{
         return null;
        }
    }

    @Override
    public Conversation readConversation(Integer conversation_id) {
        if(conversation_id > -1){
            return conversation_repository.getReferenceById(conversation_id);
        }
        return null;
    }
}
