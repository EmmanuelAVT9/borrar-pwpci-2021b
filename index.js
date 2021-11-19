// 1. Importar el module http
import http from "http";
// 2. Importando el module de routes
import routes from "./routes.js" 
// 3. Importando express
// $ npm i express -S
import Express from 'express'

// Crear una instancia de Expres
const app = Express(); // (req, res, next)=>{} event handler

/**
 * Codigos de emojis
 * Ref: https://www.w3schools.com/charsets/ref_emoji.asp
 */
//2. Crear el servidor
// cb (callback) es una petición que se ejecutara
// ante cualquier peticion de un recurso a nuestro server
// (request, response)
const server = http.createServer(routes.requestHandler);
// 3.Pongo a trabajar el servidor
// le paso un callback que escribira en la consola
// cuando el servidor este escuchando
// 192.168.100.11:3000
server.listen(3000,"0.0.0.0",()=>{
    console.log("👩‍🍳Servidor escuchando en http://localhost:3000");
})
