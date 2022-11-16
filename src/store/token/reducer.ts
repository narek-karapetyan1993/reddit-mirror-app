import { Reducer } from "react";
import { SET_TOKEN, SetTokenAction } from "./action";

export const tokenReducer: Reducer<string, SetTokenAction> = (
  state,
  action
) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.token;
    default:
      return state;
  }
};
