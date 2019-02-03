const state = {
  sessionID:"",
  loginUser:""
};

try{
  if(localStorage.getItem('loginUserName')){
    state.loginUserName = JSON.parse(localStorage.getItem("loginUserName"));
  }
}catch (e) {
  localStorage.setItem("loginUserName", JSON.stringify(state.loginUserName));
}

try{
  if(localStorage.getItem('sessionID')){
    state.sessionID = JSON.parse(localStorage.getItem("sessionID"));
  }
}catch (e) {
  localStorage.setItem("sessionID", JSON.stringify(state.sessionID));
}
