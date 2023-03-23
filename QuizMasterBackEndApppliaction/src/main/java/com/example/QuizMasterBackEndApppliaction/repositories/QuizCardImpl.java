package com.example.QuizMasterBackEndApppliaction.repositories;

import com.example.QuizMasterBackEndApppliaction.quiz.QuizCard;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

@RequiredArgsConstructor
public class QuizCardImpl {

    private final JdbcTemplate jdbcTemplate;
    public List<QuizCard> getAllUserQuizez() {
        String sql = "SELECT * FROM USER_CARDS";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(QuizCard.class));
    }
}