import ajax from "../../../utils/axios";

export const postLogin = async (username, password) => {
  let res;
  try {
    /*     res = await ajax.post(
      "/endpoint/login",
      { username, password },
      { timeout: 3000 }
    ); */

    return res;
  } catch (error) {
    console.error("Error en: api.helper.js - postLogin() - Error", { error });
    return error.response;
  }
};

export const postLogout = async () => {
  let response;
  try {
    /* let response = await ajax.post("/endpoint/logout"); */
    return response;
  } catch (error) {
    console.error("Error en: api.helper.js - postLogout() - Error", error);
    return error.response.data;
  }
};
