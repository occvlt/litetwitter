import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }     
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(e) {
        this.setState({
            term: e.target.value
        })
        this.props.onUpdateSearch(e.target.value);
    }

    render() {
        return (
            <input 
                className="form-control search-input" 
                type="test" 
                placeholder="Поиск по записям"
                onChange={this.onValueChange}/>
        )
    }
}