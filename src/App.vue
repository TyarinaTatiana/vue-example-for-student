<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vue 3 + Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/">Home</router-link>
      <v-btn @click="goToAbout">About</v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToAbout() {
      this.$router.push('/about');
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
