import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            article: [],
            page: 1,
            totalArticle: 1,
            loading: false,
        }
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }
    async updateNews() {
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&page=${this.state.page}&pageSize=${this.props.pageSize}&apiKey=1feeb3ba971c425182492eef91ff97ce`;
        let data = await fetch(url);
        let realData = await data.json();
        this.setState({
            article: realData.articles,
            totalArticle: realData.totalResults,
            loading: false
        });

        console.log("totalResults:", this.state.totalArticle);
        console.log("page:", this.state.page);
    }
    componentDidMount() {
        this.updateNews();
    }
    handlePrev() {
        this.updateNews();
        this.setState({
            page: this.state.page - 1,
        })
    }
    handleNext() {
        this.updateNews();
        this.setState({
            page: this.state.page + 1,
        })
    }
    render() {
        return (
            <>
                <div className="container">
                    <h1 className='text-center'>
                        Top Headlines - S News
                    </h1>
                    {this.state.loading && <Loader />}
                    {!this.state.loading && <div className="row">
                        <div className="col-md-4  ">
                            {
                                this.state.article.map((e) => {
                                    return <NewsItem key={e.url} title={e.title} disc={e.description} url={e.url} imgUrl={e.urlToImage} source={e.source.name} author={e.author} time={e.publishedAt} />
                                })
                            }

                        </div>
                    </div>
                    }

                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-primary" onClick={this.handlePrev}>&larr; Previous</button>
                        <button disabled={this.state.page > Math.ceil(this.state.totalArticle / this.props.pageSize)} type="button" className="btn btn-outline-primary" onClick={this.handleNext}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}
