import request from "./http.js";

const apiURL = {
  url: [
    {
      url: "getLanguageList", //获取语言
      type: "post",
      code: "/languageList",
    },
  ],
};

export const Api = new (class {
  constructor() {
    apiURL.url.forEach((rApi) => {
      let { url, type, code } = rApi;
      this[url] = (param = {}) => {
        return new Promise((resolve, reject) => {
          request[type](code, param)
            .then((res) => {
              resolve(res);
            })
            .catch((e) => {
              reject(e);
            });
        });
      };
    });
  }
})();

export default Api;
