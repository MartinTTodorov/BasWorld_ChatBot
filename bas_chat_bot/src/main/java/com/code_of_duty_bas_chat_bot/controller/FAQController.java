package com.code_of_duty_bas_chat_bot.controller;

import com.code_of_duty_bas_chat_bot.business.FAQService;
import com.code_of_duty_bas_chat_bot.domain.FAQ;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/faq")
@AllArgsConstructor
@CrossOrigin("http://localhost:3000")
public class FAQController {

    private final FAQService service;

    @PostMapping("/topic")
    public ResponseEntity<List<FAQ>> getAllFAQsByTopic(@RequestParam String topic){
        return  ResponseEntity.ok().body(service.findAllByTopic(topic));
    }

    @PostMapping
    public ResponseEntity<FAQ> getFAQ(@RequestParam(value = "question") String question){
        return  ResponseEntity.ok().body(service.findByQuestion(question));
    }


}
