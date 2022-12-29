import { Component } from "react";
import './search-box.style.css';

// class SearchBox extends Component{
//     render(){

const SearchBox =({className, handler, placeholder}) =>{

        return(
            // <input className={`search-box  ${this.props.className}`}type="search" placeholder={this.props.placeholder} 
            // onChange={ this.props.handler}
            <input className={`search-box  ${className}`}type="search" placeholder={placeholder} 
            onChange={handler}
            />
        );
    // }
}
export default SearchBox;