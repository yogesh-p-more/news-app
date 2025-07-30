import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;

        const fetchData = async () => {
            props.setProgress(10);
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;

            setLoading(true);
            let data = await fetch(url);

            if (!data.ok) {
                console.error("Failed to fetch data:", data.status);
                setLoading(false);
                return;
            }

            let parseData = await data.json();
            setArticles(parseData.articles || []);
            setTotalResults(parseData.totalResults || 0);
            setLoading(false);
            props.setProgress(100);
        };

        fetchData();
    }, [props.category, props.country, props.pageSize, props.apiKey, props.setProgress]);

    const fetchMoreData = async () => {
        const nextPage = page + 1;
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;

        let data = await fetch(url);

        if (!data.ok) {
            console.error("API limit reached or error fetching data");
            return;
        }

        let parseData = await data.json();

        setArticles(prevArticles => prevArticles.concat(parseData.articles || []));
        setTotalResults(parseData.totalResults || 0);
        setPage(nextPage);
    };

    return (
        <>
            <h1 className='text-center' style={{ marginTop: "90px" }}>
                News Monkey - Top {capitalizeFirstLetter(props.category)} Headlines
            </h1>
            {loading && <Spiner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spiner />}
            >
                <div className="container">
                    <div className="row g-3 mt-4">
                        {articles.map((element, index) => (
                            <div key={`${element.url}-${index}`} className="col-lg-4 col-md-4 col-12">
                                <NewsItem
                                    title={element.title || ""}
                                    discription={element.description || ""}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
};

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
};

export default News;
