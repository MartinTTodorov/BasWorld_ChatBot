import http from "../http-base";

const save = data => {
    return http.post("/user/save", data);
};

export default save;