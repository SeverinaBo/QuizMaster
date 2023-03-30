
package com.example.QuizMasterBackEndApppliaction.quiz;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuizFormDto {

    private Long questionId;
    private String question;
    private String option1;
    private String option2;

    private String option3;
    private String option4;

    private int correctAnswer;

}
