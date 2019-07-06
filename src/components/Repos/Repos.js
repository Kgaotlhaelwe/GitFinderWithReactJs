import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import RepoItem from "../Repos/ReposItem"

const Repos = ({ repos }) => {
    return repos.map(repo => < RepoItem repo={repo} key={repo.id} />)


};

Repos.propType = {
    repos: PropTypes.array.isRequired
}
export default Repos;