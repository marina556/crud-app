import React, { Component } from 'react';
import './App.css';
import ListItem from './component/ListItem/ListItem'
import Form from './component/CrudForm/Form'

class App extends Component{
  state={
    items:[
      {course:'html'},
      {course:'JavaScript'},
      {course:'BootStrap'}
    ]
  }

  addnewcourse =(obj)=>{
    let {items} = this.state;
    let newid = items.length;
    obj.id=newid;
    items.push(obj);
    this.setState({
      items
    })
  }

  editItem = (val)=>{
    let {items} = this.state;
    const index = items.indexOf(i=>i.course===val);
    items.splice(index,1);
    this.setState({
      items
    })
  }
  delitem=(val)=>{
    let {items} = this.state;
    const index = items.indexOf(i=>i.course===val);
    items.splice(index,1);
    this.setState({
      items
    })
  }

    changehandler=(index,newval)=>{
      let {items} = this.state;
      let item = items[index];
      item.course=newval
      this.setState({
        items
      })
      // console.log(this.state)
    }
    // courseedit=(e)=>{
    //     e.preventDefault();
    //     console.log(this.state.val)
    // }


  render(){
    return (
      <div className="App container">
        <h2>Add Courses</h2>
        <Form  addnew={this.addnewcourse}/>
        <ListItem item={this.state.items} delitem={this.delitem} changehandler={this.changehandler}/>
      </div>
    );
  }
}

export default App;
