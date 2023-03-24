
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

    private Long id;
    private String question;
    private String optionA;
    private String optionB;

   private String optionC;
    private String optionD;

    private String correctAnswer;

}
