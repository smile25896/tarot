import { SET_SPREAD_ID } from "constant/action";

export function setSpreadId(id) {
  console.log(id);
  return {
    type: SET_SPREAD_ID,
    payload: {
      id: id,
    },
  };
}
