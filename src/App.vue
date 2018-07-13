<template>
  <div id="app">
    <Header/>
    <SideBarLeft/>
    <SideBarRight/>
    <transition :duration="{ enter: 0, leave: 700 }"
    mode="out-in">
        <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'
import SideBarLeft from './components/SideBarLeft'
import SideBarRight from './components/SideBarRight'


export default {
  name: 'App',
   data() {
    return {
      leave: false,
    }
  },
  components:{
    'Header':Header,
    'SideBarLeft':SideBarLeft,
    'SideBarRight': SideBarRight
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  @media screen and (max-width: 1023px){
    // flex-direction: column;
    overflow: auto;
  }
}


</style>
