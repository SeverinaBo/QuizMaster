package com.example.QuizMasterBackEndApppliaction.controllers;

import com.example.QuizMasterBackEndApppliaction.quiz.QuizForm;
import com.example.QuizMasterBackEndApppliaction.quiz.QuizFormDto;
import com.example.QuizMasterBackEndApppliaction.services.QuizFormService;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/quiz")
@Api(tags = {"this is a quiz controller", "with string array description"})
public class QuizFormController {
private final QuizFormService quizService;

    @GetMapping("/questions")
    public List<QuizFormDto> getAllQuestions(){
        return  quizService.getAllQuestions();
    }

    @PostMapping("/create")
    public String createQuizForm(@RequestBody @Valid QuizFormDto quizForm){
        return quizService.createQuizForm(quizForm);
    }


}