CREATE TABLE QUIZ_FORM
(
    ID               BIGINT PRIMARY KEY AUTO_INCREMENT,
    QUESTION         VARCHAR(255) NOT NULL,
    OPTIONA          VARCHAR(255) NOT NULL,
    OPTIONB          VARCHAR(255) NOT NULL,
    OPTIONC          VARCHAR(255) NOT NULL,
    OPTIOND          VARCHAR(255) NOT NULL,
    CORRECTANSWER    VARCHAR(255) NOT NULL

);