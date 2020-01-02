const dataList=require('./public/mock/index')

module.exports={
  lintOnSave:false,
  devServer:{
    before(app){
      app.get('/api/list',(req,res)=>{
        res.json(dataList)
      })
    }
  }
}