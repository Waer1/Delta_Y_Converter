import { Component } from "react";
import react from "react-dom"
import "../ytoDElta/y.css"
import { useState } from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export class Delta extends Component{

    state={

        R12Value:0,
        R13Value:0,
        R23Value:0,
        R1value:0,
        R2value:0,
        R3value:0
    }


    R12 = () => {
        var value = document.getElementById("R12").value;
        this.state.R12Value = value;        
    }

    R13 = () => {
        var value = document.getElementById("R13").value;
        this.state.R13Value = value;        
    }

    R23 = () => {
        var value = document.getElementById("R23").value;
        this.state.R23Value = value;        
    }

    calc =() => {

        console.log(document.getElementById("te"))
        
        var sum = this.state.R12Value * 1 + this.state.R13Value * 1 + this.state.R23Value * 1; 
        var R1 = (this.state.R12Value * this.state.R13Value)/(sum);
        var R2 = (this.state.R12Value * this.state.R23Value)/(sum);
        var R3 = (this.state.R23Value * this.state.R13Value)/(sum);

this.state.R1value = R1;
this.state.R2value = R2;
this.state.R3value = R3;
        var B1 = document.getElementById("R1");
        var B2 = document.getElementById("R2");
        var B3 = document.getElementById("R3");

        if(R1 <= 0 || R2 <=0 || R3 <=0){
            B1.textContent = "invalid value";
            B2.textContent = "invalid value";
            B3.textContent = "invalid value";
        }else{

        B1.textContent = R1;
        B2.textContent = R2;
        B3.textContent = R3;
        }
    }

    render(){
        return(<>
            <Paper elevation={3} className="container">

                <h1>Delta to Y</h1>    
                <div id="con">
            <div className="left">
            <section>
                <TextField 
          label="R12"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
            id="R12" 
            onChange={this.R12} 
            placeholder="R13"
            />
            </section>

            <section>
                <TextField 
            label="R23"
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
            placeholder="R23"
            id="R23"
            onChange={this.R23}/>
            </section>

            <section>
                <TextField 
          label="R13"
          type="number"
          InputLabelProps={{
            shrink: true,
          }} 
           id="R13"
            onChange={this.R13}
          placeholder="R13"
          
          />
            </section>
            <Button variant="contained"color="primary" onClick={this.calc} >calc</Button>
            </div>
            
            <div className="right">

            <section id="box">
                <h3>R1</h3>
                <h1 id="R1">{this.state.R1value}</h1>
            </section>

            <section id="box">
                <h3>R2</h3>
                <h1 id="R2">{this.state.R2value}</h1>
            </section>  

               <section id="box">
                <h3>R3</h3>
                <h1 id="R3">{this.state.R3value}</h1>
            </section>

            </div>
            
            </div>
            </Paper>
        
        </>)
    }


}

export default Delta;