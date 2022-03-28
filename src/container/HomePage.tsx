import { Navigate } from "react-router-dom";
import Feature from "../components/Feature";
import { features } from "../utils/constantes";

const HomePage = () => {
  const bearer: string | null = localStorage.getItem("Bearer")
    const bearerInLocalStorage:boolean = bearer !== null;
    if (bearerInLocalStorage) {
      return <Navigate to="/profile" />;
    }
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
