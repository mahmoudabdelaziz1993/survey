import { FETCH_SURVERS } from "../actions/types";
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SURVERS:
            return action.payload;
        default:
            return state;
    }
} 