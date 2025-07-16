import { Link } from "react-router-dom";
import s from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={s.section}>
      <div className={s.imageWrapper}>
        <picture>
          <source
            srcSet="/src/assets/images/hero-desktop-1x.webp 1x, 
              /src/assets/images/hero-desktop-2x.webp 2x,
              "
            media="(min-width: 1280px)"
            type="image/webp"
          />
          <img
            className={s.image}
            src="/src/assets/images/hero-desktop-1x.jpg"
            alt="Dream camper van at sunset"
          />
        </picture>

        <div className={s.overlay}></div>
      </div>

      <div className={s.content}>
        <div className={s.contentText}>
          <h1 className={s.title}>Campers of your dreams</h1>
          <p className={s.description}>
            You can find everything you want in our catalog
          </p>
        </div>
        <Link to={"/catalog"}>
          <button className={s.button} type="button">
            View Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
