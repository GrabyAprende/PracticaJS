/* GANAR TORNEO: Si un jugador gana, avanza y se enfrenta al sgte jugador que ganó su partido.
GANAR PARTIDO: cada partido tiene juegos, el que gane dos juegos es ganador del partido.
GANAR JUEGO: debe ganar 4 rondas, para que el juego se considere victoria, debe haber una diferencia de 2 con el oponente, cuando se llegue a 4 rondas.
si uno tiene 4 y el otro 3, debe jugarse una 5ta ronda, el maximo de rondas es 7.(si es reñido).
GANAR RONDA: puntos: 0, 15, 30, 40. Cada vez que un jugador se lleva puntos, aumenta en este orden 0->15->30->40->Ganas.
entonces ganas la ronda, pero si ambos tienen 40, es empate.
Si es empate el ganador de un punto ontendré ventaja y si gana el sgte punto, gana la ronda.
Si el jugador con ventaja gana la pelota, gana la ronda., si el jugador en desventaja gana, es de nuevo empate.
*/ 
const jugadores = [
    {nombre:'Alberto Casero', rondasGanadas: 0},
    {nombre:'David Jiménez', rondasGanadas: 0}, 
    {nombre:'Javier de Miguel', rondasGanadas: 0}, 
    {nombre:'Eduardo Aguilar', rondasGanadas: 0}
]
function juego (jugador1, jugador2);

