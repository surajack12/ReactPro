import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
         counters:[
        { id:1 ,value:0},
        { id:2 ,value:0},
        { id:3 ,value:0},
        { id:4 ,value:0},
        { id:5 ,value:0}
    ] 
};
DeleteCount = counterId =>{
    const counters = this.state.counters.filter(c=> c.id !== counterId);
    this.setState({counters})
}
    render() { 
        return (
             <div>
                 <button className="btn btn-info btn-sm m-2">Reset</button>
                 {
                 this.state.counters.map(counter=>
                 <Counter 
                 onDelete={this.DeleteCount}
                 key={counter.id}
                 value ={counter.value}
                 id={counter.id}/>
                 )
               }
             </div> 
             );
    }
} 
export default Counters;
