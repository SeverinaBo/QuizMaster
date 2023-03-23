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

    @Column(name = "OPTIONA", nullable = false)
    private String optionA;

    @Column(name = "OPTIONB", nullable = false)
    private String optionB;

    @Column(name = "OPTIONC", nullable = false)
    private String optionC;

    @Column(name = "OPTIOND", nullable = false)
    private String optionD;

/*    @Column(name = "CORRECTANSWER", nullable = false)
    private String correctAnswer;*/



}