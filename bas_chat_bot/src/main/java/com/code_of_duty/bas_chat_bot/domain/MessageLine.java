package com.code_of_duty.bas_chat_bot.domain;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MessageLine {
    private String sender;
    private String content;
    private LocalDateTime time;
}
