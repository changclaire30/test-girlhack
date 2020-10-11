import React from 'react';
import './Topic.css';

const Topic = ({Title, ImageUrl, AccessibleVersion}) => {
    return (
        <div className="topic-container">
            <div className="topic-card">
                <div>
                    {/* <img src={ImageUrl} alt="" className="topic-image" /> */}
                </div>
                <div className="topic-description">
                    <h2>{Title}</h2>
                    <a href={AccessibleVersion}>Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default Topic;
