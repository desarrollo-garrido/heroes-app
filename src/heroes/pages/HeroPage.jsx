import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroeById } from "./../helpers";

const HeroPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  // Vamos a utilizar useMemo. Es una funcion que se vuelva
  // a ejecutar cuando se renderiza el componente y puede que
  // se vuelva a llamar. En React 18 esto esta optimizado, pero
  // no esta de mal memorizar la funcion.

  const hero = useMemo( // Cuando el id cambie se vuelva a disparar la funcion.
    () => getHeroeById(id), [id]
  ); 

  if (!hero) return <Navigate to="/marvel" />;

  const onBack = () => {
    navigate(-1); // Forma normal.
    // otra forma:
    // hero.publisher === 'DC Comics' ? navigate('/dc') : navigate('/marvel')
  };

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__backInLeft">
        <img
          className="img-thumbnail"
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
        />
      </div>
      <div className="col-8   animate__animated animate__bounce">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
