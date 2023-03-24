import { useEffect, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function GameLogic() {

    const [timeOut, setTimeOut] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [questionData, setQuestionData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/all");
            const data = await response.json();
            setQuestionData(data);
        }
        fetchData();
    }, []);

    return (

                            <>
                                <div className="top">
                                    <div className="timer">
                                        <Timer
                                            setTimeOut={setTimeOut}
                                            questionNumber={questionNumber}
                                        />
                                    </div>
                                </div>
                                <div className="bottom">
                                    {questionData && (
                                        <Trivia
                                            data={questionData}
                                            questionNumber={questionNumber}
                                            setQuestionNumber={setQuestionNumber}
                                            setTimeOut={setTimeOut}
                                        />
                                    )}
                                </div>
                            </>

    );
}

export default GameLogic;
