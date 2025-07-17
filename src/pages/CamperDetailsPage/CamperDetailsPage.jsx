import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import CamperDetailed from "../../components/CampersInfo/CamperDetailed/CamperDetailed";
import Section from "../../components/CustomStyledComponents/Section/Section";
import Container from "../../components/CustomStyledComponents/Container/Container";
import { selectCamperById } from "../../redux/camperSelected/operations";
import { selectCamperDetails } from "../../redux/camperSelected/selectors";
import BookingForm from "../../components/CampersInfo/BookingForm/BookingForm";

import s from "./CamperDetailsPage.module.css";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectCamperById(id));
  }, [dispatch, id]);

  const camperDetails = useSelector(selectCamperDetails);

  return (
    <Section>
      {camperDetails && (
        <Container>
          <CamperDetailed camper={camperDetails} />
          <div className={s.pageWrapper}>
            <Outlet />
            <BookingForm />
          </div>
        </Container>
      )}
    </Section>
  );
};

export default CamperDetailsPage;
