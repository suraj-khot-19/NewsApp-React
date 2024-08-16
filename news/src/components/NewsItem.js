import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, disc, url, imgUrl, source, author, time } = this.props;
        return (
            <>
                <div className="card my-3">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ zIndex: 1, left: '90%' }}>
                        source {source}
                    </span>
                    <img src={imgUrl} className="card-img-top" alt="..." />
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
