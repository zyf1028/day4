<template>
  <div class="home">
    <li v-for="(item,index) in Imglist" :key='index'>
      <img :src="item.img" alt="">
      <span>{{item.name}}</span>
      <span>{{item.content}}</span>
    </li>
    
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  data() {
    return {
      Imglist:[]
    }
  },
  methods: {
     getlist:()=>{
      axios.get('/api/list').then(res=>{
        // console.log(res.data)
      this.Imglist=res.data
      console.log(this.list)
    })
    }
  },
  created() {
    this.getlist()
  },
  components: {
    
  }
}
</script>
