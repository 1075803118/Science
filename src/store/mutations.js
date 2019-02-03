import * as types from "./mutations-type.js";

export default {
  [types.loginUser](state, action) {
    state.loginUserName = action;
    try {
      localStorage.setItem("loginUserName", JSON.stringify(state.loginUserName));
    } catch (e) {}
  },

  [types.sessionId](state, action) {
    state.sessionID = action;
    try {
      localStorage.setItem("sessionID", action);
    } catch (e) {}
  }
};
