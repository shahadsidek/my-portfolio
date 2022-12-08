import React from 'react';
import './socialLinks.css';

export default function Social() {
    return (
        <div className="colz">
            <div className='colz-icon d-inline-flex p-2'>
                <a href='https://www.linkedin.com/in/shahad-sidek/'>
                    <i className='fa fa-2x fa-linkedin-square '> </i>
                </a>
                <a href='https://www.instagram.com/techie.learner/'>
                    <i className=' fa fa-2x fa-instagram'></i>
                </a>
                <a href='https://github.com/shahadsidek'>
                    <i className='fa fa-2x fa-github-square'></i>
                </a>
                <a href='https://twitter.com/techie_learner'>
                    <i className='fa fa-2x fa-twitter'></i>
                </a>
            </div>
        </div>
    )
}