import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
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
            page: +1
        }
    }

    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b7a745a7b9e14ae780f7fb5e565fc776&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({ articles: parseData.articles, totalArticles: parseData.totalResults, loading: false });
    }
    async componentDidMount() {
        this.updateNews();
    }
    handlePreviosClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }
    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>News Monkey - Top Headlines</h1>
                {this.state.loading && <Spiner />}
                <div className="row g-3 mt-4">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div key={element.url} className="col-lg-4 col-md-4 col-12">
                            <NewsItem
                                title={element.title ? element.title : ""}
                                discription={element.description ? element.description : ""}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                                author={element.author}
                                date={element.publishedAt}
                                source={element.source.name}
                            />
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