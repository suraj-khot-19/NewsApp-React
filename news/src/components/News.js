import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            article: [],
            page: 1,
            totalArticle: 1,
            loading: false,
        }
        this.fetchMoreData = this.fetchMoreData.bind(this);
    }
    async updateNews() {
        this.setState({ loading: true });
        this.props.topLoader(30);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}&apiKey=${this.props.apiKey}`;
        let data = await fetch(url);
        this.props.topLoader(50);
        let realData = await data.json();
        this.setState({
            article: realData.articles,
            totalArticle: realData.totalResults,
            loading: false
        });
        this.props.topLoader(85);
        document.title = `S News -${this.capitalize(this.props.category)}`
        this.props.topLoader(100);
    }
    componentDidMount() {
        this.updateNews();
    }
    async fetchMoreData() {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&apiKey=${this.props.apiKey}`;
        let data = await fetch(url);
        let realData = await data.json();
        this.setState({
            article: this.state.article.concat(realData.articles),
            totalArticle: realData.totalResults,
        });
    }
    capitalize(str) {
        let ch = str.charAt(0).toUpperCase();
        let remain = str.substring(1, str.length);
        return ch + remain;
    }
    render() {
        return (
            <>
                <div className="container">
                    <h1 className='text-center'>
                        S News - Top {this.capitalize(this.props.category)} Headline
                    </h1>
                    {/* {this.state.loading && <Loader />} */}
                    <InfiniteScroll
                        dataLength={this.state.article.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.article.length < this.state.totalArticle}
                        loader={<div className='text-center'><Loader /></div>}
                    >
                        <div className="container">
                            <div className="row my-3">
                                {
                                    this.state.article.map((e) => {
                                        return <div className="col-md-4" key={`${e.url} - ${e.publishedAt} - ${e.source}`}>
                                            <NewsItem key={e.url} title={e.title} disc={e.description} url={e.url} imgUrl={e.urlToImage} source={e.source.name} author={e.author} time={e.publishedAt} mode={this.props.theme} />
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
            </>
        )
    }
}
