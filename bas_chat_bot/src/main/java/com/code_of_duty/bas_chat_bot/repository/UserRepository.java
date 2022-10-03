package com.code_of_duty.bas_chat_bot.repository;

import com.code_of_duty.bas_chat_bot.domain.User;
import com.code_of_duty.bas_chat_bot.repository.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity,Long> {
    User findByEmailAndPassword(String email, String password);
}
