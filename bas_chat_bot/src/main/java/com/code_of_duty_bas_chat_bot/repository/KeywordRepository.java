package com.code_of_duty_bas_chat_bot.repository;

import com.code_of_duty_bas_chat_bot.domain.Keyword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KeywordRepository extends JpaRepository<Keyword, Long> {

    List<Keyword> findAllByKeywordIn(List<String> keywords);




}
