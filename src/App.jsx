import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/Layout/Layout";

const MainPage = lazy(() => import("../src/pages/MainPage/MainPage"));
const CatalogPage = lazy(() => import("../src/pages/CatalogPage/CatalogPage"));
const CamperDetailsPage = lazy(() =>
  import("../src/pages/CamperDetailsPage/CamperDetailsPage")
);
const CamperFeatures = lazy(() =>
  import("../src/components/CampersInfo/CamperFeatures/CamperFeatures")
);
const CamperReviews = lazy(() =>
  import("../src/components/CampersInfo/CamperReviews/CamperReviews")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CamperDetailsPage />}>
          <Route index element={<Navigate to="features" replace />} />
          <Route path="features" element={<CamperFeatures />} />
          <Route path="reviews" element={<CamperReviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
