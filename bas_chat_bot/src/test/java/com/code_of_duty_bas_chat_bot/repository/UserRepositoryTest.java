package com.code_of_duty_bas_chat_bot.repository;

import com.code_of_duty_bas_chat_bot.repository.entity.UserEntity;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import javax.persistence.EntityManager;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class UserRepositoryTest {


    @Autowired
    private EntityManager entityManager;

    @Autowired
    private UserRepository userRepository;

    @Test
    void save_shouldSaveUserWithAllFields() {
        UserEntity user = UserEntity.builder().id(2L).name("ahmed").lastName("said").CompanyName("asml").email("ahmedsaid@gmail.com").password("ahmed-3").role("admin").build();

        UserEntity savedUser = userRepository.save(user);
        assertNotNull(savedUser.getId());

        savedUser = entityManager.find(UserEntity.class, savedUser.getId());

        UserEntity expectedUser = UserEntity.builder().id(savedUser.getId()).name(savedUser.getName()).lastName(savedUser.getLastName()).CompanyName(savedUser.getCompanyName()).email(savedUser.getEmail()).password(savedUser.getPassword()).role(savedUser.getRole()).build();

        assertEquals(savedUser, expectedUser);
    }
}
