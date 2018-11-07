import React, {Component} from 'react';
import './CommentItem.css'
import roundAvatar from '../../image/round-avatar.png';

class CommentItem extends Component {
    render() {
        let {comment} = this.props;

        return (
            <li className="list-group-item">
                <div>
                    <img className="img avatar"
                         src={roundAvatar}
                         alt=""/>
                    <p>{comment.name}</p>
                    <p>{comment.content}</p>
                </div>
            </li>
        );
    }
}

export default CommentItem;
