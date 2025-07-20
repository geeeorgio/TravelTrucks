import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteCampers } from "../../redux/camperSelected/selectors";
import { addFavorite, removeFavorite } from "../../redux/camperSelected/slice";
import CustomButton from "../CustomStyledComponents/CustomButton/CustomButton";
import CustomIcons from "../CustomStyledComponents/CustomIcons/CustomIcons";
import { camperTags } from "../../helpers/campersFeaturesMap";

import s from "./CampersListItem.module.css";

const CampersListItem = ({ item }) => {
  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavoriteCampers);

  const isFavorite = favoriteList.some((favorite) => favorite.id === item.id);
  const reviewsNumber = item.reviews ? item.reviews.length : 0;
  const imgUrl = item.gallery[0]?.thumb;

  const handleToggleFavorite = () => {
    isFavorite
      ? dispatch(removeFavorite(item.id))
      : dispatch(addFavorite(item));
  };

  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <div className={s.imageContainer}>
          <img
            className={s.image}
            src={imgUrl}
            alt={item.name || "Awesome camper image"}
          />
        </div>

        <div className={s.infoWrapper}>
          <div className={s.infoContainer}>
            <div className={s.mainInfo}>
              <p className={s.name}>{item.name}</p>
              <div className={s.priceInfo}>
                <p className={s.price}>€{item.price.toFixed(2)}</p>
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
                <span className={s.ratingNum}>{`${item.rating.toFixed(
                  1
                )} (${reviewsNumber} reviews)`}</span>
              </div>
              <div className={s.location}>
                <CustomIcons className={s.locationIcon} iconId={"map"} />
                <span className={s.locationText}>{item.location}</span>
              </div>
            </div>
          </div>

          <p className={s.description}>{item.description}</p>

          <div className={s.tags}>
            {camperTags.map((tag) => {
              const value = item[tag.key];
              if (value) {
                return (
                  <div key={tag.key} className={s.tagItem}>
                    <CustomIcons iconId={tag.icon} />
                    <span>
                      {typeof tag.label === "function"
                        ? tag.label(value)
                        : tag.label}
                    </span>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <CustomButton type="button" to={`/catalog/${item.id}`}>
            Show more
          </CustomButton>
        </div>
      </div>
    </li>
  );
};

export default CampersListItem;
