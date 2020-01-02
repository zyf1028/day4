<template>
  
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">圈</router-link>
      <router-link to="/seach">消息</router-link>
    </div>
  
</template>

<script>
export default {

}
</script>

<style lang='scss'>
#nav {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
    align-items: center;

  a {
    flex: 1;
    display: block;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>