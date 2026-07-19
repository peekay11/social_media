import { memo } from "react";
import './posts.css';

const posts = [{id: 0,username: 'Konke', caption: "I am alive", time: "just now", pp: "k"}]


const Post = () => (
    <div className="postbar">
        <div className="postinfo">
            {posts.map(({id, username, caption, time, pp}) => (
                <div key={id} className="postnav">
                <div className="profileInfo">
                <span className="profilepic">{pp}</span>
                <span className="user">{username}</span>
                </div>
                <div className="options">
                <p>option menu</p>
                    </div>
                </div>
            ))}
             <div className="postedpic"></div>
             <div className="optionmenu"></div>
        </div>
    </div>
)


export default memo(Post);