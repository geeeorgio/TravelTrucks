import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLimitedListOfCampers } from "../../redux/campersAll/operations";
import SearchForm from "../../components/SearchForm/SearchForm";
import CampersList from "../../components/CampersList/CampersList";
import Section from "../../components/CustomStyledComponents/Section/Section";
import Container from "../../components/CustomStyledComponents/Container/Container";
import {
  selectAllCampersList,
  selectCampersIsLoading,
  selectTotalCampersNumber,
} from "../../redux/campersAll/selectors";
import CustomButton from "../../components/CustomStyledComponents/CustomButton/CustomButton";
import s from "./CatalogPage.module.css";
import Loader from "../../components/Loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campersList = useSelector(selectAllCampersList);
  const totalCampers = useSelector(selectTotalCampersNumber);
  const campersLoading = useSelector(selectCampersIsLoading);

  const [paginator, setPaginator] = useState({
    limit: 4,
    page: 1,
    isAbleToLoad: true,
  });

  useEffect(() => {
    dispatch(
      getLimitedListOfCampers({ page: paginator.page, limit: paginator.limit })
    );
  }, [dispatch, paginator.page, paginator.limit]);

  const handleLoadMore = () => {
    setPaginator((prev) => {
      const nextPage = prev.page + 1;

      dispatch(getLimitedListOfCampers({ page: nextPage, limit: prev.limit }));

      const canLoad = totalCampers > nextPage * prev.limit;

      if (!canLoad) {
        console.log("No more campers to load");
        return { ...prev, isAbleToLoad: false };
      }

      return { ...prev, page: nextPage };
    });
  };

  return (
    <Section>
      <Container>
        <div className={s.container}>
          <SearchForm />
          {campersLoading ? (
            <Loader />
          ) : (
            <div className={s.listWrapper}>
              {campersList.length > 0 && <CampersList campers={campersList} />}
              {!campersLoading && paginator.isAbleToLoad && (
                <div className={s.loadMoreWrapper}>
                  <CustomButton
                    type="button"
                    onClick={handleLoadMore}
                    className={s.loadMoreBtn}
                  >
                    Load more
                  </CustomButton>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default CatalogPage;
