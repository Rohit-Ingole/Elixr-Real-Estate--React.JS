import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";

import { SliderData } from "../data/SliderData";
import { InfoData } from "../data/InfoData";

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      {InfoData.map((item, index) => (
        <InfoSection {...item} key={index} />
      ))}
    </>
  );
};

export default Home;
