import { Consumer } from "./Context";

import '../css/bgvideo.css'

const BGVideo = () => {
    
    return (
        <Consumer>
            {(value) => (
                <video className='bgVideo' autoPlay loop muted>
                    {value.bgVideo}   
                </video>
            )}
        </Consumer>
    )
}

export default BGVideo;