import axios from "../axios-instance";

export const loadData = async ({ commit }) => {
  try {
    const data = await axios.get("/data.json");
    if (data) {
      const { stocks, funds, stockPortfolio } = data.data;

      const portfolio = {
        funds,
        stockPortfolio
      };

      commit("SET_STOCKS", stocks);
      commit("SET_PORTFOLIO", portfolio);
    }
  } catch (err) {
    console.log(err);
  }
};
