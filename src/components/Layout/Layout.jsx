import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../Header/PageHeader/PageHeader";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <>
      <PageHeader />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
