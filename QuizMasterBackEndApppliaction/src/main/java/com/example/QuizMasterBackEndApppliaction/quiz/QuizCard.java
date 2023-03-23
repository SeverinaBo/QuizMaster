package com.example.QuizMasterBackEndApppliaction.quiz;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Builder
@Entity
@Table(name = "USER_QUIZ_CARDS")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuizCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String quizTitle;

    private String cover;
    private String questAmount;


}
