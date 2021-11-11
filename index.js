// 1. Importar el module http
import http from 'http';

//2. Crear el servidor
const server = http.createServer((req,res)=>{
    console.log("> Se ha recibido una peticion.");
    // Registrar informacion de la peticion
    console.log(`🤜🤜 Informacion de la peticion`);
    console.log(`🤜url: ${req.url}`);
    console.log(`🤜Request Method: ${req.method}`);
    console.log(`🤜Plataforma del cliente: ${req.headers["sec-ch-ua-platform"]}`);
    // Respondemos
    res.write("Esta es la respuesta del servidor.");
    // Terminar la conexion
    res.end();
});
//
//3.Pongo a trabajar el servidor
server.listen(3000,"192.168.56.1",()=>{
    console.log("👩‍🍳Servidor escuchando en http://192.168.56.1:3000");
})
