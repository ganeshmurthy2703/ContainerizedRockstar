import { data } from 'jquery';
import React, { Component } from 'react'; 



class SongView extends React.Component{
    state ={
        lyric:"",
        sentiment:""
    }
    getData(){
        fetch(`http://localhost:5010/${this.props.baseUrl}/${this.props.songKey}`)
        .then(res => res.text())
        .then(data =>
        {
            console.log(data)
            this.setState({
                lyric:data
            },() =>this.getSentiment());
        })
    }


    getSentiment(){
        fetch('http://localhost:8080/sentiment',
                    {
                        method: 'POST', headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ sentence: this.state.lyric})
                    }
        ).then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({sentiment:data.polarity})})

    }



    componentDidUpdate(prevProps){
        if(this.props.songKey!==prevProps.songKey){
        this.getData();
        this.getSentiment();
    }
    }
    componentDidMount(){
        this.getData();
        this.getSentiment();
    }
    
    render(){
        return(
        <div>
            <p>{this.props.songKey}</p>
            <img src={"/images/"+this.props.songKey+".jpg"} width="1200" height="650" />
            <div dangerouslySetInnerHTML={{__html: this.state.lyric}}></div>
            <br />
            <h1>The polarity is:</h1>
            <br />
            <div>{this.state.sentiment}</div>
        </div>
        )}
}

export default SongView

