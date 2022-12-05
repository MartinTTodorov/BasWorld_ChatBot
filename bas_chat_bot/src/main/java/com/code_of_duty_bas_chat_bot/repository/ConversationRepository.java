package com.code_of_duty_bas_chat_bot.repository;

import com.code_of_duty_bas_chat_bot.domain.Conversation;
import com.code_of_duty_bas_chat_bot.repository.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ConversationRepository extends JpaRepository<Conversation,Integer> {

}
