import './Nav.scss';

//Hooks 
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

//Images
import Home from '../../Images/Nav-Icons/Home.svg';
import Trend from '../../Images/Nav-Icons/trend.png';
import Subscribe from '../../Images/Nav-Icons/Subscribe.png';
import Library from '../../Images/Nav-Icons/Library.png';
import History from '../../Images/Nav-Icons/History.png';
import Watch from '../../Images/Nav-Icons/Watch.png';
import Star from '../../Images/Nav-Icons/Star.png';
import Like from '../../Images/Nav-Icons/Like.png';
import Music from '../../Images/Nav-Icons/Music.png';
import Games from '../../Images/Nav-Icons/Games.png';
import More from '../../Images/Nav-Icons/More.png';
import Sett from '../../Images/Nav-Icons/Sett.png';

function Nav() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);
  return (
    <>
        <nav className='nav'>
            <div className="nav-box-one">
                <div className="nav-mini-box Home-box-fyr">
                    <img src={Home} alt="Logo" className='nav-home nav-mini-box-img'/>
                    <Link className='nav-mini-box-link' to='/'>Home</Link>
                </div>
                <div className="nav-mini-box">
                    <img src={Trend} alt="Logo" className='nav-trend nav-mini-box-img'/>
                    <p className="nav-mini-box-link trends-text">Trends</p>
                </div>
                <div className="nav-mini-box">
                    <img src={Subscribe} alt="Logo" className='nav-subs nav-mini-box-img'/>
                    <p className="nav-mini-box-link subs-text">Subscribe</p>
                </div>
            </div>
            <div className="nav-box-two">
                <div className="nav-mini-box">
                    <img src={Library} alt="Logo" className='nav-lib'/>
                    <p className="nav-two-link fyr">Library</p>
                </div>
                <div className="nav-mini-box">
                    <img src={History} alt="Logo" className='nav-his'/>
                    <p className="nav-two-link fyr">History</p>
                </div>
                <div className="nav-mini-box">
                    <img src={Watch} alt="Logo" className='nav-wat'/>
                    <p className="nav-two-link fyr">Watch</p>
                </div>
                <div className="nav-mini-box">
                    <img src={Star} alt="Logo" className='nav-sta'/>
                    <p className="nav-two-link fyr">Favourites</p>
                </div>
                <div className="nav-mini-box">
                    <img src={Like} alt="Logo" className='nav-lik'/>
                    <p className="nav-two-link fyr">Liked</p>
                </div>
                <div className="nav-mini-box">
                    <img src={Music} alt="Logo" className='nav-mus'/>
                    <p className="nav-two-link fyr">Music</p>
                </div>
                <div className="nav-mini-box">
                    <img src={Games} alt="Logo" className='nav-games'/>
                    <p className="nav-two-link fyr">Games</p>
                </div>
                <div className="nav-mini-box">
                    <img src={More} alt="Logo" className='nav-more'/>
                    <p className="nav-two-link fyp">Show more</p>
                </div>
            </div>
            <div className="nav-box-three">
                <h3 className="subs-title">Subscriptions</h3>
                {users.map((user) => (
                        <li key={user.id} className='postlar'>
                            <Link className='post-link' to="/chanel"><img src={'https://picsum.photos/id/' + user.id * 6 + '/26/26'}alt="" id='p-img'/> <p className='user-title'>{user.name}</p> </Link>
                        </li>
                    ))}
            </div>
            <div className="settings">
                <img src={Sett} alt="" className='sett-img'/>
                <p className="sett-title">Setting</p>
            </div>
        </nav>
    </>
  );
}

export default Nav;