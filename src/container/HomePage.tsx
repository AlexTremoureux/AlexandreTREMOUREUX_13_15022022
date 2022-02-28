import React from "react";
import { useSelector } from "react-redux";
import { selectLogged, selectToken } from "../app/selectors";
import { store } from "../app/store";
import Feature from "../components/Feature";
import { features } from "../utils/constantes";

const HomePage = () => {
  const Token = useSelector(selectToken);
  console.log(Token.token)
  const Logged = useSelector(selectLogged)
  const { logged } = Logged;
  store.subscribe(
    // cette fonction sera exécutée à chaque fois que le state change
    () => {
        const state = store.getState();
        console.log(state);
    }
);
  
  console.log(logged)
  //const {loading, error, data} = useFetchUserData(token)
  return(
    <main>
      {console.log(store.getState())}
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
  
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {features.map((feature) => (
          <Feature
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </section>
    </main>
  );
}

export default HomePage;
