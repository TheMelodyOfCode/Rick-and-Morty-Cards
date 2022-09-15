
import Card from "../card/card.component";
import './card-list.style.css';


const CardList = ({ users })=> (
    <div className='card-list'>
        {users.map((user) => {
            return (
            <Card users={user} /> 
            )
        })}
    </div>
);

export default CardList;
