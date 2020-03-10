import React, { Component } from "react";
import Switch from "react-switch";
import "./Switch.css"
 
export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news : [{title: "hi"}]
    }

    
   
    
    
  }

  // componentDidMount(){
  //   this.getNews() 
  // }

  // componentWillReceiveProps(){
  //   this.getNews() 
  // }

  // componentDidUpdate(){
  //   this.getNews()
  //   console.log("componentDidUpdate");
    
  // }

  getNews =  () => {
    let country = "";
    this.props.switchState ? country = "us" : country = "ua" 
    const url = `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=e714b70c4494471799b7b36bd08169dc`
  
    fetch(url)
    .then(data => data.json())
    .then(response => {
      console.log(response.articles)

      this.setState({
        news : response.articles 
      })
    } )
  }


  render() {
    return (
      <div>
        {console.log("this.props.switchState: " + this.props.switchState)}
        {() => this.getNews()}
         

         { this.state.news.map(item => {
            return(
              <div>
                <h4>{item.title}</h4>
                <hr/>
              </div> 
            )})
          }
      
      </div>
 
    );
  }
}


