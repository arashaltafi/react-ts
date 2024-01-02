import { useState } from 'react';
import Sound from 'react-sound';

interface SoundData {
    url: string;
    volume: number;
    isPlaying: boolean;
}

interface MultiSoundPlayerProps {
    sounds: SoundData[];
}

const MultiSoundPlayer = (props: MultiSoundPlayerProps) => {
    const [soundData, setSoundData] = useState<SoundData[]>(props.sounds);

    const handlePlayPause = (index: number) => {
        const updatedSoundData = [...soundData];
        updatedSoundData[index].isPlaying = !updatedSoundData[index].isPlaying;
        setSoundData(updatedSoundData);
    };

    const handleVolumeChange = (index: number, newVolume: number) => {
        const updatedSoundData = [...soundData];
        updatedSoundData[index].volume = newVolume;
        setSoundData(updatedSoundData);
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
        <div>
            {soundData.map((sound, index) => (
                <div key={index} className='flex items-center justify-center gap-4 my-2'>
                    <span>Track {index + 1}</span>
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
                    <span>{Math.round(sound.volume * 100)}</span>
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
    );
};

export default MultiSoundPlayer;