import React, { Component } from "react"
import "./Form.css"
class Form extends Component{
    state={
        course:''
    }

    handelchange=(e)=>{
        let x =e.target.value;
        this.setState({
            course:x
        })
    }

    handelSubmit=(e)=>{
        e.preventDefault();
        if(e.target.course.value === ""){
            return false
        }
        else{
            const {addnew} = this.props;
            addnew(this.state);
            this.setState({
               course:''
            })
        }

    }
    render(){
        return(
            <div>
                <form onSubmit={this.handelSubmit} className="row">
                    <input className="col-md-9 col-7" type="text" id="course" placeholder="enter new course" onChange={this.handelchange} value={this.state.course}/>
                    <button className="addbtn btn col-md-3 col-5">add course</button>
                </form>
            </div>
        )
    }
}

export default Form