import { useEffect, useRef, useState } from 'react';
import Sound from 'react-sound';
import Divider from '../Components/Divider';

interface SoundData {
  url: string;
  volume: number;
  isPlaying: boolean;
}

interface MultiSoundPlayerProps {
  sounds: SoundData[];
}

const AudioPlayer = (props: MultiSoundPlayerProps) => {
  const [soundData, setSoundData] = useState<SoundData[]>(props.sounds);

  const audioRefs = useRef<HTMLAudioElement[]>([]);

  const playSound = (index: number) => {
    audioRefs.current[index].play();
  };

  const pauseSound = (index: number) => {
    audioRefs.current[index].pause();
  };

  const setVolume = (index: number, value: number) => {
    const newSounds = [...soundData];
    newSounds[index].volume = value;
    setSoundData(newSounds);
    audioRefs.current[index].volume = value;
  };








  //way 2
  const [soundData2, setSoundData2] = useState<SoundData[]>(props.sounds);

  const handlePlayPause = (index: number) => {
    const updatedSoundData = [...soundData2];
    updatedSoundData[index].isPlaying = !updatedSoundData[index].isPlaying;
    setSoundData2(updatedSoundData);
  };

  const handleVolumeChange = (index: number, newVolume: number) => {
    const updatedSoundData = [...soundData2];
    updatedSoundData[index].volume = newVolume;
    setSoundData2(updatedSoundData);
  };

  const handleOnLoad = () => {
    console.log('Sound loaded!');
  };

  const handleOnPlay = () => {
    console.log('Sound started playing');
  };

  const handleOnPause = () => {
    console.log('Sound paused');
  };

  const handleOnFinish = () => {
    console.log('Sound finished playing');
  };

  return (
    <div className="w-full h-screen py-8 flex flex-col gap-16">
      <h1 className='title'>AudioPlayer</h1>
      <div className='w-full h-full flex items-center justify-center flex-col gap-8'>

        <div>
          {soundData.map((sound, index) => (
            <div key={index} className='w-full flex items-center justify-center gap-12 my-2'>
              <span className='subtitle'>Track {index + 1}</span>
              <button className='btnSuccess' onClick={() => playSound(index)}>Play</button>
              <button className='btnError' onClick={() => pauseSound(index)}>Pause</button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={sound.volume}
                onChange={(e) => setVolume(index, parseFloat(e.target.value))}
              />
              <span className='subtitle'>{Math.round(sound.volume * 100)}</span>
              <audio ref={(audio) => (audioRefs.current[index] = audio as HTMLAudioElement)} src={sound.url} loop />
            </div>
          ))}
        </div>


        <Divider />

        <div>
          {soundData2.map((sound, index) => (
            <div key={index} className='flex items-center justify-center gap-4 my-2'>
              <span className='subtitle'>Track {index + 1}</span>
              <button className='btnError' onClick={() => handlePlayPause(index)}>
                {sound.isPlaying ? 'Pause' : 'Play'}
              </button>
              <input
                type="range"
                min={0}
                max={100}
                value={sound.volume * 100}
                onChange={(e) => handleVolumeChange(index, parseInt(e.target.value, 10) / 100)}
              />
              <span className='subtitle'>{Math.round(sound.volume * 100)}</span>
              <Sound
                url={sound.url}
                playStatus={sound.isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
                volume={sound.volume}
                playFromPosition={0}
                onLoading={handleOnLoad}
                onPlaying={handleOnPlay}
                onPause={handleOnPause}
                onResume={handleOnPlay}
                onStop={handleOnFinish}
                onFinishedPlaying={handleOnFinish}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  )

}

export default AudioPlayer