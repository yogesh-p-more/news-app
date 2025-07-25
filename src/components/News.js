import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b7a745a7b9e14ae780f7fb5e565fc776&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({ articles: parseData.articles, totalArticles: parseData.totalResults, loading: false });
    }

    handlePreviosClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b7a745a7b9e14ae780f7fb5e565fc776&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json()

        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading: false
        })
    }
    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalArticles / 20))) {
            console.log("Next");
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b7a745a7b9e14ae780f7fb5e565fc776&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parseData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                loading: false
            })
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>News Monkey - Top Headlines</h1>
                {this.state.loading && <Spiner />}
                <div className="row g-3 mt-4">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div key={element.url} className="col-lg-4 col-md-4 col-12">
                            <NewsItem title={element.title ? element.title : ""} discription={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button type="button" className="btn btn-dark" onClick={this.handlePreviosClick} disabled={this.state.page <= 1}>Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)}>Next</button>
                </div>
            </div>
        )
    }
}

export default News