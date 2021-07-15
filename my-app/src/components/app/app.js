import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "Going to learn React", important: false, like: false, id: 1},
                {label: "That is so good", important: false, like: false, id: 2},
                {label: "I need a break...", important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'      
        }
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.filterPost = this.filterPost.bind(this);
        this.maxId = 4;
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newItem = {...data[index], important: !data[index].important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newItem = {...data[index], like: !data[index].like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })        
    }

    onDelete(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })        
    }

    addItem(body) {
        this.setState(({data}) => {
            const newItem = {
                label: body,
                important: false, 
                like: false,                
                id: this.maxId++
            };

            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        })        
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.label.indexOf(term) > -1
        })
    }

    onUpdateSearch(term) {
        this.setState({
            term: term
        })
    }

    filterPost(items, filter) {
        if (filter === "like") {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }
    
    render() {
        const {data, term, filter} = this.state;
        const allPosts = data.length;
        const liked = data.filter(item => item.like).length;
        const UpdateSearch = this.filterPost(this.searchPost(data, term), filter);
        
        return (
            <AppBlock>
                <AppHeader allPosts={allPosts} liked={liked}/>
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                    posts={UpdateSearch} 
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                    onDelete={this.onDelete}/>
                <PostAddForm onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}