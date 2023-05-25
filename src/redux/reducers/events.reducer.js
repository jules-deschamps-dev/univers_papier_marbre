import { NEW_EVENT, GET_EVENTS, DELETE_EVENT } from "../actions/events.action";

const initialState = {};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return action.payload;
    case NEW_EVENT:
      return action.payload;
    case DELETE_EVENT:
      return action.payload;
    default:
      return state;
  }
}
