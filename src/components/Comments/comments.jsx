import React, { Component } from 'react';
import Comment from './comment';

class Comments extends Component {
    state ={
comment:[
    {heading:"Minion1",img:"https://cdn.windowsreport.com/wp-content/uploads/2017/12/animation-software-kids.png",detail:"New detail"},
    {heading:"Minion2",img:"https://marionettestudio.com/wp-content/uploads/2016/11/22-despicable-me-2-animation-movie.jpg",detail:"New detail"},
    {heading:"Minion3",img:"https://i0.wp.com/www.cgmeetup.net/home/wp-content/uploads/2013/07/Despicable-Me-2-2.jpg?resize=640%2C360",detail:"New detail"},
    
    

]};
    render() { 
        return ( 
            <div className="row">

                 {this.state.comment.map(box =>
                <Comment className="col-2" 
                 detail={box.detail}
                 heading={box.heading}
                 img={box.img} >
                    
                     </Comment>
                 )};
            </div>
         );
    }
}
 
export default Comments;