import React from "react";

import PropTypes from "prop-types";


const Article = (props) => {
    return (
        <li className="list__item">
            <h2>{props.children}</h2>
            <p>{props.content}</p>
        </li>
    );
};

Article.propTypes = {
    children: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};


export default Article;