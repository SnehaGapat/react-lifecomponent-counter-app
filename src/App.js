import React from 'react';
import './App.css';
import Child from './component/child';

class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      name:'John Decock'
    }
    console.log("constructor of parent initalized");
  }
  componentWillMount (){
    if(window.innerWidth < 614)
    {
      this.setState({
        innerWidth:window.innerWidth
      });
    }
    console.log("componentwillMount of parent");
  }
  componentDidMount(){
    console.log("componentDidMount of parent");
  }
  componentWillReceiveProps(){
    console.log('componentwillRecieveProps parent');
    
  }
  shouldComponentUpdate(nextProps,nextState)
  {
    console.log('shouldcomponentupdate parent');
    return true;
  }
  componentWillUpdate(){
    console.log('componentwillupdate parent');
  }
  componentDidUpdate(prevProps,prevState){
    console.log('component previos props parent'+prevProps);
    console.log('component previos state parent'+prevState);
    console.log('componentdidMountUpdated parent');
  }
  componentWillUnmount(){
    console.log('parent componentwillunmount');
}
  changenameEvent=()=>{
    this.setState({
      name:"Leo Willimsons"
    });
  }
  unmountChild=()=>
  {
    this.setState({
      name:'robert deo'
    });
  }
  render(){
    console.log("render of parent");
    if(this.state.name==='robert deo')
    {
      return(<div/>);
    }
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        Innerwidth:{this.state.innerWidth}
        <Child name={this.state.name}/>
        <button onClick={this.changenameEvent.bind(this)}>ChangeNameOnClick</button>
        <button onClick={this.unmountChild.bind(this)}>UnmountFromChildClick</button>
      </div>
    );
  }
  
}

export default App;
