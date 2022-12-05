package com.code_of_duty_bas_chat_bot.business;

import com.code_of_duty_bas_chat_bot.domain.Conversation;
import org.springframework.stereotype.Service;

import java.util.List;
public interface ConversationService {
    Conversation save(Conversation conversation);
    List<Conversation> getAllBySenderAndReceiver(Long id);

}
