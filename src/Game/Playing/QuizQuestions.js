import React from "react";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import {shape} from "prop-types";
import {alpha} from "@mui/material/styles";
import palette from "../../theme/palette";

const QuizQuestion = ({ question }) => {
    const { question: q, optionA, optionB, optionC, optionD } = question;

    return (

        <div>
            <Typography variant="h3"  sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: (2, 2.5),
                        borderRadius: Number(shape.borderRadius) * 1.5,
                        backgroundColor: alpha(palette.grey[500], 0.12),
                    }}  >
                {q}</Typography>

                <Button>{optionA}</Button>
                <Button>{optionB}</Button>
                <Button>{optionC}</Button>
                <Button>{optionD}</Button>

        </div>
    );
};

export default QuizQuestion;
