import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useRef } from "react";
import ReactHlsPlayer, { HlsPlayerProps } from 'react-hls-player';
import { customLog } from "../utils/CustomConsole";

const VideoPlayer = () => {

  const handlePlay = () => {
    customLog('Video is playing');
  };

  const handlePause = () => {
    customLog('Video is paused');
  };

  const handleEnded = () => {
    customLog('Video has ended');
  };

  const playerRef = useRef<any>(null);

  const hlsPlayerProps: HlsPlayerProps = {
    src: 'https://hls.pmchd.live/hls/stream.m3u8',
    autoPlay: true,
    controls: true,
    width: '50%',
    height: 'auto',
    playerRef: playerRef,
  };

  return (
    <div className='w-full flex flex-col gap-16 items-center justify-center bg-pink-200 py-32'>

      <Plyr
        source={{
          type: "video",
          sources: [{ src: 'https://arashaltafi.ir/url_sample/mp4.mp4', provider: 'html5' }],
        }}
        options={{
          controls: ['play', 'progress', 'current-time', 'play-large', 'captions', 'mute', 'volume', 'settings', 'fullscreen', 'pip', 'airplay', 'clickToPlay'],
        }}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
      />

      <Plyr
        source={{
          type: "audio",
          sources: [{ src: 'https://arashaltafi.ir/url_sample/mp3.mp3', provider: 'html5' }],
        }}
        options={{
          controls: ['play', 'progress', 'current-time', 'play-large', 'captions', 'mute', 'volume', 'settings', 'fullscreen', 'pip', 'airplay', 'clickToPlay'],
        }}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
      />

      <Plyr
        source={{
          type: "video",
          sources: [{ src: 'https://arashaltafi.ir/url_sample/mp4.mp4', provider: 'html5' }],
        }}
        options={{
          controls: ['play', 'progress', 'current-time', 'play-large', 'captions', 'mute', 'volume', 'settings', 'fullscreen', 'pip', 'airplay', 'clickToPlay'],
          autoplay: false,
          keyboard: {
            global: true,
          },
          tooltips: {
            controls: true,
            seek: true,
          },
          fullscreen: {
            fallback: true,
            iosNative: true,
          },
          captions: {
            active: true,
            language: 'auto',
          },
          seekTime: 10,
          volume: 0.5,
          clickToPlay: true,
        }}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
      />

      <ReactHlsPlayer className="w-full h-auto" {...hlsPlayerProps} />
    </div>
  )
}

export default VideoPlayer