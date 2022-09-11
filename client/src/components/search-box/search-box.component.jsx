import { Component } from "react";

/* all CSS is bound to getter and can be accesseed everywhere
to write import here is just to have an overview where the file lives for the developer
to isolate css in we need to learn css in js libraries */
import './search-box.styles.css';

class SearchBox extends Component {

    render () {

        return (
            <input  

                className={`search-box  ${this.props.className}`}
                type='search' 
                placeholder= {this.props.placeholder}
                //we are passing an event handler here
                onChange={this.props.onChangeHandler} 
            />

        )
    }
}

export default SearchBox;