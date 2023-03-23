package com.example.QuizMasterBackEndApppliaction.repositories;

import com.example.QuizMasterBackEndApppliaction.quiz.QuizCard;
import com.example.QuizMasterBackEndApppliaction.quiz.QuizForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuizCardRepository extends JpaRepository<QuizCard, Long> {

    @Query(value = "SELECT q FROM QuizForm q")
    List<QuizForm> getAllUserQuizez();

}
