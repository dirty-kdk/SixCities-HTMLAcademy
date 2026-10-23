import type { Offer } from '../../mocks/offers';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type props = {
  offer: Offer;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  variant?: 'cities' | 'favorites';
}
const Card = ({ offer, onMouseEnter, onMouseLeave, variant = 'cities' }: props) => (
  <article
    className={`${variant === 'favorites' ? 'favorites__card' : 'cities__card'} place-card`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
    <div className={`${variant === 'favorites' ? 'favorites__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
      <Link to={`${AppRoute.Offer}/${offer.id}`}>
        <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt={offer.title} />
      </Link>
    </div>
    <div className={`${variant === 'favorites' ? 'favorites__card-info' : ''} place-card__info`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);

export default Card;
