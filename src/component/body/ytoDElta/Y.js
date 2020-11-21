import { Component } from "react";
import "./y.css"
import { Button, Paper, TextField } from "@material-ui/core";

export class Y extends Component{

    state={

        R12Value:0,
        R13Value:0,
        R23Value:0,
        R1value:0,
        R2value:0,
        R3value:0
    }


    R1 = () => {
        var value = document.getElementById("t1");
        this.setState({R1value:value.value})  
    }

    R2 = () => {
        var value = document.getElementById("t2");
        this.setState({R2value : value.value});        
    }

    R3 = () => {
        var value = document.getElementById("t3");
        this.setState({R3value : value.value});        
    }

    calc =() => {
        var R1 =this.state.R1value;
        var R2 =this.state.R2value;
        var R3 =this.state.R3value;

        var R12 = (R1 * 1 + R2 * 1 + ((R1 * 1 * R2)/(R3 * 1)));
        var R23 = (R2 * 1 + R3* 1+((R2 * R3)/(R1 * 1)));
        var R13 = (R1 * 1+ R3 * 1 +((R1 * R3)/(R2 * 1)));


this.setState({R12value : R12});
this.setState({R23value : R23});
    this.setState({R13value : R13});
        var B12 = document.getElementById("R12");
        var B23 = document.getElementById("R23");
        var B13 = document.getElementById("R13");

        if(R1 <= 0 || R2 <=0 || R3 <=0){
            B12.textContent = "invalid value";
            B23.textContent = "invalid value";
            B13.textContent = "invalid value";
        }else{

            B12.textContent = R12;
            B23.textContent = R23;
            B13.textContent = R13;
        }

    }

    render(){
        return(<>
        <div id="clear"></div>
            <Paper elevation={3} className="container">
                <h1>Y to Delta</h1>    
            <div className="left">
            <section>
                <TextField 
          label="R1"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
            id="t1" 
            onChange={this.R1} 
            placeholder="R2"
            />
            </section>

            <section>
                <TextField 
            label="R2"
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
            placeholder="R2"
            id="t2"
            onChange={this.R2}/>
            </section>

            <section>
                <TextField 
          label="R3"
          type="number"
          InputLabelProps={{
            shrink: true,
          }} 
           id="t3"
            onChange={this.R3}
          placeholder="R3"
          
          />
            </section>
            <Button variant="contained"color="primary" onClick={this.calc} >calc</Button>
            </div>
            
            <div className="right">

            <section id="box">
                <h3>R12</h3>
                <h1 id="R12">{this.state.R1value}</h1>
            </section>

            <section id="box">
                <h3>R23</h3>
                <h1 id="R23">{this.state.R2value}</h1>
            </section>  

               <section id="box">
                <h3>R13</h3>
                <h1 id="R13">{this.state.R3value}</h1>
            </section>

            </div>
            
            
            </Paper>

        
        </>)
    }
}

export default Y;