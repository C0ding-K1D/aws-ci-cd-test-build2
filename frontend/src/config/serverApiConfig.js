console.log(
  "process env REACT_APP_DEV_REMOTE",
  process.env.REACT_APP_DEV_REMOTE
);

export const API_BASE_URL =
  process.env.NODE_ENV == "production" ||
  process.env.REACT_APP_DEV_REMOTE == "remote"
    ? "https://100.24.69.240"
    : "https://100.24.69.240";

// export const API_BASE_URL = "https://starter-mern.herokuapp.com/api/";
export const ACCESS_TOKEN_NAME = "x-auth-token";
