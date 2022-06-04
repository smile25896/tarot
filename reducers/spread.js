import { SET_SPREAD_ID } from "constant/action";

const initState = {
  spreadId: 1,
};

export default function (state = initState, action) {
  switch (action.type) {
    case SET_SPREAD_ID:
      return { ...initState, spreadId: action.payload.id };
    default:
      return state;
  }
}
