import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, discription, imageUrl, newsUrl } = this.props;
        return (
            <>
                <div className="h-100">
                    <div className="card h-100">
                        <img src={!imageUrl ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" : imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{discription}</p>
                            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem