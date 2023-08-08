const datos = [
    {
        id: 1,
        nombre: "Juan",
        habilidades: ["JavaScript", "HTML", "CSS"],
        proyectos: [
            {id: 1, nombre: "Proyecto 1"},
            {id: 2, nombre: "Proyecto 2"}
        ]
    },
    {
        id: 2,
        nombre: "María",
        habilidades: ["Python", "SQL", "Django"],
        proyectos: [
            {id: 3, nombre: "Proyecto 3"},
            {id: 4, nombre: "Proyecto 4"}
        ]
    },
    {
        id: 3,
        nombre: "Pedro",
        habilidades: ["Java", "Spring", "Hibernate"],
        proyectos: [
            {id: 5, nombre: "Proyecto 5"},
            {id: 6, nombre: "Proyecto 6"}
        ]
    },
]
const desarrolladoresJavaScript = () => { //creo la funcion que retorna un array de las datos
    return datos.filter((datosUsuario) => { //utilizo filter para recorrer el array de datos, que seria datosUsuario para retornar los elementos que cumplan una condicion
        return datosUsuario.habilidades.find((habilidad) => { //utilizo un find para recorrer la lista de habilidades buscando un elemento 
            return habilidad === "JavaScript" //retorno si la comparacion es igual al elemento que busco
        })
    });
}

const nombresProyectos = () => {
    return datos.reduce((acumulador, datosUsuario) => { //utilizo un reduce y le paso dos parametros, un acumulador vacio y los datos
        
        const arrayProyectos = datosUsuario.proyectos.map((proyecto) => { //hago un map para traer los proyectos
            return proyecto.nombre;
        });

        return [
            ...acumulador, ...arrayProyectos // retorno el acumulador, con los proyectos y los desgtructuro con los (...) para que quede un solo array
        ]
    }, [])
}

console.log("1 ", desarrolladoresJavaScript())
console.log("2 ", nombresProyectos())

