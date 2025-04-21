import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    language: 1,
    languageOption: [],
  }),
  actions: {
    setLanguage(language) {
      this.language = language;
    },
    setLanguageOption(languageOption) {
      this.languageOption = languageOption;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "store",
        storage: localStorage,
      },
    ],
  },
});
