package com.code_of_duty.bas_chat_bot.domain;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginUserResponse {
    private boolean result;
    private Long userId;
    private String userName;
}
