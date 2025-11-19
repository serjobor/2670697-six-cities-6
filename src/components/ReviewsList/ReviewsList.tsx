import { IReviews } from '../../types/reviews';
import ReviewsItem from '../ReviewsItem';

interface IReviewsListProp {
  reviews: IReviews[];
}

const ReviewsList = ({ reviews }: IReviewsListProp) => (
  <ul className='reviews__list'>
    {
      reviews.map((review) => (
        <ReviewsItem
          key={review.id}
          review={review}
        />
      ))
    }
  </ul>
);

export default ReviewsList;
