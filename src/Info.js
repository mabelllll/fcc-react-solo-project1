import React from 'react';
import profilePicture from './profile-pic.jpeg';

export default function Info() {
    return (
        <div className='info'>
            <img src={ profilePicture } alt='profile-pic' className='info--profile_pic' width='317px' height='317px' />
            <h1 className='info--name'>Mabel Lee</h1>
            <h5 className='info--job_title'>Junior Software Engineer</h5>
            <p className='info--website'>mabel-lee.website</p>
            <a href='mailto:abc@gmail.com'>
                <button type='button' className='info--email_btn'>
                    <span className='info--mail_icon'></span>
                    Email
                </button>
            </a>
        </div>
    );
}