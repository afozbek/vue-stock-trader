<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Stock Trader</router-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/portfolio"
            >Portfolio</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/stocks"
            >Stocks</router-link
          >
        </li>
      </ul>

      <ul class="navbar-nav">
        <li class="mr-3">
          <button class="nav-link link-btn" @click="endDay">End Day</button>
        </li>
        <li class="mr-3">
          <div class="nav-item dropdown show">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              @click="toggleDropDown"
            >
              Save / Load
              <span class="caret"></span>
            </a>

            <div :class="[{ show: isDropdownOpen }, 'dropdown-menu']">
              <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
              <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
            </div>
          </div>
        </li>
      </ul>
      <strong class="navbar-text navbar-right">
        Funds:
        <span class="text-secondary">{{ funds | currency }}</span>
      </strong>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

import axios from "../axios-instance";

export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    toggleDropDown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    async saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };

      try {
        await axios.put("/data.json", data);
      } catch (err) {
        console.log("Axios failed", err);
      }
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>

<style scoped>
.link-btn {
  border: none;
  background: none;
  outline: none;
}
</style>
