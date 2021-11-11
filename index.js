// 1. Importar el module http
import http from 'http';

//2. Crear el servidor
const server = http.createServer((req,res)=>{
    console.log("> Se ha recibido una peticion.");
    // Registrar informacion de la peticion
    console.log(`🤜🤜 Informacion de la peticion`);
    console.log(`🤜url: ${req.url}`);
    console.log(`🤜Request Method: ${req.method}`);
    // Estableciendo el tipo de contenido que se entregara al cliente
    res.setHeader('Content-Type', 'text/html');
    // Envio el contenido 
    res.write("<html>");
    res.write("<head><title>My app</title></head>");
    res.write(`<body><h1>Hello world from the server &#128519</h1><p style="color:red">Recurso Solicitado: ${req.url}</p></body>`);
    res.write("</html>");
    // Terminar la conexion
    res.end();
});
//
//3.Pongo a trabajar el servidor
server.listen(3000,"0.0.0.0",()=>{
    console.log("👩‍🍳Servidor escuchando en http://localhost:3000");
})
