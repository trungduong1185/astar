import React from 'react'
import './styles.css';

const Video = () => {
    return (
        <div className='video-container'>
            <div className='video-block'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2WgqJhYzXvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p className='w-100 tc' style={{paddingTop: 16}}>Recap of A-Star Bootcamp | the Pilot Batch</p>
        </div>
    )
}
export default Video