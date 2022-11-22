import { Route, Routes } from 'react-router-dom';
import './App.css';

import InitiativesPage from './pages/Initiatives';
import InitiativeInfoPage from './pages/InitiativeInfo';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<InitiativesPage />} />
      <Route path="/measure/:id" element={<InitiativeInfoPage />} />
    </Routes>
  );
}

export default App;
