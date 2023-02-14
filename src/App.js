import "./App.css";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Workers from "./components/workers/Workers";
import ServicesGrid from "./components/service/Services";
import Footer from "./components/footer/Footer";
import { services } from "./data/ServicesData";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <Workers />
        <ServicesGrid data={services} />
        <Footer />
      </main>
    </>
  );
}

export default App;
