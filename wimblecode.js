/* GANAR TORNEO: Si un jugador gana, avanza y se enfrenta al sgte jugador que ganó su partido.
GANAR PARTIDO: cada partido tiene juegos, el que gane dos juegos es ganador del partido.
GANAR JUEGO: debe ganar 4 rondas, para que el juego se considere victoria, debe haber una diferencia de 2 con el oponente, cuando se llegue a 4 rondas.
si uno tiene 4 y el otro 3, debe jugarse una 5ta ronda, el maximo de rondas es 7.(si es reñido).
GANAR RONDA: puntos: 0, 15, 30, 40. Cada vez que un jugador se lleva puntos, aumenta en este orden 0->15->30->40->Ganas.
entonces ganas la ronda, pero si ambos tienen 40, es empate.
Si es empate el ganador de un punto ontendré ventaja y si gana el sgte punto, gana la ronda.
Si el jugador con ventaja gana la pelota, gana la ronda., si el jugador en desventaja gana, es de nuevo empate.
*/ 
let players = [
    {name:'Alberto Casero'},
    {name:'David Jimenez'},
    {name:'Javier de Miguel'}, 
    {name:'Eduardo Aguilar'}
];

const puntos = [0, 15, 30,  40]

let match = []; //partido con array vacio

const randomPoint = () => Math.floor(Math.random() * 2) + 1;

const pointWonBy = (playerName) => {
    
    // TENEMOS QUE ACCEDER AL OBJETO DEL JUGADOR POR EL NOMBRE
    match = match.map((playerObject) => {
        if (playerObject.name === playerName){
            playerObject.pointsIndex += 1
            playerObject.points = puntos[playerObject.pointsIndex]
        }
        return playerObject
    })

    console.log(match);

    // TENEMOS QUE SUMAR UN PUNTO AL JUGADOR MODIFICANDO EL OBJETO
        // SI EL JUGADOR TIENE 40 PUNTOS, GANA LA RONDA
        // SIEMPRE QUE TENGA 2 PUNTOS MAS QUE EL OTRO JUGADOR
        // SE SUMA UNA RONDA AL JUGADOR
        // PUNTOS PARTIDO SE PONE A 0

    // SI EL JUGADOR TIENE 4 RONDAS
        // SI TIENE 2 RONDAS MAS QUE EL OTRO JUGADOR
            // PUNTOS PARTIDO SE PONE A 0        
            // SUMAMOS UN JUEGO AL JUGADOR
            // LAS RONDAS SE PONEN A 0
        // SI NO
            // SUMAMOS UNA RONDA AL JUGADOR
            // PUNTOS PARTIDO SE PONE A 0
        
    // SI EL JUGADOR TIENE 2 JUEGOS
        // GANA LA PARTIDA
    
    // console.log diciendo quien ha ganado el punto
}
const createMatch = (jugador1, jugador2) => { //creamos el partido

    match = players
        // [
        //     {name:'Alberto Casero'},
        //     {name:'David Jimenez'},
        //     {name:'Javier de Miguel'}, 
        //     {name:'Eduardo Aguilar'}
        // ]
        .filter((playerObject) => {
            return playerObject.name === jugador1 || playerObject.name === jugador2;
        })
        // [{name: jugador1}, {name: jugador2}]
        .map((playerObject) => {
            return  { 
                name: playerObject.name,
                round:0, 
                points:0, 
                pointsIndex: 0,
                set:0
        }
    })

    // [{name: jugador1, ronda:0, puntos:0, juego:0 }, {name: jugador2, ronda:0, puntos:0, juego:0}


    return  {
        pointWonBy,
    }
}

const game = createMatch("Alberto Casero", "David Jimenez");

game.pointWonBy("Alberto Casero");
game.pointWonBy("Alberto Casero");
game.pointWonBy("Alberto Casero");






// function juego (jugador1, jugador2){
//     // 
//     return randomPoint();
// }
// console.log(juego(1, 2));
// console.log(juego(1, 2));
// console.log(juego(1, 2));