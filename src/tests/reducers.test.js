import { reducer } from "../store/reducers/reducers";
import { GET_WEATHER_FORECAST } from "../store/actions/actionTypes";

describe('reducer', () => {
    it('GET_WEATHER_FORECAST', () => {
        const initialState = {
            json: {},
            isReady: false
        }
        const action = {
            type: GET_WEATHER_FORECAST,
            payload: [1,2,3]
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            json: action.payload,
            isReady: true
        })
    })

    it
})
