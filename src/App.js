import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
constructor(props){
    super(props);
    this.state = {name:"suraj"};
}
    render(){
  
  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  <h1><code onMouseOver={()=>{this.setState({name:"ravi"})}}>{this.state.name}</code></h1>
  <h1><code onMouseOver={()=>{this.setState({name:"suraj"})}}>{this.state.name}</code></h1>

      </header>
      <div></div>
    </div>
  );
}
}
export default App;
