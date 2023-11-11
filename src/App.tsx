import Header from './components/Header';
import Home from './pages/Home';
import Footer from "./components/Footer";
import {LanguageProvider} from "./contexts/LanguageContext";

function App() {
  return (
      <LanguageProvider>
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
      </LanguageProvider>
  );
}

export default App;

