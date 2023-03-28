import { useEffect, useState } from "react";

import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import QuestionDisplay from "./QuestionDisplay";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import {MoveNextQuestion, MovePrevQuestion, PushAnswer} from "../actions/quizezActions";

export default  function GameLogic() {
    const [check, setChecked] = useState(undefined)

    const result = useSelector(state => state.result.result);
    const { queue, questionId } = useSelector(state => state.quizez);
    const dispatch = useDispatch()


    function onNext(){
        if(questionId < queue.length){

            dispatch(MoveNextQuestion());
            if(result.length <= questionId){
                dispatch(PushAnswer(check))
            }
        }

        setChecked(undefined)
    }

    function onPrev(){
        if(questionId > 0){

            dispatch(MovePrevQuestion());
        }
    }


    function onChecked(check){
        setChecked(check)
    }


    if(result.length && result.length >= queue.length){
        return <Navigate to={'/result'} replace={true}></Navigate>
    }

    return (

                            <>
                                <QuestionDisplay onChecked={onChecked} />

                                <Box>
                                    { questionId > 0 ? <Button onClick={onPrev}>Prev</Button> : <div></div>}
                                    <Button  onClick={onNext}>Next</Button>
                                </Box>
                            </>

    );
}


