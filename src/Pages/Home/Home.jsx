import './Home.scss';

//Hooks
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Components 
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';

//Images
import ChanelPhoto from '../../Images/chanel-photo.png'
import Food from '../../Images/Food.png'

function Home() {
    // const [videos, setVideos] = useState([]);
    const [title, setTitle] = useState([]);
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/photos')
    //         .then((res) => res.json())
    //         .then((data) => setVideos(data));
    // }, []);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setTitle(data));
    }, []);
  return (
    <>
        <section className="All">
            <Header />
            <div className="All-Box1">
                <Nav />
                <div className="big-box">
                <div className="big-box-mini">
                    <img src={ChanelPhoto} alt="" className="big-box-mini-img" />
                    <Link to='/chanel' className="big-box-mini-title">Dollie Blair</Link>
                </div>
                {title.map((video) => (
                        <Link key={video.id} className='video-link' to='/video'>
                            <img src={'https://picsum.photos/id/' + video.id * 12 + '/250/150'} alt="Rasm" className='video-photo'/>
                            <p className="video-title">{video.company.bs} <br /> <span className='video-title-wiev'>80k views  ·  3 days ago</span><span className='video-title-chanel'>Dollie Blair</span></p>
                        </Link>
                ))}
                </div>
                <div className="recomended">
                <h1 className="recomended-title">Recommended</h1>
                {title.map((video) => (
                    <Link key={video.id} className='recomended-link' to='/video'>
                        <img src={'https://picsum.photos/id/' + video.id * 9 + '/540/250'} alt="Rasm" className='recomended-link'/>
                        <p className="video-title recomended-link-p">{video.company.bs } <br /> <span className='video-title-wiev'>80k views  ·  3 days ago</span><span className='video-title-chanel'>Dollie Blair</span></p>
                    </Link>
                ))}
                </div>
                <div className="lost">
                    <div className="lost-box">
                        <img src={Food} alt="Logo" className="big-box-mini-img" />
                        <Link to='/chanel' className='big-box-mini-title'>Food & Drink</Link>
                        <h1 className="lost-box-title">Recommended channel for you</h1>
                    </div>
                {title.map((video) => (
                        <Link key={video.id} className='video-link lost-link' to='/video'>
                            <img src={'https://picsum.photos/id/' + video.id * 18 + '/250/150'} alt="Rasm" className='video-photo'/>
                            <p className="video-title">{video.company.bs} <br /> <span className='video-title-wiev'>80k views  ·  3 days ago</span><span className='video-title-chanel'>Dollie Blair</span></p>
                        </Link>
                ))}
                </div>
            </div>
        </section>
    </>
  );
}

export default Home;