import {  useState } from "react";

import QuestionDisplay from "./QuestionDisplay";

export default  function QuizLogic() {
    const [check, setChecked] = useState(undefined)




    function onChecked(check){
        setChecked(check)
    }



    return (
                            <>
                                <QuestionDisplay onChecked={onChecked} />

                            </>

    );
}


