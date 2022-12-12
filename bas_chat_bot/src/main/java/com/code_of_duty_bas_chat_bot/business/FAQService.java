package com.code_of_duty_bas_chat_bot.business;

import com.code_of_duty_bas_chat_bot.domain.FAQ;

import java.util.List;

public interface FAQService {
    List<FAQ> findAllByTopic(String topic);

    FAQ findByQuestion(String question);

    FAQ findByKeyword(String keyword);

    FAQ findByTopic(String question);
}
