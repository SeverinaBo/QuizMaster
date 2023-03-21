package com.example.QuizMasterBackEndApppliaction.controllers;

import java.io.IOException;
import java.util.List;
import com.example.QuizMasterBackEndApppliaction.quiz.QuizFormDto;
import com.example.QuizMasterBackEndApppliaction.services.QuizFormService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/quiz")
@Api(tags = {"this is a quiz controller", "with string array description"})
public class QuizFormController {


private final QuizFormService quizService;



    @GetMapping("/all")
    public List<QuizFormDto> getAllQuestions(){
        return  quizService.getAllQuestions();
    }

    @PostMapping
    public String createQuizForm(@RequestBody QuizFormDto quizForm){
        return quizService.createQuizForm(quizForm);
    }

    @PostMapping("/create")
    public String createQuizForm(
            @RequestParam("question") String question,
                                 @RequestParam("optionA") String optionA,
                                 @RequestParam("optionB") String optionB,
                                 @RequestParam("optionC") String optionC,
                                 @RequestParam("optionD") String optionD,
                                 @RequestParam("correctAnswer") String correctAnswer,
                                @RequestParam("timePerQuestion") int timePerQuestion)
            throws IOException {
        QuizFormDto dto = QuizFormDto.builder()
                .question(question)
                .optionA(optionA)
                .optionB(optionB)
                .optionC(optionC)
                .optionD(optionD)
                .correctAnswer(correctAnswer)
                .timePerQuestion(timePerQuestion)
                .build();

        return quizService.createQuizForm(dto);

/*    @GetMapping("/{id}")
    public Optional<QuizDto> getQuizById(@PathVariable Long id){
        return  quizServiceImpl.getQuizById(id);
    }*/
  /*  @PostMapping("/quiz")
    public String createQuiz(@RequestBody QuizDto quizDto) {
        quizServiceImpl.createQuiz(quizDto);
        return "siccses";
    }*/


/*    @DeleteMapping("/{id}")
    public void deleteQuizById(@PathVariable Long id) {
        quizServiceImpl.deleteById(id);
    }*/


}}