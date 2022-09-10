
import { Component } from "react";
// import Card from "../card/card.component";

import './card-list.style.css';

/**Components rerender on 2 conditions 
 *  when set.state gets called and when props are updated */

class CardList extends Component {

    /* Important: everything has to be encapsulated in 1 parental HTML Tag.
    Ther can not be 2 parental HTML tags on the same level.
    This will throw an error:
    <div></div>
    <div></div> */
    render() {
        console.log('CardList Render()');
        /* destructuring */
        const { users} = this.props;

        return (
            <div className='card-list'>

    {users.map((user) => {
                return (
                  <div key={user.userid}>  
                      <img className="image" src={`./img/${user.photo}`}  alt={user.username} />
                          <div>{user.username} </div>
                          <div>{user.bio} </div>
                      </div>
                )
              })}
 
                         {/* <Card monster={monster} /> */}
    

            </div>
        )
    }
}

export default CardList;