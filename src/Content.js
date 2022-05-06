import React from "react";
import PropTypes from "prop-types";

import Article from "./Article";


const Content = (props) => {
    return (
        <main>
            <section className="posts">
                <div className="container">
                    <h1>
                        Posts
                    </h1>
                    <ul className="list">
                        {
                            props.listItem.map((article) => {
                                return <Article key={article.title} content={article.content}>{article.title}</Article>
                            })
                        }
                    </ul>
                </div>
            </section>

        </main>
    )
};

Content.propTypes = {
    listItem: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })).isRequired

}
export default Content;