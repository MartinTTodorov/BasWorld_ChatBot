package com.code_of_duty.bas_chat_bot.repository;

import com.code_of_duty.bas_chat_bot.repository.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity,Long> {
}
