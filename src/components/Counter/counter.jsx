import React, { Component } from 'react';

class counter extends Component {

    state ={
       value:this.props.value,
    }
   
        
    render() { 
        console.log('props',this.props, this.state.value);
        return (
        <div className="container">
            {this.props.children}
            <span className="badge badge-secondary">{this.countIn()}</span>
            <button onClick={this.IncreaseCount} className="m-2 btn btn-warning">Increment</button>
            
            <button onClick={()=>this.props.onDelete(this.props.id)}
             className="btn btn-danger btn-sm m-2"
             >Delete
             </button>
        </div> 
         );
    }
   

       countIn(){

           var x=(this.state.value > 0) ? this.state.value : 'Zero' ;
           return x;
       }
       IncreaseCount=()=>{
        this.setState({value :this.state.value + 1})
       }
}
 
export default counter;