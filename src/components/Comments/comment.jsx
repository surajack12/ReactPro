import React, { Component } from 'react';
import './style.css';
import Form from '../Form/form';

//import moduleName from 'a11y-react-emoji';
class Comment extends Component {
    state = {
        heading:this.props.heading,
        img:this.props.img,
        detail:this.props.detail,
    };
    
    render() { 
        console.log('props',this.props);
        return ( 
            
            <div className="card  m-2 " >
               
                <div className="card-header text-center">
                <h1>{this.state.heading}</h1>
                </div>
                <div className="card-body ">
                    <img className="m-1" src={this.state.img} alt=""/>
        <div className="card-text">{this.state.detail}</div>
        <Form type="text" bootClass="form-control m-1"  placeholder="Some comments hear" />
        <Form bootClass="btn btn-info" type="submit" value="👍🏻Like"/>

                </div>



            </div>
             );
    }
}
 
export default Comment;