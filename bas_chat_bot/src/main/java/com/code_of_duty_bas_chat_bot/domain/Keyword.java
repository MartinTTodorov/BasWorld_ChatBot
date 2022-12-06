package com.code_of_duty_bas_chat_bot.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Keyword {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne()
    @JoinColumn(name = "faq_id", referencedColumnName = "id")
    @Cascade({org.hibernate.annotations.CascadeType.ALL})
    private FAQ faq;
    private String keyword;
}
