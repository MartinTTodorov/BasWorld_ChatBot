package com.code_of_duty_bas_chat_bot.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Getter
@RequiredArgsConstructor
public class Message
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String content;
    LocalDateTime creation_date;
    String sender_id;
    String receiver_id;
}
