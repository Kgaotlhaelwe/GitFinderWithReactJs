import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const RepoItem = ({repo}) => {
    return (
        <div className="card">
                <a href={repo.html_url}>{repo.name}</a>
        </div>
    )




};
RepoItem.propType = {
    repos: PropTypes.object.isRequired
}

export default RepoItem;