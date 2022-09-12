import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import './i18n';
import Biography from './components/Biography';
import Footer from './components/Footer';


 const App = (): JSX.Element => (
    <div className="App">
      <Header />
      <Hero />
      <Biography />
      <Footer />
    </div>
  )

export default App;
