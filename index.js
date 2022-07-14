const express=require('express');
const routerApi=require('./routes');
const { boomErrorHandler  } = require('./middlewares/error.handler');

const app=express();

const port=3000;

app.use(express.json());  //middleware nativo de express para capturar informacion en formato json

app.get('/',(req,res)=>{
	res.send('Hola mi server Aratoca Charala');
});

routerApi(app);

app.use(boomErrorHandler);

app.listen(port,()=>{
	console.log('Mi port'+port);
});
