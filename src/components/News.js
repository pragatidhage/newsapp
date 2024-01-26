import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    
    super();
    this.state ={
      articles : [],
      loading : false,
      page : 1,
    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=c34f3bc03e3448ebaa62a53f3a40e89f&page=1&pageSize=20";
    let data= await fetch(url)
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePrevClick = async () =>{
    console.log("previous")
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=c34f3bc03e3448ebaa62a53f3a40e89f&page=${this.state.page - 1}&pageSize=20`;
    let data= await fetch(url)
    let parsedData = await data.json()
    this.setState({
      page : this.state.page - 1,
      articles: parsedData.articles
    })
  }

  handleNextClick = async () =>{
    console.log("next")
    if(this.state.page+1 <= Math.ceil(this.state.totalResults/20)){
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=c34f3bc03e3448ebaa62a53f3a40e89f&page=${this.state.page + 1}&pageSize=20`;
      let data= await fetch(url)
      let parsedData = await data.json()
      this.setState({
        page : this.state.page + 1,
        articles: parsedData.articles
      })
    }  
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
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={(this.state.page+1 > Math.ceil(this.state.totalResults/20))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>  
      </div>
    )
  }
}

export default News
