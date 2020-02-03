import React from 'react';


function Video() {
    return(
        <video autoPlay muted loop playsinline>
            <source src = "./video/background_video.mp4" type = "video/mp4"/>
        </video>
    );
}

 export default Video;