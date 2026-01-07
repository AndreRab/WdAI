import { useState } from 'react';
import './Komentarz.css';

interface User {
    id: number;
    username: string;
    fullName: string;
}

export interface KomentarzProps {
    id: number;
    body: string;
    postId: number;
    likes: number;
    dislikes: number;
    user: User;
}

export const Komentarz = ({ id, body, postId, likes, dislikes, user }: KomentarzProps) => {
    const [likeCount, setLikeCount] = useState(likes);
    const [dislikeCount, setDislikeCount] = useState(dislikes);

    const handleLike = () => setLikeCount(prev => prev + 1);
    const handleDislike = () => setDislikeCount(prev => prev + 1);

    const initial = user.fullName ? user.fullName.charAt(0).toUpperCase() : user.username.charAt(0).toUpperCase();

    return (
        <div className="komentarz">
            <div className="komentarz-header">
                <div className="user-avatar">{initial}</div>
                <div className="user-info">
                    <span className="username">@{user.username}</span>
                    <span className="fullname">{user.fullName}</span>
                </div>
            </div>

            <div className="komentarz-body">
                {body}
            </div>

            <div className="komentarz-footer">
                <div className="likes-control">
                    <button className="like-btn" onClick={handleLike}>👍</button>
                    <span className="likes-count">{likeCount}</span>
                    <button className="like-btn" onClick={handleDislike}>👎</button>
                    <span className="likes-count">{dislikeCount}</span>
                </div>
                <span>Post ID: {postId}</span>
                <span>Comment ID: {id}</span>
            </div>
        </div>
    );
};
