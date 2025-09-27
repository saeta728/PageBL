document.addEventListener("DOMContentLoaded", function() {
  const mensajes = [
    "y mi padre me instruía de esta manera: «Grábate en la mente mis palabras; haz lo que te ordeno, y vivirás.»",
    "¿No sabéis que los que corren en el estadio, todos corren, pero uno lleva el premio? Corred de tal manera que lo obtengáis...",
    "Prosigo al blanco, al premio de la soberana vocación de Dios en Cristo Jesús.",
    "Todo lo puedo en Cristo que me fortalece.",
    "Cuando yo era niño, hablaba como niño, pensaba como niño, juzgaba como niño; mas cuando ya fui hombre hecho, dejé lo que era de niño.",
    "No pondré delante de mis ojos cosa injusta: aborrezco la obra de los que se desvían: ninguno de ellos se allegará a mí.",
    "Huye también los deseos juveniles; y sigue la justicia, la fe, la caridad, la paz, con los que invocan al Señor de puro corazón.",
    "Todas las cosas me son lícitas, mas no todas convienen...",
    "Por lo demás, hermanos, todo lo que es verdadero, todo lo honesto, todo lo justo, todo lo puro, todo lo amable...",
    "¿No sabéis que los que corren en el estadio, todos a la verdad corren, mas uno lleva el premio? Corred de tal manera que lo obtengáis.",
    "Y Jesús crecía en sabiduría, en edad, y en gracia para con Dios y los hombres.",
    "Todo me es lícito, mas no todo conviene: todo me es lícito, mas no todo edifica.",
    "No os hagáis tesoros en la tierra... Mas haceos tesoros en el cielo...",
    "Pues, ¿de qué le sirve a un hombre ganar el mundo entero y perder su alma?"
  ];

  const elegido = mensajes[Math.floor(Math.random() * mensajes.length)];
  document.getElementById("mensaje").textContent = elegido;
});
