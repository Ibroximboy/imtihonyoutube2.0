import './Rolics.scss';

//Components 
import Header from '../../Components/Header/Header';

//Hooks 
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Images 
import More2 from '../../Images/More2.png'
import Likee from '../../Images/Likee.png'
import DizLike from '../../Images/DizLike.png'
import Share from '../../Images/Share.png'

function Rolics() {
  const [title, setTitle] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setTitle(data));
    }, []);
  return (
    <>
        <section className="All">
            <Header />
            <div className="All-Box3">
              <div className="video">
                <iframe className='video-iframe' src="https://www.youtube.com/embed/2kiAV2K72Cc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <div className="video-box">
                      <div className="video-box-texts">
                        <h1 className="video-title">Frontend'ni o'rganish uchun Foundation nega kerak?</h1>
                        <p className="video-text">2 823 просмотра</p>
                      </div>
                      <div className="video-box-btns">
                        <button className="video-btn"><img src={Likee} alt="Like" className="Like" />218</button>
                        <button className="video-btn"><img src={DizLike} alt="Dizlike" className="Dizlike" />Dislike</button>
                        <button className="video-btn"><img src={Share} alt="Share" className="share" />Share</button>
                        <img src={More2} alt="" className="video-menu" />
                      </div>
                  </div>
                  <div className="info">
                    <Link to='/chanel'><img src="https://yt3.ggpht.com/ytc/AKedOLT42JSYdiK7vV3Kn9cibkJD6s8uJ6MhqfDKmOJw=s88-c-k-c0x00ffffff-no-rj" alt="" className="info-logo" /></Link>
                    <h1 className="info-text">Najot Talim <br /> 
                    <span className="info-text-date">1 мая 2021 г.</span> <br /> 
                    <span className="info-text-about">Nega Frontend kursini bootcamp tarzida o'qimoqchi bo'lgan o'quvchilarga ham avvalo <br /> Foundation'da o'qish maslahat berilmoqda?</span> <br /> 
                    <span className="info-text-show">Show more</span></h1>
                    <button className='info-btn'>Subscribe 2.3m</button>
                  </div>
              </div>
              <div className="all-videos">
              <h1 id='next'>Next</h1>
              {title.map((video) => (
                    <Link key={video.id} className='video-link' to='/video'>
                            <img src={'https://picsum.photos/id/' + video.id + 4 + '/367/213'} alt="Rasm" className='video-photo'/>
                            <p className="video-title">{video.company.bs}</p>
                    </Link>
                ))}
              </div>
            </div>
        </section>
    </>
  );
}

export default Rolics;