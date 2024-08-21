import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, disc, url, imgUrl, source, author, time } = this.props;
        return (
            <>
                <div className="card my-3" style={this.props.theme === 'dark' ? { border: '4px solid white' } : { border: '2px solid #470f65' }}>
                    {/* badge */}
                    <div style={{ position: 'absolute', right: '0', top: '2', display: 'flex' }}>
                        <span className=" badge rounded-pill bg-danger">
                            {source}
                        </span>
                        {/* card */}
                    </div>
                    <img src={!imgUrl && "https://tse3.mm.bing.net/th?id=OIP.83rAaKMTghXwvVFsc-MB8QHaE8&pid=Api&P=0&h=180"} className="card-img-top" alt="ImageIsNull" />
                    <div className="card-body" style={this.props.theme === 'light' ? { backgroundColor: 'white', color: 'black' } : { backgroundColor: 'black', color: 'white' }}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{disc}</p>
                        <p className="card-text"><small className={`text-body-${this.props.theme === 'light' ? 'dark' : 'light'}`}>By {author} at {new Date(time).toGMTString()}</small></p>
                        <a href={url} target='blank' className={`btn btn-${this.props.theme === 'light' ? 'dark' : 'light'}`}>Read More...</a>
                    </div>
                </div>
            </>
        )
    }
}
