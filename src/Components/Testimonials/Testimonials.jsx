import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
const Testimonials = () => {
    const slider=useRef();
    let tx=0;

    const slideForward = () => {
      if (tx > -50) {
        tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward=()=>{
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Educity,USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Educity was one of 
                        the best decisions I've ever made. The supportive 
                        community,state-of-art facilities,and commitment 
                        to academic excellence have truly exceeded my 
                        expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Mitchall Jackson</h3>
                                <span>Educity,USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Educity was undeniably 
                        one of the most transformative decisions I've ever made. 
                        The unparalleled support from the community, coupled with 
                        state-of-the-art facilities, and an unwavering dedication to 
                        academic excellence, have consistently surpassed my initial expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Ellyse Perry</h3>
                                <span>Educity,USA</span>
                            </div>
                        </div>
                        <p>Opting to embark on my academic journey at Educity stands out 
                        as one of the most rewarding choices I've ever made. The inclusive 
                        community, cutting-edge facilities, and relentless pursuit of academic 
                        distinction have far exceeded any preconceived notions I held.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Phoebe Litchfield</h3>
                                <span>Educity,USA</span>
                            </div>
                        </div>
                        <p>Choosing Educity for my degree was truly transformative. The supportive 
                        community, cutting-edge facilities, and unwavering commitment to academic 
                        excellence have surpassed all expectations. It's been an unparalleled experience 
                        that I'm grateful for every day.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials;