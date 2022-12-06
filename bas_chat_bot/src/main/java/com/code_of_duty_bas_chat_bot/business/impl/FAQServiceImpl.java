package com.code_of_duty_bas_chat_bot.business.impl;

import com.code_of_duty_bas_chat_bot.business.FAQService;
import com.code_of_duty_bas_chat_bot.domain.FAQ;
import com.code_of_duty_bas_chat_bot.repository.FAQRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FAQServiceImpl implements FAQService {
    private FAQRepository repository;

    @Override
    public List<FAQ> findAllByTopic(String topic) {
        return repository.findAllByTopic(topic);
    }

    @Override
    public FAQ findByQuestion(String question) {
//        FAQ faq = repository.findByQuestion(question);
//        if (faq != null) {
//            return faq;
//        }
//
//        String[] words = question.split("\\W+");
//        for (int i = 0; i < words.length; i++) {
//
//        }

        return repository.findByQuestion(question);
    }

    @Override
    public FAQ findByKeyword(String keyword) {
        return repository.findByKeyword(keyword);
    }
}
