import React from "react";
import Buttons from "../../components/Buttons/Buttons";
import Cards from "../../components/Cards/Cards";
import CarouselContainer from "../../components/Carousel/CarouselContainer";
import Heading from "../../components/Heading/Heading";
import Menu from "../../components/Menu/Menu";

const Home = () => {
  return (
    <>
      <CarouselContainer />
      <Heading
        title="Latest Arrivals"
        about="Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas."
      />
      <Cards />
      <Heading
        title="Our Products"
        about="Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas."
      />
      <Buttons />
      <Menu />
    </>
  );
};

export default Home;
