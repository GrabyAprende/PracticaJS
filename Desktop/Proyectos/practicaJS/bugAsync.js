
async function obtenerUsuario (id) {
    let usuario; 

    return new Promise ((resolve, reject) =>  {
    // ponemos el setTimeout dentro de promise xq es el codigo que queremos esperar    
        setTimeout(( ) => {         //lo q esta dentro de setTimeout se va ejecutar en los seg. q pongamos
            if (id === 1) {
                usuario = { id: 1, nombre: 'John Doe'};
                resolve(usuario);   
            } else {
                reject("usuario no encontrado");
            }
        },2000);
    })
}

const usuario = obtenerUsuario(2).then((usuarioObtenido) => {
    console.log(usuarioObtenido);
}).catch((err) => {
console.error(err)
});
