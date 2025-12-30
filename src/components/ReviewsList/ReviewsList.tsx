import { IReview } from '../../types/reviews';
import ReviewsItem from '../ReviewsItem';

interface IReviewsListProp {
  comments: IReview[];
}

const ReviewsList = ({ comments }: IReviewsListProp) => (
  <ul className='reviews__list'>
    {
      comments.map((comment) => (
        <ReviewsItem
          key={comment.id}
          comment={comment}
        />
      ))
    }
  </ul>
);

export default ReviewsList;
