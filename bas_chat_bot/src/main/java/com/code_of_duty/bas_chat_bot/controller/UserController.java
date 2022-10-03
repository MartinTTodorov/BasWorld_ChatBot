package com.code_of_duty.bas_chat_bot.controller;

    import com.code_of_duty.bas_chat_bot.business.CreateUserUseCase;
import com.code_of_duty.bas_chat_bot.business.impl.CreateUserUseCaseImpl;
import com.code_of_duty.bas_chat_bot.domain.CreateUserRequest;
import com.code_of_duty.bas_chat_bot.domain.CreateUserResponse;
import com.code_of_duty.bas_chat_bot.repository.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.jni.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class UserController {
    private final CreateUserUseCase createUserUseCase;

    @PostMapping("/save")
    public ResponseEntity<CreateUserResponse> createUser( @RequestBody @Valid CreateUserRequest createUserRequest) {
        CreateUserResponse response = createUserUseCase.createUser(createUserRequest);

        return  ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/abc")
    public String getText() {

        return "abc";
    }
}
