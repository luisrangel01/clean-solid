(() => {
  // función para obtener información de una película por Id
  function getMovieInfoById(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById(movieId: string) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById(actorId: string) {
    console.log({ actorId });
  }

  interface IMovie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  // Crear una película
  function createMovie({ title, description, rating, cast }: IMovie) {
    console.log({ title, description, rating, cast });
  }

  function checkFullNameExists(fullName: string): boolean {
    return true;
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    // if actor exists return false;
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (checkFullNameExists(fullName)) {
      return false;
    }

    console.log("Crear actor");
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
