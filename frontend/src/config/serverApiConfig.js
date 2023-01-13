console.log(
  "process env REACT_APP_DEV_REMOTE",
  process.env.REACT_APP_DEV_REMOTE
);

export const API_BASE_URL =
  process.env.NODE_ENV == "production" ||
  process.env.REACT_APP_DEV_REMOTE == "remote"
    ? "https://Newcloudcrowd-env.eba-tvgugfpd.us-east-1.elasticbeanstalk.com/api"
    : "https://Myprojectcicd-env.eba-yztimgpp.us-east-1.elasticbeanstalk.com";

// export const API_BASE_URL = "https://starter-mern.herokuapp.com/api/";
export const ACCESS_TOKEN_NAME = "x-auth-token";
