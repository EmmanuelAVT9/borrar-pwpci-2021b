// 1. Importar el module http
import { fstat } from 'fs';
import http from 'http';
import fs from "fs";
//2. Crear el servidor
const server = http.createServer((req,res)=>{
    //Obteniendo el recurso solicitado
    let {url, method} = req;

    //Informa en la consola del servidor que se recibe una peticion
    console.log(`📮Se ha solicitado el siguiente recurso: ${method}: ${url}`);

    //filtrar la url
    if(url === '/'){
        //respuesta ante "get /"
        //1. estableciendo el tipo de retoirno
        // como html
        res.setHeader('Content-Type', 'text/html');
        // 2. escribiendo respuesta
        res.write(`
        <html>
            <head>
                <title>Enter message</title>
            </head>
            <body>
                <h1>Send Message<h1>
                <form action="/message" method="POST">
                    <input type="text" name="message">
                    <button type="submit">Send</button>
                </form>
            </body>
        </htm>
        `);
        // Terminar la conexion
        res.end();
    }else if(url === '/message' && method === "POST"){
        // 1.- Se crea una variable para guardar los datos de entrada
        let body = [];
        // 2.- Registrar un manejador para la entrada de los datos
        req.on("data",(chunk)=>{
            // 2.1 Registrando los trozos que llegam añ backend
            console.log(chunk);
            // 2.2 Acumulo los datos de entrada
            body.push(chunk);
            // 2.3 Proteccion en caso de recepción masiva de datos
            if (body.length > 1e6) req.socket.destroy();
        });

        // EjecutaOperacion(ARGS1,ARG2,ARG3, cb)
        // Modelo Asincrono
        // Suma2Numeros(1,2,(res)=>{console.log(res)})
        /*
        1.- let rs = Suma2Numeros(1,2);
        2.- console.loh(res) // undefined
        */

        // 3.- Registrando un manejador de fin de recepción de datos
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            //Guardando el mensaje en un archivo
            fs.writeFile('message.txt', message, (err)=>{
                // Verificar si hubo error
                if (err) {
                    console.log("> No se pudo grabar el archivo");
                    res.statusCode = 500; //InternaL Server Error
                    res.setHeader("Content-Type", "text/html");
                    res.write("ERROR WHEN LOADING FILE");
                    return res.end();
                }
                // en caso de no haber error
                // Establecer el status code de redirecciones
                res.statusCode = 302;
                // Establecer la ruta de direcciones
                res.setHeader('Location','/');
                // Finalizo conexión
                return res.end();
            });
        });
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
        res.write("<body><h1>error 404 Recurso no encontrado: &#9940</h1></body>");
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
