<template>
  <div id="app">
    <b-row>
      <b-col>
        <header-component />
      </b-col>
    </b-row>
    <b-container>
      <b-row>
        <b-col class="col-xs-12 col-sm-6 col-md-6 ">
          <sidebar-component />
        </b-col>
      </b-row>
      <router-view/>
    </b-container>
  </div>
</template>

<script>

import HeaderComponent from '@/components/Header'
import SidebarComponent from '@/components/Sidebar'

export default {
  components: {
    HeaderComponent,
    SidebarComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
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
