import Header from './components/Header';
import Footer from "./components/Footer";
import {LanguageProvider} from "./contexts/LanguageContext";
import AppRoutes from './AppRoutes';

function App() {
  return (
      <LanguageProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </LanguageProvider>
  );
}

export default App;

