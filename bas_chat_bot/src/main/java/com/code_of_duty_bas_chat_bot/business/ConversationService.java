package com.code_of_duty_bas_chat_bot.business;

import com.code_of_duty_bas_chat_bot.domain.Conversation;

import java.util.List;

public interface ConversationService {
    Conversation saveConversation(Conversation conversation);
    Conversation readConversation(Integer conversation_id);


}
