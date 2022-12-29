import { Component } from 'react'; 

import Card from '../card/card.component.jsx'
import './card-list.style.css'



// class Cardlist extends Component {
const Cardlist = ( {monsters} ) =>{

    
     
    // render(){
        // const {monsters} = this.props;
        return(
            <div className='card-list'>
                {monsters.map((monster) =>{
                    return(   
                    

                    <Card monster = {monster} />
                    ) 
                })}
            </div>
        );
    }
// }

export default Cardlist;