package com.code_of_duty_bas_chat_bot.business.impl;

import com.code_of_duty_bas_chat_bot.domain.requests.CreateUserRequest;
import com.code_of_duty_bas_chat_bot.repository.UserRepository;
import com.code_of_duty_bas_chat_bot.repository.entity.UserEntity;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceImplTest {


    @Mock
    private UserRepository userRepositoryMock;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserServiceImpl userService;

    @Test
    void loadUserByUsername() {
        UserEntity user = UserEntity.builder().name("radi").lastName("servet").CompanyName("i donno").email("rad@gmail.com").password("test123").role("admin").build();

        when(userRepositoryMock.findByEmail("rad@gmail.com")).thenReturn(user);

        UserDetails expected = userService.loadUserByUsername(user.getEmail());

        assertEquals(user.getPassword(), expected.getPassword());

        verify(userRepositoryMock).findByEmail(user.getEmail());
    }

    @Test
    void findByEmail() {
        UserEntity user = UserEntity.builder().name("radi").lastName("servet").CompanyName("i donno").email("rad@gmail.com").password("test123").role("admin").build();

        when(userRepositoryMock.findByEmail("rad@gmail.com")).thenReturn(user);

        UserEntity expected = userService.findByEmail(user.getEmail());

        assertEquals(user, expected);

        verify(userRepositoryMock).findByEmail(user.getEmail());
    }

    @Test
    void createUser_ShouldReturnUserWithAllFields() {
        UserEntity user = UserEntity.builder().name("radi").lastName("servet").CompanyName("i donno").email("rad@gmail.com").password("test123").role("admin").build();

        when(userRepositoryMock.save(user)).thenReturn(user.toBuilder().build());

        CreateUserRequest request = CreateUserRequest.builder().name(user.getName()).lastName(user.getLastName()).CompanyName(user.getCompanyName()).email(user.getEmail()).password(user.getPassword()).role(user.getRole()).build();

        UserEntity expectedUser = userService.createUser(request);

        assertEquals(user, expectedUser);

        verify(userRepositoryMock).save(user);
    }
}