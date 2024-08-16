import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, disc, url, imgUrl, source, author, time } = this.props;
        return (
            <>
                <div className="card my-3">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: 1, left: '90%' }}>
                        {source}
                    </span>
                    <img src={!imgUrl && "https://tse3.mm.bing.net/th?id=OIP.83rAaKMTghXwvVFsc-MB8QHaE8&pid=Api&P=0&h=180"} className="card-img-top" alt="ImageIsNull" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{disc}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author} at {new Date(time).toGMTString()}</small></p>
                        <a href={url} target='blank' className="btn btn-primary">Read More...</a>
                    </div>
                </div>
            </>
        )
    }
}
