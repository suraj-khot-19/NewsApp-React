import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-3 my-4">
                            <NewsItem title="title" disc="disc" url="url" imgUrl="url" source="source" author="suraj" time="2024-08-16T10:44:30Z" />
                        </div>
                        <div className="col-3 my-4">
                            <NewsItem title="title" disc="disc" url="url" imgUrl="url" source="source" author="suraj" time="2024-08-16T10:44:30Z" />
                        </div>
                        <div className="col-3 my-4">
                            <NewsItem title="title" disc="disc" url="url" imgUrl="url" source="source" author="suraj" time="2024-08-16T10:44:30Z" />
                        </div>
                        <div className="col-3 my-4">
                            <NewsItem title="title" disc="disc" url="url" imgUrl="url" source="source" author="suraj" time="2024-08-16T10:44:30Z" />
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
