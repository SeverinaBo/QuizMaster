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
        return newQuestion.getId() != null ? "success" : "failed";
    }


    private QuizForm createNewQuestion(QuizFormDto quizFormDto) {
        return QuizForm.builder()
                .id(quizFormDto.getId())
                .question(quizFormDto.getQuestion())
                .optionA(quizFormDto.getOptionA())
                .optionB(quizFormDto.getOptionB())
                .optionC(quizFormDto.getOptionC())
                .optionD(quizFormDto.getOptionD())
                .correctAnswer(quizFormDto.getCorrectAnswer())
                .build();
    }


    private List<QuizFormDto> mapToDto(Collection<QuizForm> entities) {
        return entities.stream()
                .map(o -> QuizFormDto.builder()
                        .id(o.getId())
                        .question(o.getQuestion())
                        .optionA(o.getOptionA())
                        .optionB(o.getOptionB())
                        .optionC(o.getOptionC())
                        .optionD(o.getOptionD())
                        .correctAnswer(o.getCorrectAnswer())
                        .build())
                .collect(Collectors.toList());
    }}

/*        quizzez.forEach(quizForm -> {
            quizzezDto.add(QuizFormDto
                    .builder()
                    .id(quizForm.getId())
                    .question(quizForm.getQuestion())
                    .answerA(quizForm.getAnswerA())
                    .answerB(quizForm.getAnswerB())
                    .answerC(quizForm.getAnswerC())
                    .answerD(quizForm.getAnswerD())
                    .correctAnswer(quizForm.getCorrectAnswer())
                    .timePerQuestion(quizForm.getTimePerQuestion())
                    .build());
        });
        return quizzezDto;
    }*/



/*

    public Optional<QuizDto> getQuizById(Long id) {
        return quizRepo.findById(id);
    }




    public QuizDto save(QuizDto quizDto){
        return quizRepo.save(quizDto);
    }

    public void deleteById(Long id){
        quizRepo.deleteById(id);
    }

*/



