import {useParams} from "react-router-dom";

const Quiz = () => {

    const params = useParams()

    return (
        <h1>Quiz: {params.id}</h1>
    )
}

export default Quiz