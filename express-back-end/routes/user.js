App.get('/api/data', (req, res) => {
  db("todo").where('id',5)
  .then((result)=>{
    console.log(result);
    res.json({message:result[0].youdianyisi})
  })
  // res.json({message:'hello'})

});