import { Component } from "react";
import "./header.css"

export class Header extends Component{

    clicked = () =>{
        var ty =document.querySelectorAll(".header-right a")
        ty.forEach(bu => {
            bu.setAttribute("className","");
        })
    }

    render(){
        return(
<div class="header">
  <h2 class="logo">Delta - Y Converter</h2>
</div>
        )
    }


}

export default Header;