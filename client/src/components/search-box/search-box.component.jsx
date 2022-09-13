
import './search-box.styles.css';

const SearchBox = ({className, placeholder, onChangeHandler}) => (
    <input  
        className={`search-box  ${className}`}
        type='search' 
        placeholder= {placeholder}
        //we are passing an event handler here
        onChange={onChangeHandler} 
    />
);

export default SearchBox;