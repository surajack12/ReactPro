import React, { Component } from 'react';
class Form extends Component {
    state = {        
            type:this.props.type,
            name:this.props.name,
            id:this.props.id,
            value:this.props.value,                     
            bootClass:this.props.bootClass, 
            placeholder:this.props.placeholder,
         };
    render() { 
        return (<div>
            <input 
                    className={this.state.bootClass} 
                    type={this.state.type} name={this.state.name} 
                    placeholder={this.state.placeholder}
                    id={this.state.id}
                    value={this.state.value}/>
        </div>  );
    }
}
 
export default Form;
