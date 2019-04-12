import React, { Component } from 'react';
import '../css/body.css';
import { isNull } from 'util';
        
 class Body extends Component{
    
    constructor(props){
        super(props);
        this.state={
            user_name:'',
            user_age:'',
            gender: ''
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (event) => {
         this.setState({
                [event.target.name]: event.target.value
         });
      }

    handleSubmit = (event) => {
        const a =  this.state.user_name;
        const b =  this.state.user_age;

        console.log(this.state.user_name);
        console.log(this.state.user_age);
        console.log(this.state.user_age);

    if(this.state.user_name !== '' && this.state.user_age !== '' && document.getElementById("male").checked ||  document.getElementById("female").checked){
                
                document.getElementById('display').innerHTML=a ;
                document.getElementById('display1').innerHTML=b ;

                  if(document.getElementById("male").checked){
                    document.getElementById('display2').innerHTML=document.getElementById("male").value;
                  }else{
                    document.getElementById('display2').innerHTML=document.getElementById("female").value;
                  }
    } 
    else{
        return isNull;
    }


       event.preventDefault();
    }

    

 
    
    render(){
                return(
        <div>
           <div className="left">
           <form action="/assign.html" onSubmit={this.handleSubmit}>
           <fieldset>
            <legend>Form</legend>
            <p>Name: </p>
    
         <input 
           type="text" 
          name="user_name" 
           id="user_name" 
           maxLength={15} 
           placeholder="Input your name.." 
           onChange={this.handleChange} 
           value={this.state.user_name} 
           >
           </input>
                 
            <p>Age: </p>    
                 
            <input 
            type="number" 
            min="0" 
            name="user_age" 
            id="user_age"  
            placeholder="Input your age.." 
            onChange={this.handleChange} 
            value={this.state.user_age}>
            </input>

            <p>Gender:
             <input type="radio" name="gender" id="male"  value="Male"   ></input> Male 
             &ensp;<input type="radio" name="gender" id="female" value="Female"  ></input> Female            
            </p> 
            
            <p></p>
            <button type="submit" name="submit" id="submit_val"  >Submit</button> 

            </fieldset>
       
           </form>
        </div>


        <div className="right"> 
        <fieldset onSubmit={this.handleSubmit}>
                <legend>Print</legend>
                <p>Name: <span id='display' ></span></p>
                <p>Age: <span id='display1' ></span></p>
                <p>Gender: <span id='display2' ></span></p>
       </fieldset>
        </div >


         </div>
                    
                );
            }
        
        
        }
        
        export default Body;