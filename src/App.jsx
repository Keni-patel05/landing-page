import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./Components/Navbar"
import Portfolio from "./components/Portfolio"
import Review from "./components/Review"
import Service from "./components/Service"

const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar />
      <Hero />
      <Service />
      <Portfolio/>
      <About />
      <Review />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default App
