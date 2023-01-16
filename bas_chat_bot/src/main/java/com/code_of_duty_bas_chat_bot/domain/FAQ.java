package com.code_of_duty_bas_chat_bot.domain;

import lombok.*;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.List;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FAQ {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String question;
    private String answer;
    private String topic;
    @OneToMany(mappedBy = "faq")
    @Cascade({org.hibernate.annotations.CascadeType.ALL})
    private List<Keyword> keywords;
}
