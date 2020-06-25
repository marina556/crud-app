import React, { Component, Fragment } from "react"

class Item extends Component{
    state={
        isEdit:false,
        val:this.props.ele.course
    }
 
    change=(e)=>{
        const val =  e.target.value;
        this.setState({
           val 
        })
    }
    courseedit=(e)=>{
        e.preventDefault();
        this.props.changehandler(this.props.index,this.state.val);
        this.handeledit()
    }
    updateForm =()=>{
        return(
        <form onSubmit={this.courseedit} className="row">
            <input className="col-md-9 col-7" type="text" value={this.state.val} onChange={this.change} placeholder="enter new course" />
            <button className="addbtn btn col-md-3 col-5" >edit Course</button>
        </form>

        )
        
    }

    renderCorseLi = () =>{
        return(
            
        <li className="row">
                    <span className="col-4 col-md-6">{this.props.ele.course}</span>
                    <span className="col-4 col-md-3"><button className="btn addbtn col-11" onClick={()=>{this.handeledit()}}>Edit</button></span>
                    {/* <span className="col-2 text-right"><button onClick={()=>this.handeledit()}>edit</button></span> */}
                    <span className="col-4 col-md-3 text-right"><button className="btn btn-danger col-11" onClick={()=>this.props.delitem(this.props.ele.course)}>delete</button></span>
        </li>
        )
    }

    handeledit=()=>{
        let {isEdit} = this.state;
        this.setState({
            isEdit:!isEdit
        })
    }

    render(){
        let {isEdit} =this.state
        return(
            <Fragment>
                {isEdit ? this.updateForm() : this.renderCorseLi()}
                </Fragment>
        )
    }
}

export default Item