import { useEffect, useState, useRef } from "react";

function VideoPlaying({src, isPlaying}) {
    const ref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            ref.current.play();
        }else {
            ref.current.pause();
        }
    });
    return <video ref={ref} src={src} loop playsInline />;
}

function VideoPlayer() {
    const[isPlaying, setIsPlaying] = useState(false);
    // const [text, setText] = useState('');

    return (  
        <>
        {/* <input value={text} onChange={e => setText(e.target.value)} /> */}
        <button onClick={() => setIsPlaying(!isPlaying)} >
            {isPlaying ? 'Pause' : 'Play'}
        </button>
        <VideoPlaying 
            isPlaying={isPlaying}
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
        </>
    );
}

export default VideoPlayer;