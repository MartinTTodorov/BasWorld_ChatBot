package com.code_of_duty_bas_chat_bot.repository;

import com.code_of_duty_bas_chat_bot.domain.Conversation;
import com.code_of_duty_bas_chat_bot.repository.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConversationRepository extends JpaRepository<Conversation,Long> {
    Conversation save (Conversation conversation);
    List<Conversation> getAllBySenderAndReceiver(Long id);
}
