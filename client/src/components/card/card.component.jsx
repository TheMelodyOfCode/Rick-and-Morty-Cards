import { Component } from "react";
import './card.styles.css';


class Card  extends Component {
    render() {
        /* destructering and passing variables through props */
        const { username, bio, photo, userid } = this.props.users;
        return (

        <div className='card-container' key={userid}>
            <img className="image" src={`./img/${photo}`}  alt={username} />
            <div>{username} </div>
                <div>{bio} </div>

        </div>

        )
    }
}

export default Card;

