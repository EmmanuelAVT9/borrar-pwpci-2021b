// 1. Importar el module http
import http from 'http';

//2. Crear el servidor
const server = http.createServer((req,res)=>{
    //Obteniendo el recurso solicitado
    let {url} = req;

    //Informa en la consola del servidor que se recibe una peticion
    console.log("> Se ha recibido una peticion.");

    //filtrar la url
    if(url === '/'){
        //respuesta ante "get /"
        //1. estableciendo el tipo de retoirno
        // como html
        res.setHeader('Content-Type', 'text/html');
        // 2. escribiendo respuesta
        res.write('<html>');
        res.write('<head><title>My app</title></head>');
        res.write('<body><h1>&#9889; Hello world from the server &#9889;</h1></body>');
        res.write('</html>');
        // Terminar la conexion
        res.end();
    }else if(url === '/author'){
         //respuesta ante "get /"
        //1. estableciendo el tipo de retoirno
        // como html
        res.setHeader('Content-Type', 'text/html');
        // 2. escribiendo respuesta
        res.write('<html>');
        res.write('<head><title>My app</title></head>');
        res.write('<body>');
        res.write('<h1>&#9889; Author &#9889;</h1>');
        res.write('<p>Emmanuel Alejandro Vazquez Trujillo</p>');
        res.write('</body>');
        res.write('</html>');
        // Terminar la conexion
        res.end();
    }else{
        //se registra el recurso no encontrado
        console.log(`❌No se ha encontrado el recurso: ${url}`);
        //recurso no encontrado
        res.setHeader('Content-Type', 'text/html');
        // 2. escribiendo respuesta
        res.write("<html>");
        res.write("<head><title>My app</title></head>");
        res.write("<body><h1>eror 404 Recurso no encontrado: &#9940</h1></body>");
        res.write("</html>");
        // Terminar la conexion
    res.end();
    }
});
//
//3.Pongo a trabajar el servidor
server.listen(3000,"0.0.0.0",()=>{
    console.log("👩‍🍳Servidor escuchando en http://localhost:3000");
})
