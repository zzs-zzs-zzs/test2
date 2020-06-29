const express=require('express');
const path=require('path');
const mysql=require('mysql')

const exec=require('child_process').exec;

//创建一个路由容器
const router=express.Router();


//解决跨域
router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');  //设置允许跨域的域名，*代表允许任意域名跨域
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');//允许的header类型
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'); //跨域允许的请求方式 
    if (req.method == 'OPTIONS') {
      res.send(200);//让options尝试请求快速结束
    } else {
      next();
    }
  });


  router.post('/login',function(req,res){
    res.writeHead(200, {'Content-Type':'text/json;charset=utf-8','Access-Control-Allow-Origin':'*'});
      //if(req.body.username=="123456" && req.body.password=="123456")
      if(req.body.username=="1" && req.body.password=="1")
      {
        console.log( req.body);
        res.end('true');
      }
      else{
        res.end('false')
      }
 })









  router.get('/change',function(req,res){
    exec('D:\\softwares\\python-3.7.2-amd64\\pythonw.exe D:\\Study\\物联网实训课\\py\\0.py',function(err,sedout,stderr){
      res.writeHead(200, {'Content-Type':'text/json;charset=utf-8','Access-Control-Allow-Origin':'*'});
      if(err) {
        console.log('get weather api error:'+stderr);
      } 
      else{
        res.end('ok0');
      }
    })
 })


 router.get('/img/temp.jpg',function(req,res){
    res.sendFile(path.join(__dirname,req.url));
 })

 router.get('/img/humi.jpg',function(req,res){
  res.sendFile(path.join(__dirname,req.url));
})

router.get('/img/humi1.jpg',function(req,res){
  res.sendFile(path.join(__dirname,req.url));
})

router.get('/img/light.jpg',function(req,res){
  res.sendFile(path.join(__dirname,req.url));
})

router.get('/img/pa.jpg',function(req,res){
  res.sendFile(path.join(__dirname,req.url));
})



 router.get('/turnon',function(req,res){
  exec('D:\\softwares\\python-3.7.2-amd64\\pythonw.exe D:\\Study\\物联网实训课\\py\\1.py',function(err,sedout,stderr){
    res.writeHead(200, {'Content-Type':'text/json;charset=utf-8','Access-Control-Allow-Origin':'*'});
    if(err) {
      console.log('get weather api error:'+stderr);
    } 
    else{
      res.end('ok1');
    }
  })
})

router.get('/turnoff',function(req,res){
  exec('D:\\softwares\\python-3.7.2-amd64\\pythonw.exe D:\\Study\\物联网实训课\\py\\-1.py',function(err,sedout,stderr){
    res.writeHead(200, {'Content-Type':'text/json;charset=utf-8','Access-Control-Allow-Origin':'*'});
    if(err) {
      console.log('get weather api error:'+stderr);
    } 
    else{
      res.end('ok-1');
    }
  })
})


router.get('/getPa',function(req,res){
  exec('D:\\softwares\\python-3.7.2-amd64\\pythonw.exe D:\\Study\\物联网实训课\\py\\pa.py',function(err,sedout,stderr){
    if(err) {
      console.log('get weather api error:'+stderr);
    }
    else{
      setTimeout(function(){
        exec('D:\\softwares\\python-3.7.2-amd64\\pythonw.exe D:\\Study\\物联网实训课\\py\\temp.py',function(err,sedout,stderr){
          if(err) {
            console.log('get weather api error:'+stderr);
          }
          else{
            setTimeout(function(){
                exec('D:\\softwares\\python-3.7.2-amd64\\pythonw.exe D:\\Study\\物联网实训课\\py\\humi.py',function(err,sedout,stderr){
                  if(err) {
                    console.log('get weather api error:'+stderr);
                  }
                  else{
                    setTimeout(function(){
                      exec('D:\\softwares\\python-3.7.2-amd64\\pythonw.exe D:\\Study\\物联网实训课\\py\\light.py',function(err,sedout,stderr){
                        if(err) {
                          console.log('get weather api error:'+stderr);
                        }
                        else{
                          setTimeout(function(){
                             exec('D:\\softwares\\python-3.7.2-amd64\\pythonw.exe D:\\Study\\物联网实训课\\py\\humiOfCloth.py',function(err,sedout,stderr){
                            if(err) {
                              console.log('get weather api error:'+stderr);
                            }
                            else{
                              res.writeHead(200, {'Content-Type':'text/json;charset=utf-8','Access-Control-Allow-Origin':'*'});
                              res.end('allOk');
                            }
                          });
                          },1200);
                        }
                    });
                    },1200);
                  }
            });
            },1200);
          }
        });
      },1200);
    }
  });
})


