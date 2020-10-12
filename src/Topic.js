import React from 'react';
import './Topic.css';

const Topic = ({Title, ImageUrl, AccessibleVersion, MyHFDescription}) => {
    return (
        <div className="topic-container">
            <a href={AccessibleVersion} target="_blank">
                <div className="topic-card">
                    <div>
                        {/* <img src={ImageUrl} alt="" className="topic-image" /> */}
                    </div>
                    <div className="topic-description">
                        <h2>{Title}</h2>
                        <p>{MyHFDescription.replace("<p>", "").replace("</p>", "")}</p>
                        {/* <a >Learn more</a> */}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Topic;
