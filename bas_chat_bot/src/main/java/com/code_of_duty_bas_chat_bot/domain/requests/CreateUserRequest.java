package com.code_of_duty_bas_chat_bot.domain.requests;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateUserRequest {

    private String name;

    private String lastName;

    private String CompanyName;

    private String email;

    private String password;
    private String role;
}
