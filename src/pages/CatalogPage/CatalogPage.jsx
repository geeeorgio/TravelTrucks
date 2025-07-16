import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCampers } from "../../redux/campersAll/operations";
import SearchForm from "../../components/SearchForm/SearchForm";
import CampersList from "../../components/CampersList/CampersList";

import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <SearchForm />
        <div className={s.listWrapper}>
          <CampersList />
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
