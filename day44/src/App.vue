<template>
  <div id="app">
    <header>

    </header>
    <main>
      <router-view></router-view>
    </main>
    <FooterBar/>
  </div>
</template>

<script>
import FooterBar from './components/FooterBar'
export default {
  components:{
    FooterBar
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header{
  width: 100%;
  height: 45px;
  background: saddlebrown;
}
main{
  flex: 1;
  overflow: auto;
  background: darkcyan;
}


</style>
