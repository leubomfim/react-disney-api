import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { GlobalStyles } from './constants/styles/global-styles';
import { DisneyProvider } from './contexts/context';
import { Details } from './Pages/Details';
import { Home } from './Pages/Home';

export const PagesRoutes = () => {
  return (
    <Router>
      <DisneyProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:id" element={<Details />} />
        </Routes>
        <GlobalStyles />
      </DisneyProvider>
    </Router>
  );
};
