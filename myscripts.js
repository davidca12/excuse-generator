function completarFrase()
{
  var completar = "";


  var excusa =
  {
  who : ["Mi perro","Mi novia","Tu padre","Un cocodrilo","La vecina","Mi mejor amigo"],
  what : [" estaba lavando "," estaba organizando "," pidiendo  "," estaba comprando "],
  thing : ["un coche ","un flan ","unas patatas","una casa ","una cama ","una piedra "],
  when : ["ayer","el miercoles","el otro día","en la noche","en la mañana"],
  }


  var quien = Math.floor(Math.random() * excusa.who.length);
  var que = Math.floor(Math.random() * excusa.what.length);
  var cosa = Math.floor(Math.random() * excusa.thing.length);
  var donde = Math.floor(Math.random() * excusa.when.length);

  completar = excusa.who[quien]+excusa.what[que]+excusa.thing[cosa]+excusa.when[donde];
  document.querySelector("#excusa").innerHTML = completar;
}
completarFrase();