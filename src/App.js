import { Route, Routes } from "react-router-dom";
import { useState } from 'react';

import InitiativesPage from "./pages/Initiatives";
import InitiativeInfoPage from "./pages/InitiativeInfo";
import Layout from "./components/layout/Layout";
import PreferencesPage from "./pages/Preferences";
import Login from "./components/login/Login.js";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<InitiativesPage />} />
          <Route path="/measure/:id" element={<InitiativeInfoPage />} />
          <Route path="/preferences" element={<PreferencesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
