import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  selectAllCampersList,
  selectCampersIsLoading,
  selectTotalCampersNumber,
} from "../../redux/campersAll/selectors";
import { getCampersBySearchParams } from "../../redux/campersAll/operations";
import { clearState } from "../../redux/campersAll/slice";
import Loader from "../../components/Loader/Loader";
import SearchForm from "../../components/SearchForm/SearchForm";
import CampersList from "../../components/CampersList/CampersList";
import Section from "../../components/CustomStyledComponents/Section/Section";
import Container from "../../components/CustomStyledComponents/Container/Container";
import CustomButton from "../../components/CustomStyledComponents/CustomButton/CustomButton";

import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campersList = useSelector(selectAllCampersList);
  const totalCampers = useSelector(selectTotalCampersNumber);
  const campersLoading = useSelector(selectCampersIsLoading);

  const [searchParams, setSearchParams] = useSearchParams();

  const [paginator, setPaginator] = useState({
    limit: 4,
    page: 1,
  });

  const searchParamsString = searchParams.toString();

  const isAbleToLoad = totalCampers > paginator.page * paginator.limit;

  useEffect(() => {
    const fetchCampers = async () => {
      try {
        await dispatch(
          getCampersBySearchParams({
            page: paginator.page,
            limit: paginator.limit,
            params: searchParamsString,
          })
        ).unwrap();
      } catch {
        toast.error("No campers found for these filters 😞");
      }
    };

    fetchCampers();
  }, [dispatch, paginator.page, paginator.limit, searchParamsString]);

  const handleLoadMore = () => {
    if (!isAbleToLoad) {
      toast("No more campers to load", { icon: "🙌" });
      return;
    }

    setPaginator((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const handleResetForm = () => {
    setPaginator({ limit: 4, page: 1 });
    dispatch(clearState());
  };

  return (
    <Section>
      <Container>
        <div className={s.container}>
          <SearchForm
            setSearchParams={setSearchParams}
            handleResetForm={handleResetForm}
          />
          {campersLoading ? (
            <Loader />
          ) : (
            <div className={s.listWrapper}>
              {!campersLoading && campersList.length === 0 && (
                <p className={s.noResults}>
                  No campers match these filters. Try changing filters 😞
                </p>
              )}
              {campersList.length > 0 && <CampersList campers={campersList} />}
              {!campersLoading && isAbleToLoad && (
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
