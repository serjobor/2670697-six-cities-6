import React, { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addNewReviewOnSite } from '../../store/api-actions';
import { IReviewData } from '../../types/reviews';
import { getIsReviewSending } from '../../store/selectors/offerSelectors';

const RATING_VALUES: number[] = [5, 4, 3, 2, 1];
const MIN_LENGTH: number = 50;
const MAX_LENGTH: number = 300;

interface CommentSubmitFormProps {
  offerId: string;
}

const CommentSubmitForm = ({ offerId }: CommentSubmitFormProps) => {
  const dispatch = useAppDispatch();

  const isReviewSending = useAppSelector(getIsReviewSending);

  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  const isLengthValid = comment.length >= MIN_LENGTH && comment.length <= MAX_LENGTH;
  const isFormValid = useMemo(() => rating > 0 && isLengthValid, [rating, isLengthValid]);

  const handleRatingChange = (value: number) => setRating(value);
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid || isReviewSending) {
      return;
    }

    const reviewData: IReviewData = { id: offerId, comment, rating };

    dispatch(addNewReviewOnSite(reviewData))
      .unwrap()
      .then(() => {
        setRating(0);
        setComment('');
      });
  };

  return (
    <form
      className='reviews__form form'
      action='#'
      method='post'
      onSubmit={handleSubmit}
    >
      <label className='reviews__label form__label' htmlFor='review'>Your review</label>
      <div className='reviews__rating-form form__rating'>
        {
          RATING_VALUES.map((value) => (
            <React.Fragment key={value}>
              <input
                className='form__rating-input visually-hidden'
                name='rating'
                value={value}
                id={`${value}-stars`}
                type='radio'
                checked={rating === value}
                onChange={() => handleRatingChange(value)}
                disabled={isReviewSending}
              />
              <label
                htmlFor={`${value}-stars`}
                className='reviews__rating-label form__rating-label'
                title='perfect'
              >
                <svg className='form__star-image' width='37' height='33'>
                  <use href='#icon-star'></use>
                </svg>
              </label>
            </React.Fragment>
          )
          )
        }
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        value={comment}
        onChange={handleInputChange}
        minLength={MIN_LENGTH}
        maxLength={MAX_LENGTH}
        disabled={isReviewSending}
      >
      </textarea>
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={!isFormValid || isReviewSending}
        >Submit
        </button>
      </div>
    </form>
  );
};

export default CommentSubmitForm;
