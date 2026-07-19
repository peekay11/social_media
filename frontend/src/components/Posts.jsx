import { memo } from "react";
import './posts.css';

const posts = [
  { id: 0, username: 'Konke', caption: 'I am alive', time: 'just now', pp: 'k' },
  { id: 1, username: 'Thabo', caption: 'Coffee first, always.', time: '5m ago', pp: 't_pic' },
  { id: 2, username: 'Lerato', caption: 'Chasing the sunrise.', time: '10m ago', pp: 'l_pic' },
  { id: 3, username: 'Sipho', caption: 'Morning routine locked in.', time: '15m ago', pp: 's_pic' },
  { id: 4, username: 'Zama', caption: 'Blessed to see another day.', time: '20m ago', pp: 'z_pic' },
  { id: 5, username: 'Chidi', caption: 'Rise and grind!', time: '30m ago', pp: 'c_pic' },
  { id: 6, username: 'Amina', caption: 'Today is a fresh start.', time: '45m ago', pp: 'a_pic' },
  { id: 7, username: 'Kofi', caption: 'Good morning world!', time: '1h ago', pp: 'ko_pic' },
  { id: 8, username: 'Musa', caption: 'Early bird catches the worm.', time: '1h ago', pp: 'm_pic' },
  { id: 9, username: 'Zola', caption: 'Peaceful mornings hit different.', time: '2h ago', pp: 'zo_pic' },
  { id: 10, username: 'Neo', caption: 'Manifesting a productive week.', time: '2h ago', pp: 'n_pic' }
];



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