package com.code_of_duty_bas_chat_bot.domain;

import com.code_of_duty_bas_chat_bot.repository.entity.UserEntity;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Data
@RequiredArgsConstructor
public class Conversation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToMany
    private List<Message> messages;

    @OneToMany
    private List<UserEntity> participants;

    private LocalDateTime date_time;

    private boolean is_active;

}
