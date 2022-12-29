import logo from './logo.svg';
import './App.css';

import { useState, useEffect} from 'react';

// import { Component } from 'react';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search_bar/search-box.component';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


const App = () => {

      const  [searchField, setSearchField] = useState('');

      const [monsters, setMonsters] = useState([]);


      const [FilteredMonsters, setFilteredMonsters] = useState(monsters);
     
      console.log("Rog"); 
     

      useEffect(()=>{
           fetch("https://jsonplaceholder.typicode.com/users").then( (Response) => Response.json() ).then((users)=> 
           setMonsters(users));
      }, [] )

      useEffect(()=>{
         const newFilteredMonsters =monsters.filter((monster) =>{
          return monster.name.toLocaleLowerCase().includes(searchField);
          });
          setFilteredMonsters(newFilteredMonsters);
      }, [monsters, searchField] )

      
      
      
      const   onSearchcheck = (event)=> {
    
                // console.log(event.target.value);
                
                 const lol= event.target.value.toLocaleLowerCase();

                 setSearchField(lol);
                  
       };

      

       

//  class App extends Component {

//   constructor(){
//     super();
//      this.state = {
//      monsters : [],
//      l_string: ''
//      };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users").then( (Response) => Response.json() ).then((users)=> 
//       this.setState(()=>{
//         return {monsters :users};
//       },
//       // ()=>{
//       //   console.log(this.state);
//       // }
//       )  
//     )
//   }

  // onSearchcheck = (event)=> {
    
  //               console.log(event.target.value);
                
  //                const lol= event.target.value.toLocaleLowerCase();
                  
                

  //               this.setState(()=>{
  //                 return {l_string : lol};
  //               }); 

              
  // };

  // render(){

    // const filtered = this.state.monsters.filter((monster) =>{
    //   return monster.name.toLocaleLowerCase().includes(this.state.l_string);
    // });
    // console.log("bhak");

    return (
      <div className="App">
        <header className="App-header">

          <h1 className='app-tittle'> Monsters</h1>


          <SearchBox className='search-box' handler ={onSearchcheck } placeholder= {"search monsters"}  />
          <Cardlist monsters= {FilteredMonsters}   />  

          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p>
            Hello {this.state.monsters[0].name} 
             , I love {this.state.job} , my second name is {this.state.name.lastname} 
          </p> */}

          {/* <input className='search-box' type="search" placeholder='Search your monster' 
              onChange={ this.onSearchcheck }
          /> */}


          {/* {filtered.map( (monster) => {
                  return <div key= {monster.id}><h1>{monster.name} Hello</h1></div>
            }  )}  */}

          {/* <button onClick={ ()=>{
            this.setState({monsters : [{ name:"RAl"}]});
            console.log(this.state);
          } } > Change name</button>   */}






          {/* <SearchBox className='search-box' handler ={this.onSearchcheck } placeholder= {"search monsters"}  />


          <Cardlist monsters= {filtered}   />  */}
          
        </header>
      </div>
    );
  }

  
// } 

export default App;
