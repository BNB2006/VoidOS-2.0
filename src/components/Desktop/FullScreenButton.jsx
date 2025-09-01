import { Maximize, Minimize } from 'lucide-react';
import { useState } from 'react';

const FullscreenButton = () => {
    const [fullScreen, setFullScreen] = useState(false)

  const toggleFullscreen = () => {
    const elem = document.documentElement;

    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(); // Safari
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen(); // IE11
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setFullScreen(!fullScreen);
  };

  return (
    <button onClick={toggleFullscreen} className='hover:text-black' title='Fullscreen'>
      {fullScreen ? <Minimize/> : <Maximize/> }
    </button>
  );
};

export default FullscreenButton;
