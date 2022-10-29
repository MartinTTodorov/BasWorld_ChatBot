package com.code_of_duty.bas_chat_bot.controller;

import com.code_of_duty.bas_chat_bot.business.UserService;
import com.code_of_duty.bas_chat_bot.domain.CreateUserRequest;
import com.code_of_duty.bas_chat_bot.domain.CreateUserResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class UserController {
    private final UserService service;
    private boolean isLoggedIn = false;

    @PostMapping("/save")
    public ResponseEntity<CreateUserResponse> createUser(@RequestBody @Valid CreateUserRequest createUserRequest) {
        CreateUserResponse response = service.createUser(createUserRequest);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping()
    public String getUser(String email, String password) {
        if (service.getUser(email, password) != null) {
            isLoggedIn = true;
            return "Successful log in";
        }
        return "Try again later";
    }
}
