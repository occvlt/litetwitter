import React from 'react';
import './post-list-item.css';

const PostListItem = ({label, important, like, onToggleImportant, onToggleLiked, onDelete}) => {
    let classNames = "app-list-item d-flex justify-content-between";

    if (important) {
        classNames += " important";
    }

    if (like) {
        classNames += " like";
    }

    return (
        <div className={classNames}>
            <span className="app-list-item-label" onClick={onToggleLiked}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-star btn-sm" onClick={onToggleImportant}>
                    <i className="bi bi-star"></i>
                </button>
                <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                    <i className="bi bi-trash"></i>
                </button>
                <i className="fa-heart">&#9829;</i>
                
            </div>
        </div>
    )
}

export default PostListItem;