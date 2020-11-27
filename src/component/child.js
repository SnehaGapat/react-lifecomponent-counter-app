import React from 'react';
class Child extends React.Component {
    constructor()
    {
      super();
      console.log("constructor of Child initalized");
    }
    componentWillMount ()
    {
      console.log("componentwillMount of Child");
    }
    componentDidMount()
    {
      console.log("componentDidMount of Child");
    }
    componentWillReceiveProps()
    {
        console.log('componentwillRecieveProps child');
        
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log('shouldcomponentupdate child');
        return true;
      }
      componentWillUpdate(){
        console.log('componentwillupdate child');
      }
      componentDidUpdate(prevProps,prevState){
        console.log('component previos props child'+prevProps);
        console.log('component previos state child'+prevState);
        console.log('componentdidMountUpdated child');
      }
      componentWillUnmount(){
          console.log('child componentwillunmount');
      }
    render(){
      console.log("render of Child");
      return (
        <div className="App">
          Child Name:{this.props.name}
        </div>
      );
    }
    
  }
  
  export default Child;
  