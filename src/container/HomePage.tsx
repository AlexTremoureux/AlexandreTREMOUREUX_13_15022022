import Feature from "../components/Feature";
import { useAppSelector } from "../hooks/store";
import { features } from "../utils/constantes";

const HomePage = () => {
  const valueToken = useAppSelector((state) => state.token)
  console.log(valueToken.token)
  const logged = useAppSelector((state) => state.logged);
  console.log(logged.logged)
/*
  const { isLoading, error, data } = useFetchUserData(token);

  if (isLoading) <div>Chargement en cours</div>;
  if (error) <div>Une erreur est survenue</div>;
*/
  return (
    <main>
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
};

export default HomePage;
