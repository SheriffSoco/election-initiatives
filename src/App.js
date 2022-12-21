import { Route, Routes } from "react-router-dom";
import useToken from "./components/hooks/useToken.js";

import InitiativesPage from "./pages/Initiatives";
import InitiativeInfoPage from "./pages/InitiativeInfo";
import ConfirmedPage from "./pages/Confirmed";
import Layout from "./components/layout/Layout";
import PreferencesPage from "./pages/Preferences";
import Login from "./components/login/Login.js";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<InitiativesPage />} />
          <Route path="/measure/:id" element={<InitiativeInfoPage />} />
          <Route path="/measure/:id/confirm" element={<ConfirmedPage />} />
          <Route path="/preferences" element={<PreferencesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
