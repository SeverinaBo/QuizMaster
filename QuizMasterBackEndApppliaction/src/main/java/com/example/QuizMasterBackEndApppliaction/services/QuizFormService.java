package com.example.QuizMasterBackEndApppliaction.services;


import com.example.QuizMasterBackEndApppliaction.quiz.QuizFormDto;

import java.util.List;

public interface QuizFormService {



    List<QuizFormDto> getAllQuestions();

    String createQuizForm(QuizFormDto quizFormDto);


    void deleteById(Long id);
}
