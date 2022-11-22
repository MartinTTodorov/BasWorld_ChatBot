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
    private ConversationRepository repository;
    @Override
    public Conversation save(Conversation conversation) {
        return repository.save(conversation);
    }

    @Override
    public List<Conversation> getAllBySenderAndReceiver(Long id) {
        return repository.getAllBySenderAndReceiver(id);
    }
}
