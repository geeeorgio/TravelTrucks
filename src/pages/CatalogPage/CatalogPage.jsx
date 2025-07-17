import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLimitedListOfCampers } from "../../redux/campersAll/operations";
import SearchForm from "../../components/SearchForm/SearchForm";
import CampersList from "../../components/CampersList/CampersList";
import Section from "../../components/CustomStyledComponents/Section/Section";
import Container from "../../components/CustomStyledComponents/Container/Container";
import {
  selectAllCampersList,
  selectCampersLimit,
  selectCampersPage,
  selectIsAbleToLoad,
  selectTotalCampersNumber,
} from "../../redux/campersAll/selectors";

import s from "./CatalogPage.module.css";
import CustomButton from "../../components/CustomStyledComponents/CustomButton/CustomButton";
import { paginator } from "../../helpers/pagination";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campersList = useSelector(selectAllCampersList);
  const searchLimit = useSelector(selectCampersLimit);
  const totalCampers = useSelector(selectTotalCampersNumber);
  const isAbleToLoad = useSelector(selectIsAbleToLoad);
  const pageCount = useSelector(selectCampersPage);

  paginator.setLimit(searchLimit);
  paginator.setPage(pageCount);

  useEffect(() => {
    dispatch(getLimitedListOfCampers({ page: 1, limit: searchLimit }));
  }, [dispatch, searchLimit]);

  const handleLoadMore = () => {
    if (isAbleToLoad) {
      console.log("page in load more", newPage);

      dispatch(getLimitedListOfCampers({ page: newPage, limit: searchLimit }));
    }
  };

  return (
    <Section>
      <Container>
        <div className={s.container}>
          <SearchForm />
          <div className={s.listWrapper}>
            {campersList.length > 0 && <CampersList campers={campersList} />}
            {isAbleToLoad && (
              <CustomButton type="button" onClick={handleLoadMore} />
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CatalogPage;
