import type { Offer } from '../../mocks/offers';
import Card from '../Card/Card';

type OffersListProps = {
  offers: Offer[];
  onOfferHover?: (offerId: string | null) => void;
  variant?: 'cities' | 'favorites';
};

const OffersList = ({
  offers,
  onOfferHover = () => {},
  variant = 'cities',
}: OffersListProps) => {
  const cards = offers.map((offer) => (
    <Card
      key={offer.id}
      offer={offer}
      variant={variant}
      onMouseEnter={() => onOfferHover(offer.id)}
      onMouseLeave={() => onOfferHover(null)}
    />
  ));

  return variant === 'favorites' ? (
    <div>{cards}</div>
  ) : (
    <div className="cities__places-list places__list tabs__content">{cards}</div>
  );
};

export default OffersList;

