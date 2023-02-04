import { Input } from './Filter_css'
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from "redux/selectors";
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
    
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    
    const handleFilter = (e) => {
    const { value } = e.target;
    dispatch(changeFilter(value));
    }
    
      return (
          <Input
              name="filter"
              value={filter}
              onChange={handleFilter}
              />)
};