router.get('/getTemp',function(req,res){
 
  
})


router.get('/getHumi',function(req,res){
  
})



router.get('/getLight',function(req,res){
  
})

router.get('/gethumiOfCloth',function(req,res){
  
})



 


router.get('/temp',function(req,res){
    //创建连接
    const connection = mysql.createConnection({
      host:'127.0.0.1',
      user:'root',
      password:'12345678',
      database:'lot'
    });
    connection.connect();
    connection.query('SELECT * FROM `temp` ', function (error, results, fields) {
      if (error) throw error;//抛出异常阻止代码往下执行
      // 没有异常打印输出结果
      else{
        res.writeHead(200, {'Content-Type':'text/json;charset=utf-8','Access-Control-Allow-Origin':'*'});
        const result=results[results.length-1];
        res.end(JSON.stringify(result));
        console.log('The solution is: ',result);
      }
    });
    
    //关闭连接	（关闭冰箱门）
    connection.end();
})


router.get('/humi',function(req,res){
  const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'12345678',
    database:'lot'
  });
  connection.connect();
  connection.query('SELECT * FROM `humi` ', function (error, results, fields) {
    if (error) throw error;//抛出异常阻止代码往下执行
    // 没有异常打印输出结果
    else{
      res.writeHead(200, {'Content-Type':'text/json;charset=utf-8','Access-Control-Allow-Origin':'*'});
      const result=results[results.length-1];
      res.end(JSON.stringify(result));
      console.log('The solution is: ',result);
    }
  });
  
  //关闭连接	（关闭冰箱门）
  connection.end();
})


router.get('/light',function(req,res){
  const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'12345678',
    database:'lot'
  });
  connection.connect();
  connection.query('SELECT * FROM `light` ', function (error, results, fields) {
    if (error) throw error;//抛出异常阻止代码往下执行
    // 没有异常打印输出结果
    else{
      res.writeHead(200, {'Content-Type':'text/json;charset=utf-8','Access-Control-Allow-Origin':'*'});
      const result=results[results.length-1];
      res.end(JSON.stringify(result));
      console.log('The solution is: ',result);
    }
  });
  
  //关闭连接	（关闭冰箱门）
  connection.end();
})


router.get('/pa',function(req,res){
  const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'12345678',
    database:'lot'
  });
  connection.connect();
  connection.query('SELECT * FROM `pa`', function (error, results, fields) {
    if (error) throw error;//抛出异常阻止代码往下执行
    // 没有异常打印输出结果
    else{
      res.writeHead(200, {'Content-Type':'text/json;charset=utf-8','Access-Control-Allow-Origin':'*'});
      const result=results[results.length-1];
      res.end(JSON.stringify(result));
      console.log('The solution is: ',result);
    }
    
  });
  
  //关闭连接	（关闭冰箱门）
  connection.end();
})

router.get('/humiOfCloth',function(req,res){
  const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'12345678',
    database:'lot'
  });
  connection.connect();
  connection.query('SELECT * FROM `humiofcloth`', function (error, results, fields) {
    if (error) throw error;//抛出异常阻止代码往下执行
    // 没有异常打印输出结果
    else{
      res.writeHead(200, {'Content-Type':'text/json;charset=utf-8','Access-Control-Allow-Origin':'*'});
      const result=results[results.length-1];
      res.end(JSON.stringify(result));
      console.log('The solution is: ',result);
    }
    
  });
  
  //关闭连接	（关闭冰箱门）
  connection.end();
})




module.exports=router;





