import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        console.log("I am a Constructor");
        this.state={
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=US&category=business&apiKey=b7a745a7b9e14ae780f7fb5e565fc776";
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({articles : parseData.articles})
    }
    render() {
        return (
            <div className='container my-3'>
                <h1>News Monkey - Top Headlines</h1>
                <div className="row g-3 mt-4">
                  {this.state.articles.map((element)=>{
                    return   <div key={element.url} className="col-lg-4 col-md-4 col-12">
                        <NewsItem  title={element.title?element.title:""} discription={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                  })}
                </div>
            </div>
        )
    }
}

export default News