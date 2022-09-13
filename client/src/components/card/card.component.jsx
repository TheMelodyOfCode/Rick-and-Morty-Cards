import './card.styles.css';

const Card  = ({users })=> {

    const {username, bio, photo, userid } = users;

    return (
        <div className='card-container' key={userid}>
        <img className="image" src={`./img/${photo}`}  alt={username} />
        <div>{username} </div>
            <div>{bio} </div>
    </div>
    );

}

export default Card;

