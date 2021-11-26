// 1. Importar el module http
import http from "http";
// 2. Importando el module de routes
import routes from "./routes.js" 
// 3. Importando express
// $ npm i express -S
import Express from 'express'

// Crear una instancia de Expres
const app = Express(); // (req, res, next)=>{} event handler

// 1. Insertando Middleware para la lectura de datos
// desde un cliente
app.use(Express.urlencoded({extended: false}));

// Loggin de peticiones
app.use((req,_,next)=>{
    console.log(`📞 Se ha realizado la petición:`)
});
// Se debe colocar primero ya que el orden de registro
// determina el orden de verificaciòn
app.use('/about',(_,res)=>{
    console.log('📞 Se ha realizado la petición:"/about"');
    res.send("<h1>💡 Acerca de ...</h1>\n🙋‍♂️ Sitio inicial hecho con NodeJs");
});

//Sirviendo recurso de formulario
app.use('/add-student-form',(req, res, next)=>{
    res.send(`
    <form action="/add-student" method="POST">
        <label for="student-name">👨‍🎓Student Name</label>
        <input type="text" name="name" id="student-name">
        <button type="submit">Add student</button>
    </form>
    `);
});

// Ruta que procesa el formulario
app.use('/add-student', (req,res,next)=>{
    // Iterando sobre todo el objeto
    for (const prop in req.body) {
        console.log(`🚩${prop}: ${req.body[prop]}`);
    }
    console.log(`🚩 Metodo: ${req.method}`);
    // Realizamos un direccionamiento
    res.json(req.body);
});

// La ruta raiz entra en todo tipo de peticiòn
app.use(['/','/home'],(_,res)=>{
    console.log('📞 Se ha realizado la petición:"/"');
    res.send("<h1>Mi APP</h1>\n🙋‍♂️ Bienvenido a este sitio");
});


/**
 * Codigos de emojis
 * Ref: https://www.w3schools.com/charsets/ref_emoji.asp
 */

// Poniendo a escuchar la app de express
app.listen(3000,'0.0.0.0',()=>{
    console.log("👩‍🍳Servidor escuchando en http://localhost:3000");
});


