package com.code_of_duty_bas_chat_bot.repository;

import com.code_of_duty_bas_chat_bot.domain.FAQ;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FAQRepository extends JpaRepository<FAQ, Long> {
    List<FAQ> findAllByTopic(String topic);

    FAQ findByQuestion(String question);

    FAQ findByKeyword(String keyword);
}
