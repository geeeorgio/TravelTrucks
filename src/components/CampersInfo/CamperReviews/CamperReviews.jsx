import { useSelector } from "react-redux";
import { selectCamperDetails } from "../../../redux/camperSelected/selectors";
import s from "./CamperReviews.module.css";
import CustomIcons from "../../CustomStyledComponents/CustomIcons/CustomIcons";

const CamperReviews = () => {
  const camper = useSelector(selectCamperDetails);

  return (
    <div className={s.reviewsSection}>
      <div className={s.reviewsList}>
        {camper.reviews.map((review, index) => (
          <div key={index} className={s.reviewItem}>
            <div className={s.reviewerInfo}>
              <div className={s.reviewerAvatar}>
                {review.reviewerName ? review.reviewerName[0] : "U"}
              </div>
              <div className={s.reviewerDetails}>
                <p className={s.reviewerName}>
                  {review.reviewerName || "User"}
                </p>
                <div className={s.reviewRating}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <CustomIcons
                      key={i}
                      iconId={"star"}
                      className={
                        i < review.reviewerRating ? s.filledStar : s.emptyStar
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className={s.reviewComment}>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CamperReviews;
