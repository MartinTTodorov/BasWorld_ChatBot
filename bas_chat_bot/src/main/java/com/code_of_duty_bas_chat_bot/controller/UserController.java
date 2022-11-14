package com.code_of_duty_bas_chat_bot.controller;

import com.code_of_duty_bas_chat_bot.business.UserService;
import com.code_of_duty_bas_chat_bot.domain.CreateUserRequest;
import com.code_of_duty_bas_chat_bot.domain.CreateUserResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;


@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class UserController {
    private final UserService service;

    @PostMapping("/save")
    public ResponseEntity<CreateUserResponse> createUser(@RequestBody CreateUserRequest createUserRequest) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/user/save").toUriString());
        return  ResponseEntity.created(uri).body(service.createUser(createUserRequest));
    }


    
}
