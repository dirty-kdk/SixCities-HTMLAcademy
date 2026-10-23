import { Fragment, useState } from 'react';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const isSubmitDisabled = rating === 0 || review.trim().length < 50;

  return (
    <form
      className="reviews__form form"
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((value) => {
          const id = value === 1 ? '1-star' : `${value}-stars`;
          const title: Record<number, string> = { 5: 'perfect', 4: 'good', 3: 'not bad', 2: 'badly', 1: 'terribly' };

          return (
            <Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={id}
                type="radio"
                checked={rating === value}
                onChange={() => setRating(value)}
              />
              <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title[value]}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={(event) => setReview(event.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Submit</button>
      </div>
    </form>
  );
};

export default ReviewForm;
