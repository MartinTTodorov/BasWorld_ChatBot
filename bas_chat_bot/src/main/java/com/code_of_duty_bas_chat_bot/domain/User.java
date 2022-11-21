package com.code_of_duty_bas_chat_bot.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private long id;
    private String name;
    private String lastName;
    private String CompanyName;
    private String email;
    private String password;
    private String role;
}
