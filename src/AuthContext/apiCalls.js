// import axios from "axios";
// import { loginFailure, loginStart, loginSuccess } from "./AuthReducer";

// export const login = async (user, dispatch) => {
//   dispatch(loginStart());
//   try {
//     const res = await axios.post("auth/login", user);
//     dispatch(loginSuccess(res.data));
//     console.log(res);
//   } catch (err) {
//     dispatch(loginFailure());
//   } 
// };   