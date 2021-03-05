import { data } from 'jquery';
import React, { Component } from 'react'; 

class CommsTestPython extends React.Component{
    state ={
        commsData:"",
        
    }


    getData(){
        fetch(`http://localhost:5000/${this.props.baseUrl}`)
        .then(res => res.text())
        .then(data =>
        {
            console.log(data)
            this.setState({
                commsData:data
            })
        })
    }

    componentDidMount(){
        this.getData();
    }


    render(){
        return(
        <div>
            <br />
            <div>{this.state.commsData}</div>
        </div>
        )}
}

export default CommsTest

