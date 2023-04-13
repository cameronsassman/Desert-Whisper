import classes from './card.module.css'
import ImageSlider from './ImageSlider';

function Card() {
  return (
    <div className={classes.slider}>
      <div className={classes.slider__item}>
        <div className={classes.slider__img}>
          <ImageSlider />
          <div className={classes.text__block}>
            <p>
              Off the C19, Namibia Desert Lodge, Desert Whisper, Solitaire, 0000, Hardap
            </p>
          </div>
        </div>
        <div className={classes.slider__content}>
          <div className={classes.slider__title}>Desert Whisper</div>
          <div className={classes.slider__text}>Desert Whisper is a creatively constructed, contemporary desert hideaway in the midst of the Namib Desert, inspired...</div>
          <a href="#" className={classes.slider__button}>READ MORE</a>
        </div>
      </div>
      <div className={classes.slider__p}>
        <span className={classes.slider__code}>From R19 306</span>
        <span className={classes.slider__code1}>per night, for 2 ppl</span>
      </div>
</div>
  ); 
}

export default Card;