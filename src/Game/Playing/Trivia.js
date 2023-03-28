import {Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import QuestionDisplay from "./QuestionDisplay";


 const ButtonStyle = styled('div')(({theme}) => ({
    minHeight: '50vh',
    position: 'center',
    fontWeight: "bold",
    justifyContent: 'center',

}));
const StyledPlayingSection = styled('div')(({theme}) => ({
    width: '150%',
    position: 'relative',
    maxWidth: 500,
    margin: ' auto',
    minHeight: '50vh',
    textAlign: 'center',
    justifyContent: 'center',
    align: "center",
    boxShadow: theme.customShadows.card,
    backgroundColor: theme.palette.background.default,
    marginTop: '40px',
        alignItems: "center",
        transition: 'background-color 0.3s ease-in-out'
}));

export default function Trivia() {

    function onPrev(){
        console.log('onPrev clicked')
    }

    function onNext(){
        console.log('onNext clicked')
    }


    return (
        <>
<StyledPlayingSection>
{/*<QuestionDisplay/>*/}

<ButtonStyle>
            <Button onClick={onPrev}>Previous</Button>
                <Button onClick={onNext}>next </Button>
</ButtonStyle>
</StyledPlayingSection>
        </>
    );
}