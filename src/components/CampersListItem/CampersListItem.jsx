import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteCampers } from "../../redux/camperSelected/selectors";
import { addFavorite, removeFavorite } from "../../redux/camperSelected/slice";
import CustomButton from "../CustomStyledComponents/CustomButton/CustomButton";
import CustomIcons from "../CustomStyledComponents/CustomIcons/CustomIcons";

import s from "./CampersListItem.module.css";

const CampersListItem = ({ item }) => {
  const dispatch = useDispatch();
  const camper = item;
  const favoriteList = useSelector(selectFavoriteCampers);

  const isFavorite = favoriteList.some((favorite) => favorite.id === camper.id);

  const handleToggleFavorite = () => {
    isFavorite
      ? dispatch(removeFavorite(camper.id))
      : dispatch(addFavorite(camper));
  };

  const reviewsNumber = camper.reviews ? camper.reviews.length : 0;

  const {
    description,
    name,
    kitchen,
    microwave,
    radio,
    water,
    gas,
    engine,
    refrigerator,
    transmission,
    AC,
    TV,
    bathroom,
    gallery,
  } = item;

  const imgUrl = gallery[0]?.thumb;

  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <div className={s.imageContainer}>
          <img
            className={s.image}
            src={imgUrl}
            alt={name || "Awesome camper image"}
          />
        </div>

        <div className={s.infoWrapper}>
          <div className={s.infoContainer}>
            <div className={s.mainInfo}>
              <p className={s.name}>{camper.name}</p>
              <div className={s.priceInfo}>
                <p className={s.price}>€{camper.price.toFixed(2)}</p>
                <button type="button" onClick={handleToggleFavorite}>
                  <CustomIcons
                    className={isFavorite ? s.liked : s.likeIcon}
                    iconId={"like"}
                  />
                </button>
              </div>
            </div>
            <div className={s.secondaryInfo}>
              <div className={s.rating}>
                <CustomIcons className={s.starIcon} iconId={"star"} />
                <span className={s.ratingNum}>{camper.rating.toFixed(1)}</span>
                <span
                  className={s.reviewsNum}
                >{`(${reviewsNumber} reviews)`}</span>
              </div>
              <div className={s.location}>
                <CustomIcons className={s.locationIcon} iconId={"map"} />
                <span className={s.locationText}>{camper.location}</span>
              </div>
            </div>
          </div>

          <p className={s.description}>{description}</p>

          <div className={s.tags}>
            {AC && (
              <div className={s.tagItem}>
                <CustomIcons iconId={"wind"} />
                <span>AC</span>
              </div>
            )}
            {refrigerator && (
              <div className={s.tagItem}>
                <CustomIcons iconId={"fridge"} />
                <span>Refrigerator</span>
              </div>
            )}
            {transmission && (
              <div className={s.tagItem}>
                <CustomIcons iconId={"diagram"} />
                <span>
                  {transmission[0].toUpperCase().concat(transmission.slice(1))}
                </span>
              </div>
            )}
            {engine && (
              <div className={s.tagItem}>
                <CustomIcons iconId={"fuel"} />
                <span>Petrol</span>
              </div>
            )}
            {bathroom && (
              <div className={s.tagItem}>
                <CustomIcons iconId={"shower"} />
                <span>Bathroom</span>
              </div>
            )}
            {kitchen && (
              <div className={s.tagItem}>
                <CustomIcons iconId={"cup"} />
                <span>Kitchen</span>
              </div>
            )}
            {TV && (
              <div className={s.tagItem}>
                <CustomIcons iconId={"tv"} />
                <span>TV</span>
              </div>
            )}
            {microwave && (
              <div className={s.tagItem}>
                <CustomIcons iconId={"microwave"} />
                <span>Microwave</span>
              </div>
            )}
            {radio && (
              <div className={s.tagItem}>
                <CustomIcons iconId={"radios"} />
                <span>Radio</span>
              </div>
            )}
            {gas && (
              <div className={s.tagItem}>
                <CustomIcons iconId={"gas"} />
                <span>Gas</span>
              </div>
            )}
            {water && (
              <div className={s.tagItem}>
                <CustomIcons iconId={"water"} />
                <span>Water</span>
              </div>
            )}
          </div>

          <CustomButton type="button" to={`/campers/${item.id}`}>
            Show more
          </CustomButton>
        </div>
      </div>
    </li>
  );
};

export default CampersListItem;
