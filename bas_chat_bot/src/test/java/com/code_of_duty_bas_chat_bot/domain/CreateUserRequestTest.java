package com.code_of_duty_bas_chat_bot.domain;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CreateUserRequestTest {

    CreateUserRequest user = CreateUserRequest.builder().name(createUser().getName()).lastName(createUser().getLastName()).CompanyName(createUser().getCompanyName()).email(createUser().getEmail()).password(createUser().getPassword()).role(createUser().getRole()).build();

    @Test
    void getName() {
        String actual = user.getName();
        String expected = "ahmed";
        assertEquals(actual, expected);
    }

    @Test
    void getLastName() {
        String actual = user.getLastName();
        String expected = "said";
        assertEquals(actual, expected);
    }

    @Test
    void getCompanyName() {
        String actual = user.getCompanyName();
        String expected = "asml";
        assertEquals(actual, expected);
    }

    @Test
    void getEmail() {
        String actual = user.getEmail();
        String expected = "ahmedsaid@gmail.com";
        assertEquals(actual, expected);
    }

    @Test
    void getPassword() {
        String actual = user.getPassword();
        String expected = "ahmed-3";
        assertEquals(actual, expected);
    }

    @Test
    void getRole() {
        String actual = user.getRole();
        String expected = "admin";
        assertEquals(actual, expected);
    }

    private User createUser(){
        User user = User.builder().id(2L).name("ahmed").lastName("said").CompanyName("asml").email("ahmedsaid@gmail.com").password("ahmed-3").role("admin").build();
        return user;
    }
}