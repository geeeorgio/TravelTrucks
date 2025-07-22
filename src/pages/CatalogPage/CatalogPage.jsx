import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  selectAllCampersList,
  selectCampersIsLoading,
  selectSearchParams,
  selectTotalCampersNumber,
} from "../../redux/campersAll/selectors";
import { getCampersBySearchParams } from "../../redux/campersAll/operations";
import { clearState } from "../../redux/campersAll/slice";
import { searchParamsString } from "../../helpers/urlBuilder";
import Loader from "../../components/Loader/Loader";
import SearchForm from "../../components/SearchForm/SearchForm";
import CampersList from "../../components/CampersList/CampersList";
import Section from "../../components/CustomStyledComponents/Section/Section";
import Container from "../../components/CustomStyledComponents/Container/Container";
import CustomButton from "../../components/CustomStyledComponents/CustomButton/CustomButton";

import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const loadMoreBtnRef = useRef(null);

  const campersList = useSelector(selectAllCampersList);
  const totalCampers = useSelector(selectTotalCampersNumber);
  const campersLoading = useSelector(selectCampersIsLoading);
  const reduxSearchParams = useSelector(selectSearchParams);

  const [urlParams, setUrlParams] = useSearchParams();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [paginator, setPaginator] = useState({
    limit: 4,
    page: 1,
  });

  const isAbleToLoad = totalCampers > paginator.page * paginator.limit;
  const showSearchForm = (isMobile && isFormOpen) || !isMobile;
  const searchUrl = searchParamsString(reduxSearchParams, urlParams);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchCampers = async () => {
      try {
        await dispatch(
          getCampersBySearchParams({
            page: paginator.page,
            limit: paginator.limit,
            params: searchUrl,
          })
        ).unwrap();

        if (paginator.page > 1 && loadMoreBtnRef.current) {
          loadMoreBtnRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        }
      } catch {
        toast.error("No campers found for these filters 😞");
      }
    };

    fetchCampers();
  }, [dispatch, paginator.page, paginator.limit, searchUrl]);

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
    setUrlParams("");
  };

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  return (
    <Section>
      <Container>
        <div className={s.container}>
          {isMobile && (
            <button
              type="button"
              className={s.filterButton}
              onClick={toggleForm}
            >
              {isFormOpen ? "Hide filters" : "Show filters"}
            </button>
          )}

          {showSearchForm && (
            <SearchForm
              setUrlParams={setUrlParams}
              handleResetForm={handleResetForm}
              toggleForm={toggleForm}
              isMobile={isMobile}
            />
          )}

          {campersLoading ? (
            <Loader />
          ) : (
            <div className={s.listWrapper}>
              {!campersLoading && campersList.length === 0 ? (
                <p className={s.noResults}>
                  {reduxSearchParams
                    ? "No campers match these filters. Try changing filters 😞"
                    : "No campers found in our catalog. Please try again later. 😞"}
                </p>
              ) : (
                <CampersList campers={campersList} />
              )}
              {isAbleToLoad && (
                <div className={s.loadMoreWrapper}>
                  <CustomButton
                    type="button"
                    onClick={handleLoadMore}
                    className={s.loadMoreBtn}
                    ref={loadMoreBtnRef}
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
