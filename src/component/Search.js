import React, { Component } from 'react';
import PropTypes from "prop-types";

class Search extends Component {

    state = {
        text: ""
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired ,
        setAlert:PropTypes.bool.isRequired
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        if (this.state.text == '') {
            this.props.setAlert("Please enter spmething  , light")
            console.log("Please enter spmething")
        } else {
            console.log(this.state.text)
            this.props.searchUsers(this.state.text)

            this.setState({ text: "" })
        }

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }


    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" value={this.state.text} onChange={this.onChange} placeholder="search ...." />

                    <input type="submit" value="search" className="btn btn-dark btn-block" />

                </form>

                {this.props.showClear && <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>}


            </div>
        )
    }

}

export default Search;
