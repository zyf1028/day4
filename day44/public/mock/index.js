const Mock=require('mockjs')
const Data=Mock.mock({
  'list|23':[
    {
      'img':'@image(@color)',
      'id':'@id',
      'name':'@cname',
      'content':'@cword(10)'
    }
  ]
})
module.exports={
  List:Data.list
}