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

    @Column(name = "QUESTION")
    private String question;

    @Column(name = "OPTIONA")
    private String optionA;

    @Column(name = "OPTIONB")
    private String optionB;

    @Column(name = "OPTIONC")
    private String optionC;

    @Column(name = "OPTIOND")
    private String optionD;

    @Column(name = "CORRECTANSWER")
    private String correctAnswer;



}