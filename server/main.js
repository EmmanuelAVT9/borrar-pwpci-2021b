// Importando express
// $ npm i express -S
import Express from 'express'

// Importar enritadores
import adminRoute from './routes/admin.route.js';
import homeRoute from './routes/home.route.js';

console.log(`Variable de entorno: ${process.env.NODE_ENV}`);

// Crear una instancia de Expres
const app = Express(); // (req, res, next)=>{} event handler

// 1. Insertando Middleware para la lectura de datos
// desde un cliente
app.use(Express.urlencoded({extended: false}));

// Loggin de peticiones
app.use((req,_,next)=>{
    console.log(`📞 Se ha realizado la petición: "${req.method} : ${req.path}"`);
    next();
});

// Se agrega a la aplicación la ruta admin
app.use('/admin',adminRoute);
// Se agrega a la aplicación la ruta home
app.use(homeRoute);

/**
 * Codigos de emojis
 * Ref: https://www.w3schools.com/charsets/ref_emoji.asp
 */

// Poniendo a escuchar la app de express
app.listen(3000,'0.0.0.0',()=>{
    console.log("👩‍🍳Servidor escuchando en http://localhost:3000");
});


