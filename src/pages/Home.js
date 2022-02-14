import React from "react";
import Carrusel from "../components/Carrusel";
import LastNews from "../components/LastNews";
import LastTestimonials from "../components/LastTestimonials";

function Box() {
  const styles = {
    width: 200,
    height: 150,
    backgroundColor: "gray",
  };

  return <div style={styles}></div>;
}

function Home(props) {
  const welcome = "Texto de bienvenida";

  return (
    <div className="Home flex flex-col justify-center items-center text-center">
      <Carrusel />
      <h1 className="text-4xl">{welcome}</h1>
      <LastNews></LastNews>
      <LastTestimonials></LastTestimonials>
    </div>
  );
}

export default Home;
