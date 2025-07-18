import { useSelector } from "react-redux";
import { selectCamperDetails } from "../../../redux/camperSelected/selectors";
import s from "./CamperReviews.module.css";
import CustomIcons from "../../CustomStyledComponents/CustomIcons/CustomIcons";

const CamperReviews = () => {
  const camper = useSelector(selectCamperDetails);

  return (
    <div className={s.section}>
      <ul className={s.list}>
        {camper.reviews.map((review, index) => (
          <li key={index} className={s.item}>
            <div className={s.info}>
              <div className={s.avatar}>
                <p className={s.userInitials}>
                  {review.reviewer_name ? review.reviewer_name[0] : "U"}
                </p>
              </div>
              <div className={s.details}>
                <p className={s.name}>{review.reviewer_name || "User"}</p>
                <div className={s.rating}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <CustomIcons
                      key={i}
                      iconId={"star"}
                      className={
                        i < review.reviewer_rating ? s.filledStar : s.emptyStar
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className={s.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperReviews;
