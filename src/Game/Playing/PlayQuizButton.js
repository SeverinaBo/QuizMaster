import * as React from "react";
import {Button} from "@mui/material";

import {Translation} from "react-i18next";
import {useNavigate} from "react-router-dom";

function PlayQuizButton() {

    const navigate = useNavigate();

    return (
        <>
            <Translation>
                {(t, {i18n}) => (
                    <>

                        <Button style={{marginTop: '10px', marginBottom: '20px',width: '250px' }}  type="submit" variant="contained"
                                onClick={() => {
                                    navigate('/game', {replace: true});
                                }}>
                            {t("playQ")}
                        </Button>

                    </>
                )}
            </Translation>
        </>
    )
}


export default PlayQuizButton;