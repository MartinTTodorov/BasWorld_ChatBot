package com.code_of_duty.bas_chat_bot.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "user")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {
    @Id
    @Column(name = "id")
    private Long id;

    @NotBlank
    @Length(min = 2, max = 30)
    @Column(name = "name")
    private String name;

    @NotBlank
    @Length(min = 2, max = 30)
    @Column(name = "last_name")
    private String lastName;

    @Column(name = "company")
    private String CompanyName;

    @Column(name = "email")
    @Length(max = 50)
    private String email;

    @Column(name = "password")
    @Length(max = 50)
    private String password;

}
