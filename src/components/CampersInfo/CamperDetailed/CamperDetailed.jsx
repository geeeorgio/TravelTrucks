import { Link } from "react-router-dom";
import CustomIcons from "../../CustomStyledComponents/CustomIcons/CustomIcons";
import s from "./CamperDetailed.module.css";

const CamperDetailed = ({ camper }) => {
  const reviewsNumber = camper.reviews ? camper.reviews.length : 0;

  return (
    <>
      <div className={s.mainWrapper}>
        <div className={s.headerInfo}>
          <h1 className={s.name}>{camper.name}</h1>
          <div className={s.infoWrapper}>
            <div className={s.reviewsAndLocation}>
              <div className={s.rating}>
                <CustomIcons iconId={"star"} className={s.starIcon} />
                <span className={s.ratingNum}>{camper.rating.toFixed(1)}</span>
                <span
                  className={s.reviewsText}
                >{`(${reviewsNumber} reviews)`}</span>
              </div>
              <div className={s.location}>
                <CustomIcons iconId={"map"} className={s.mapIcon} />
                <span className={s.locationText}>{camper.location}</span>
              </div>
            </div>
            <p className={s.price}>€{camper.price.toFixed(2)}</p>
          </div>
        </div>

        <ul className={s.imageGallery}>
          {camper.gallery.map((image, index) => (
            <li key={index} className={s.galleryImageContainer}>
              <img
                src={image.original}
                alt={`Camper image ${index + 1}`}
                className={s.galleryImage}
              />
            </li>
          ))}
        </ul>

        <p className={s.description}>{camper.description}</p>
      </div>

      <div className={s.tabsSection}>
        <div className={s.tabsWrapper}>
          <Link to="features" className={s.tabLink}>
            Features
          </Link>
          <Link to="reviews" className={s.tabLink}>
            Reviews
          </Link>
        </div>
      </div>
    </>
  );
};

export default CamperDetailed;
