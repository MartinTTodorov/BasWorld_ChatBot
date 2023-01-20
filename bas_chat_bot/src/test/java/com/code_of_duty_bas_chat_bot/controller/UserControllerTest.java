package com.code_of_duty_bas_chat_bot.controller;

import com.code_of_duty_bas_chat_bot.business.FAQService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(SpringExtension.class)
@WebMvcTest(FAQController.class)
@AutoConfigureMockMvc(addFilters = false)
class FAQControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private FAQService service;

    @Test
    void getTopics() throws Exception {

        when(service.getTopics())
                .thenReturn(List.of("Order","Account","Services"));

        mockMvc.perform(get("/faq/topics"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(header().string("Content-Type", APPLICATION_JSON_VALUE))
                .andExpect(content().json("""
                        ["Order", "Account","Services"]
                        """));
        verify(service).getTopics();
    }


}
