package com.example.QuizMasterBackEndApppliaction.quiz;


import lombok.*;

import javax.persistence.*;



@Builder
@Entity
@Table(name = "QUIZ_FORM")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuizForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "QUESTION", nullable = false)
    private String question;

    @Column(name = "OPTION_A", nullable = false)
    private String optionA;

    @Column(name = "OPTION_B", nullable = false)
    private String optionB;

    @Column(name = "OPTION_C", nullable = false)
    private String optionC;

    @Column(name = "OPTION_D", nullable = false)
    private String optionD;

    @Column(name = "CORRECT_ANSWER", nullable = false)
    private String correctAnswer;

    @Column(name = "TIME_PER_QUESTION", nullable = false)
    private int timePerQuestion;



}