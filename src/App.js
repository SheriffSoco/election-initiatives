import { Route, Routes } from "react-router-dom";

import InitiativesPage from "./pages/Initiatives";
import InitiativeInfoPage from "./pages/InitiativeInfo";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<InitiativesPage />} />
          <Route path="/measure/:id" element={<InitiativeInfoPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
