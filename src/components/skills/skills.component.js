import './skills.styles.css'
import React from 'react'
import Image from 'react-bootstrap/Image';
import Logo1 from '../../img/Skills/html-logo.png';
import Logo2 from '../../img/Skills/css-logo.png';
import Logo3 from '../../img/Skills/js-log.png';
import Logo4 from '../../img/Skills/github-logo.png';
import Logo5 from '../../img/Skills/docker-logo.png';
import Logo6 from '../../img/Skills/python-logo.png';
import Logo7 from '../../img/Skills/jquery-logo.png';
import Logo8 from '../../img/Skills/react-logo.png';
import Logo9 from '../../img/Skills/bootstrap-logo.png';
import Logo10 from '../../img/Skills/postgresql-logo.png';
import Logo11 from '../../img/Skills/django-logo.jpeg';


export default function Skills() {
  return (
    <div className= 'mother-container'>
        <div><h2>Skills </h2></div>
        <div class="break"></div>
        <div className="skills-container">
            <div className='image-format'>
                <img
                    src={Logo1}
                    width= '80px'
                    height='80px'
                    className = "img-animation"
                    alt="html logo"
                />
            </div>
            <div className='image-format'>
                <Image
                    src={Logo2}
                    width= '80px'
                    height='80px'
                />
            </div>
            <div className='image-format'>
                <Image
                    src={Logo3}
                    width= '85px'
                    height='80px'
                />
            </div>
            <div className='image-format'>
                <Image
                    src={Logo4}
                    width= '140px'
                    height='90px'
                />
            </div>
            <div className='image-format'>
                <Image
                    src={Logo5}
                    width= '140px'
                    height='100px'
                />
            </div>
            <div className='image-format'>
                <Image
                    src={Logo6}
                    width= '140px'
                    height='100px'
                />
            </div>
            <div className='image-format'>
                <Image
                    src={Logo7}
                    width= '110px'
                    height='50px'
                />
            </div>
            <div className='image-format'>
                <Image
                    src={Logo8}
                    width= '120px'
                    height='60px'
                />
            </div>
            <div className='image-format'>
                <Image
                    src={Logo9}
                    width= '130px'
                    height='48px'
                />
            </div>
            <div className='image-format'>
                <Image
                    src={Logo10}
                    width= '150px'
                    height='50px'
                />
            </div>
            <div className='image-format'>
                <Image
                    src={Logo11}
                    width= '140px'
                    height='60px'
                />
            </div>
        </div>
    </div>
  )
}
