exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("temas")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("temas").insert([

        {
          id: 1,
          title: "Lo que creemos en IJSV",
          body1:
            "Creemos que la Biblia es la revelación escrita de Dios, completa y suficiente en todos los aspectos. Creemos que Las Escrituras son “exhaladas por Dios” y por lo tanto completamente autoritarias en y de sí mismas; no basan su autoridad en ninguna iglesia, consejo, o credo, sino que son autoritarias simplemente porque son la Palabra de Dios. (2 Tim.3:15-17)Creemos que Dios es uno, eterno, constante, e inmutable. Creemos que Dios es el creador de todo lo que existe en el cielo y en la tierra. El Dios que se describe en la Biblia es único; Él no es semejante a cualquier persona o cosa en todo el universo. Dios tiene todo el poder, todo el conocimiento, toda la sabiduría, y a Él se le debe toda la gloria, honor y alabanza. Todo lo que pasa o va a pasar está en el decreto de Dios. Todas las cosas, al final, dan la gloria a Dios.Creemos que la Biblia enseña que hay solamente un solo Dios, el cual subsiste en tres personas: el Padre, el Hijo, y el Espíritu Santo. Cada persona es completa y totalmente Dios. El Padre, el Hijo, y el Espíritu Santo han existido eternamente en la relación descrita por el término “Trinidad”. Creemos que el hombre fue creado a la imagen de Dios. El hombre se ha rebelado contra su Creador, y cayó en pecado.",
          body2:
            "Consecuentemente, el hombre se hizo espiritualmente muerto, totalmente indispuesto y hecho incapaz de buscar de Dios. El Señor, desde la eternidad pasada, predestinando todas las cosas, unió a ciertas personas con Cristo Jesús, de modo que Él puede ser que el redima los pecados de los hombres y al obrar así traiga gloria a sí mismo. Jesucristo, el hijo de Dios, muere en el lugar de sus elegidos, proporcionando el perdón completo de pecados por su muerte sobre la cruz del Calvario. Ningún otro trabajo puede proveer el perdón de pecados, y ninguna adición se puede hacer al trabajo terminado y acabado de Cristo.Creemos que Dios, en su gracia y misericordia soberana, regenera a los hombres pecadores por el poder del Espíritu Santo, no por alguna acción de ellos, trayéndolos a la nueva vida. Dios les concede a ellos los regalos de la fe y del arrepentimiento, que entonces ejercitan creyendo en Cristo y dando vuelta de sus pecados por amor a Dios. Como resultado de esta fe, basada sobre el sacrificio del señor Jesucristo, Dios justifica o hace justa a la persona que cree. El regalo de Dios de la fe, y el trabajo de continuo Espíritu Santo en las vidas de los elegidos, da lugar a las buenas obras. Estas buenas obras surgen de la verdadera fe salvadora; son un resultado necesario de la fe, pero no deben ser consideradas necesarias para ganar la justificación, que es dada por la gracia de Dios por la fe solamente, de modo que ningún hombre pueda jactarse. (Efesios 2:8)",
          body3:
            "Creemos que Jesucristo estableció su iglesia, que se compone de todos los elegidos de Dios. Su iglesia, como novia obediente, escucha Su Palabra según lo encontrado en la Biblia. Todos los que creen en Cristo son colocados en Su cuerpo, la iglesia. Las expresiones locales de la iglesia son muy importantes, y cada creyente debe estar involucrado activamente en tal compañerismo.Creemos que Cristo vuelve a juzgar a los vivos y a los muertos. Hasta su regreso, los creyentes deben vivir sus vidas de tal manera que den gloria a Dios a través Jesucristo. La iglesia debe estar ocupada haciendo el trabajo de la predicación del evangelio (en palabras y en hechos) y del discipulado, proclamando el Evangelio puro de Cristo y enseñando la palabra de Dios.",
        },
      ]);
    });
};
