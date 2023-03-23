package com.example.QuizMasterBackEndApppliaction.repositories;


import com.example.QuizMasterBackEndApppliaction.quiz.QuizForm;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface QuizFormRepo extends JpaRepository<QuizForm, Long> {



    @Query(value = "SELECT q FROM QuizForm q")
    List<QuizForm> getAllQuestions();


}