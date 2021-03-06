import './Chanel.scss';

//Hooks 
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

//Components 
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';

//Images
import Back from '../../Images/Back.png'
import Qongiroq from '../../Images/Qongiroq.png'
import UserLogo from '../../Images/UserLogo.png'
import Search from '../../Images/Search.png'
import Oval1 from '../../Images/Oval1.png'
import Oval2 from '../../Images/Oval2.png'
import Oval3 from '../../Images/Oval3.png'

function Chanel() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setTitle(data));
  }, []);
  const [title, setTitle] = useState([]);
  return (
    <>
        <section className="All">
            <Header />
            <div className="All-Box5">
                <Nav />
                <div className="about">
                  <img src={Back} alt="" className="about-img" />
                  <div className="about-box">
                    <img src={UserLogo} alt="Rasm" className="about-box-img" />
                    <h1 className="about-box-title">Margaret Phelps <br /> <span>245K subscribed</span></h1>
                    <img src={Qongiroq} alt="Rasm" className="about-box-dingdong" />
                    <button className='about-box-btn'>Subscribe 2.3m</button>
                  </div>
                  <div className="about-links">
                    <Link to='/minihome' className='about-links-link'>Home</Link>
                    <Link to='/minivideos' className='about-links-link'>Videos</Link>
                    <Link to='/miniplaylist' className='about-links-link'>Playlist</Link>
                    <Link to='/minichannels' className='about-links-link'>Channels</Link>
                    <Link to='/minidiscussion' className='about-links-link'>Discussion</Link>
                    <Link to='/miniabout' className='about-links-link'>About</Link>
                      <img src={Search} alt="Rasm" className="about-links-search" />
                  </div>
                  <div id="video">
                    <iframe id='video-img' width="450" height="250" src="https://www.youtube.com/embed/2kiAV2K72Cc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <Link id="video-title" to='video'>Frontend'ni o'rganish uchun <br /> Foundation nega kerak? <br /> <span id="video-title-about">Nega Frontend kursini bootcamp tarzida o'qimoqchi <br /> bo'lgan o'quvchilarga ham avvalo Foundation'da o'qish <br /> maslahat berilmoqda?</span> <br /> <span id="video-title-date">2 831 ????????????????1 ?????? 2021 ??.</span> </Link>
                  </div>
                  <div className="users">
                    <h4 className="users-title">Recommended channel</h4>
                      <div className="users-box">
                        <img src={Oval1} alt="Oval" className="users-box-img" />
                        <Link to='/chanel' className='users-box-title'>Flora Benson</Link>
                      </div>
                      <div className="users-box">
                        <img src={Oval2} alt="Oval" className="users-box-img" />
                        <Link to='/chanel' className='users-box-title'>Violet Cobb</Link>
                      </div>
                      <div className="users-box">
                        <img src={Oval3} alt="Oval" className="users-box-img" />
                        <Link to='/chanel' className='users-box-title'>Phillip Mullins</Link>
                      </div>
                  </div>
                  <div id="lost-video">
                    <h1 id="lost-video-title">Margaret Phelps videos</h1>
                    <div id="lost-video-box">
                      {title.map((video) => (
                          <Link key={video.id} className='video-link' to='/video'>
                            <img src={'https://picsum.photos/id/' + video.id * 16 + '/250/150'} alt="Rasm" className='video-photo'/>
                            <p className="video-title">{video.company.bs} <br /> <span className='video-title-wiev'>80k views  ??  3 days ago</span><span className='video-title-chanel'>Dollie Blair</span></p>
                          </Link>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Chanel;