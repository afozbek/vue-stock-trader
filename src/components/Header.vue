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
          <router-link class="nav-link" to>End Day</router-link>
        </li>
        <li class="mr-3">
          <div class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save / Load
              <span class="caret"></span>
            </a>

            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Save Data</a>
              <a class="dropdown-item" href="#">Load Data</a>
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
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style></style>
