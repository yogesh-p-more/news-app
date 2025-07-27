import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, discription, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <>
                <div className="h-100">
                    <div className="card h-100">
                        <img src={!imageUrl ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" : imageUrl} className="card-img-top" alt="..." />

                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
                            {source}
                        </span>

                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{discription}</p>
                            <p className="card-text"><small className="text-body-secondary">By <strong>{!author ? "Unknown" : author}</strong> on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem