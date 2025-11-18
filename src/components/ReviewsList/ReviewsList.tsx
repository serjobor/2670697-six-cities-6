import { IReviews } from "../../mocks/reviews";
import ReviewsItem from "../ReviewsItem";

interface IReviewsListProp {
  reviews: IReviews[];
};

const ReviewsList = ({ reviews }: IReviewsListProp) => {

  return (
    <ul className='reviews__list'>
      {
        reviews.map((review) => (
          <ReviewsItem
            review={review}
          />
        ))
      }
    </ul>
  );
};

export default ReviewsList;
