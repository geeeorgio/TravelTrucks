import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/Layout/Layout";

const MainPage = lazy(() => import("../src/pages/MainPage/MainPage"));
const CatalogPage = lazy(() => import("../src/pages/CatalogPage/CatalogPage"));
const CamperDetailsPage = lazy(() =>
  import("../src/pages/CamperDetailsPage/CamperDetailsPage")
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
