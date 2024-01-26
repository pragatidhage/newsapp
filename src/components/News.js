import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    
    super();
    this.state ={
      articles : [],
      loading : false
    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=c34f3bc03e3448ebaa62a53f3a40e89f";
    let data= await fetch(url)
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>NewSapp - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
            return  <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>   
      </div>
    )
  }
}

export default News
