<template>
  <div id="app" :class="{contact: isContactTheme()}">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <header-main></header-main> -->
    <nav-main></nav-main>
    <router-view></router-view>
  </div>
</template>

<script>

import HeaderMain from "./components/shared/Header.vue";
import NavMain from "./components/shared/Nav.vue";


export default {


  data () {
    return {
      name: 'app',
      todos: [],
    //   msg: 'Ma première page web avec Vue.JS'
    }
  },
  methods: {
    isContactTheme() {
      console.log(this.$route);
      return this.$route.name === "contact";
    }
  },
  components: {
    HeaderMain,
    NavMain
    }
}
</script>


<style lang="scss">
// @import "assets/styles/global.scss";

* {
margin: 0;
padding: 0;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 20px;
  background-color: #1abc9c;
  min-height: 100vh;
  // margin: 0;
}
#app.contact {
  background-color: #e67e22;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


</style>
