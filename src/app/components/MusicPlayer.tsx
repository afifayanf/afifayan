import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function MusicPlayer() {

const audioRef = useRef<HTMLAudioElement | null>(null);
const [isPlaying, setIsPlaying] = useState(false);

useEffect(() => {

const audio = audioRef.current;
if (!audio) return;

audio.volume = 0.8;

const startMusic = async () => {
try {
await audio.play();
setIsPlaying(true);
} catch {
console.log("Autoplay blocked, waiting for click");
}
};

startMusic();

const enableAudio = async () => {
try {
await audio.play();
setIsPlaying(true);

document.removeEventListener("click", enableAudio);
document.removeEventListener("touchstart", enableAudio);
document.removeEventListener("scroll", enableAudio);

} catch (err) {
console.log("Play failed", err);
}
};

document.addEventListener("click", enableAudio);
document.addEventListener("touchstart", enableAudio);
document.addEventListener("scroll", enableAudio);

const handlePlay = () => setIsPlaying(true);
const handlePause = () => setIsPlaying(false);

audio.addEventListener("play", handlePlay);
audio.addEventListener("pause", handlePause);

return () => {
document.removeEventListener("click", enableAudio);
document.removeEventListener("touchstart", enableAudio);
document.removeEventListener("scroll", enableAudio);
audio.removeEventListener("play", handlePlay);
audio.removeEventListener("pause", handlePause);
};

}, []);

return (

<>

<audio
ref={audioRef}
src="/song/song.mp4"
loop
preload="auto"
playsInline
/>

<motion.div
className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-red-500/50 text-red-500"
initial={{ scale: 0, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{ duration: 0.5 }}

>

{isPlaying ? (

<div className="flex space-x-[3px] h-5">

<motion.div
className="w-[3px] bg-red-500"
animate={{ height: [6,18,6] }}
transition={{ repeat: Infinity, duration: 0.7 }}
/>

<motion.div
className="w-[3px] bg-red-500"
animate={{ height: [10,14,10] }}
transition={{ repeat: Infinity, duration: 0.5 }}
/>

<motion.div
className="w-[3px] bg-red-500"
animate={{ height: [6,18,6] }}
transition={{ repeat: Infinity, duration: 0.8 }}
/>

</div>

) : (

<span className="text-xs">♫</span>

)}

</motion.div>

</>

);

}
