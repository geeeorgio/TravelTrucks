import { Suspense } from "react";
import PageHeader from "../Header/PageHeader/PageHeader";
import Loader from "../Loader/Loader";

const Layout = ({ children }) => {
  return (
    <>
      <PageHeader />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
};

export default Layout;
