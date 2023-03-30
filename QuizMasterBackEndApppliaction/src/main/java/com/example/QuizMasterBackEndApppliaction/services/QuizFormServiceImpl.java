package com.example.QuizMasterBackEndApppliaction.services;


import com.example.QuizMasterBackEndApppliaction.quiz.QuizForm;
import com.example.QuizMasterBackEndApppliaction.quiz.QuizFormDto;
import com.example.QuizMasterBackEndApppliaction.repositories.QuizFormRepo;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;


@Service
@Slf4j
@RequiredArgsConstructor
public class QuizFormServiceImpl implements QuizFormService {

    private final QuizFormRepo quizFormRepo;

    @Override
    public List<QuizFormDto> getAllQuestions() {
        return mapToDto(quizFormRepo.getAllQuestions());
    }

    @Override
    public String createQuizForm(QuizFormDto quizFormDto) {
        QuizForm newQuestion = createNewQuestion(quizFormDto);
        quizFormRepo.save(newQuestion);
        return newQuestion.getQuestionId() != null ? "success" : "failed";
    }


    private QuizForm createNewQuestion(QuizFormDto quizFormDto) {
        return QuizForm.builder()
                .questionId(quizFormDto.getQuestionId())
                .question(quizFormDto.getQuestion())
                .option1(quizFormDto.getOption1())
                .option2(quizFormDto.getOption2())
                .option3(quizFormDto.getOption3())
                .option4(quizFormDto.getOption4())
                .correctAnswer(quizFormDto.getCorrectAnswer())
                .build();
    }


    private List<QuizFormDto> mapToDto(Collection<QuizForm> entities) {
        return entities.stream()
                .map(o -> QuizFormDto.builder()
                        .questionId(o.getQuestionId())
                        .question(o.getQuestion())
                        .option1(o.getOption1())
                        .option2(o.getOption2())
                        .option3(o.getOption3())
                        .option4(o.getOption4())
                        .correctAnswer(o.getCorrectAnswer())
                        .build())
                .collect(Collectors.toList());
    }



}




