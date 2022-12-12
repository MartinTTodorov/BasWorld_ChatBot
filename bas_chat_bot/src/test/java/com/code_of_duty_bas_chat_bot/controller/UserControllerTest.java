package com.code_of_duty_bas_chat_bot.controller;

import com.code_of_duty_bas_chat_bot.business.UserService;
import com.code_of_duty_bas_chat_bot.domain.requests.CreateUserRequest;
import com.code_of_duty_bas_chat_bot.repository.entity.UserEntity;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.web.servlet.function.ServerResponse.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@ExtendWith(SpringExtension.class)
@WebMvcTest(UserController.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;


    @Test
    void createUser_shouldCreateAndReturn201_WhenRequestValid() throws Exception {
        CreateUserRequest expectedUser = CreateUserRequest.builder()
                .name("adnan")
                .lastName("qusay")
                .CompanyName("asml")
                .email("adnan@gmail.com")
                .password("adnan123")
                .role("admin")
                .build();
        when(userService.createUser(expectedUser))
                .thenReturn(UserEntity.builder().id(100L).name(expectedUser.getName()).lastName(expectedUser.getLastName()).CompanyName(expectedUser.getCompanyName()).email(expectedUser.getEmail()).password(expectedUser.getPassword()).role(expectedUser.getRole()).build());

        mockMvc.perform(post("/user/save").contentType(APPLICATION_JSON_VALUE)
                .content("""
                        {
                        "name": "adnan",
                        "lastName": "qusay",
                        "companyName": "asml",
                        "email": "adnan@gmail.com",
                        "password": "adnan123"
                        }
                        """))
                .andDo(print())
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(header().string("Content-Type",
                        APPLICATION_JSON_VALUE))
                .andExpect(content().json("""
{"id": 100, 
"name": "adnan",
                        "lastName": "qusay",
                        "companyName": "asml",
                        "email": "adnan@gmail.com",
                        "password": "adnan123"}
"""));

        verify(userService).createUser(expectedUser);
    }

    @Test
    void refreshToken() {
    }
}