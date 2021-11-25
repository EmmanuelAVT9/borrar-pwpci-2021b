// 1. Importar el module http
import http from "http";
// 2. Importando el module de routes
import routes from "./routes.js" 
// 3. Importando express
// $ npm i express -S
import Express from 'express'

// Crear una instancia de Expres
const app = Express(); // (req, res, next)=>{} event handler

//Registrando elprimer middleware
app.use((req, res, next)=>{
    // Registrar un mensaje con el log
    console.log("💪Estoy en el middleware 1");
    // Dar la instruccion de pasar el siguiente middleware
    next()
});

//Registrando elprimer middleware
app.use((req, res, next)=>{
    // Registrar un mensaje con el log
    console.log("📞Estoy en el middleware 2");
    // Dar la instruccion de pasar el siguiente middleware
    next()
});

app.use((_,res)=>{
    console.log("📞 Estoy en el middleware 3");
    console.log("📞 Emitiendo respuesta a cliente");
    res.send("<h1>Mi respuesta</h1>\n🙋‍♂️ Hola");
});
/**
 * Codigos de emojis
 * Ref: https://www.w3schools.com/charsets/ref_emoji.asp
 */

// Poniendo a escuchar la app de express
app.listen(3000,'0.0.0.0',()=>{
    console.log("👩‍🍳Servidor escuchando en http://localhost:3000");
});


