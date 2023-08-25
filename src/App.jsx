import { Hero, Navbar, Business, Stats, Billing, Card, Testimonial, Contributers, Service, Footer } from "./components/index";

const App = () => (
  <div className="bg-primary overflow-hidden">
    <header className="py-[30px]">
      <Navbar />
    </header>
    <main className=" py-6" id="home">
      <Hero />
    </main>
    <section className=" py-20">
      <Stats />
    </section>
    <section className=" py-20" id="features">
      <Business />
    </section>
    <section className=" py-20" id="product">
      <Billing />
    </section>
    <section className=" py-20">
      <Card />
    </section>
    <section className=" py-20" id="clients">
      <Testimonial />
    </section>
    <section className=" py-10">
      <Contributers />
    </section>
    <section className=" py-20">
      <Service />
    </section>
    <footer className=" pt-20">
      <Footer />
    </footer>
  </div>
);

export default App;
