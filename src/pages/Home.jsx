import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
