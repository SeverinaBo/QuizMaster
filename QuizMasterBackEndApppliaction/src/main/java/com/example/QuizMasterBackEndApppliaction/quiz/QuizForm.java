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
    @Column(name = "QUESTION_ID")
    private Long questionId;

    @Column(name = "QUESTION")
    private String question;

    @Column(name = "OPTION1")
    private String option1;

    @Column(name = "OPTION2")
    private String option2;

    @Column(name = "OPTION3")
    private String option3;

    @Column(name = "OPTION4")
    private String option4;

    @Column(name = "CORRECTANSWER")
    private int correctAnswer;



}