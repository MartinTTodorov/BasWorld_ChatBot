package com.code_of_duty_bas_chat_bot.domain.requests;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateUserResponse {
    private Long userId;
}
