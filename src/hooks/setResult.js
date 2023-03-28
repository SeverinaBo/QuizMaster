import { postServerData } from '../helper/helper'
import * as Action from '../redux/result_reducer'

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResult(result))
    } catch (error) {
        console.log(error)
    }
}
export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResult(index));
    } catch (error) {
        console.log(error)
    }
}


export const usePublishResult = (resultData) => {
    const { result, name } = resultData;
    (async () => {
        try {
            if(result !== [] && !name) throw new Error("Couldn't get Result");
            /*await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData, data => data)*/
        } catch (error) {
            console.log(error)
        }
    })();
}