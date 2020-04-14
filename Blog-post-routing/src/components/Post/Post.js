import React from 'react';

import './Post.module.css';
import { withRouter } from 'react-router';

const post = (props) => {
    // console.log(props);
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    );
};

export default post;
// export default withRouter(post);