import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import { movieRows } from './data/mockData';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      {movieRows.map((row) => (
        <Row key={row.id} title={row.title} movies={row.movies} />
      ))}
      <Footer />
    </div>
  )
}

export default App
