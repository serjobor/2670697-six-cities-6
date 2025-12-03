import { useState } from 'react';
import { OFFER_SORT_OPTIONS } from '../../constants/offers';
import { offerSlice } from '../../store/reducers/offerSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';


const SortOffersByParam = () => {
  const sortParam: string = useAppSelector((state) => state.offer.sortParam);

  const { setSortParam } = offerSlice.actions;
  const dispatch = useAppDispatch();

  const [isOpenSortList, setOpenSortList] = useState<string>('');

  const showSortList = () => {
    if (isOpenSortList === '') {
      setOpenSortList('places__options--opened');
    } else {
      setOpenSortList('');
    }
  };

  const sortParamCheck = (chooseSortParam: string) => sortParam === chooseSortParam ? 'places__option--active' : '';

  const handleSortParamClick = (chooseSortParam: string) => {
    dispatch(setSortParam(chooseSortParam));
    showSortList();
  };

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span
        className='places__sorting-type'
        tabIndex={0}
        onClick={showSortList}
      >{sortParam}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use href='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isOpenSortList}`}
      >
        {
          OFFER_SORT_OPTIONS.map((optionParam) => (
            <li
              key={optionParam}
              className={`places__option ${sortParamCheck(optionParam)}`}
              tabIndex={0}
              onClick={() => handleSortParamClick(optionParam)}
            >{optionParam}
            </li>
          )
          )
        }
      </ul>
    </form>
  );
};


export default SortOffersByParam;
