import { Route, Routes } from 'react-router-dom';
import './App.css';

import InitiativesPage from './pages/Initiatives';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<InitiativesPage />} />
      <Route path="/test" element={<div>whatever</div>} />
    </Routes>
  );
}

export default App;
