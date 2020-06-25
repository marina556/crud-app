import React, { Component } from "react"
import { Fragment } from "react";
import './ListItem.css'
import Item from './item'
class ListItem extends Component{
  
    vvvv=()=>{
        const {item} = this.props;
        const listitems = item.length? (item.map((ele,index)=>{
            return(
                <ul className="list" key={index}>
                    <Item changehandler={this.props.changehandler} key={index} ele={ele} index={index} delitem={this.props.delitem} />
                    {/* <li className="row">
                    <span className="col-8">{ele.course}</span>
                    <span className="col-2"><button className="btn addbtn col-11" onClick={()=>this.handelEdit(index)}>Edit</button></span>
                    <span className="col-2 text-right"><button className="btn btn-danger col-11" onClick={()=>this.props.delitem(ele.course)}>delete</button></span>
                    </li> */}
                </ul>
            )
        })):<p className="no-item">No Courses to Show!</p>
        return listitems
    }

    render(){
    //   this.vvvv.listitems

        return(
            <Fragment>{this.vvvv()}</Fragment>
        )
    }
}

export default ListItem