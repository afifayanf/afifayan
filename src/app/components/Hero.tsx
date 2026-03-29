import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";

import { FaDiscord, FaFacebookF, FaYoutube, FaGithub } from "react-icons/fa";
import { Sparkles, MousePointer2 } from "lucide-react";

import profileImage from "../../assets/profile.png";

export function Hero() {

const typingWords = [
"Web Designer",
"Full Stack Developer",
"Software Maker",
"UI/UX Designer",
];

const socials = [

{
icon: <FaFacebookF size={20} />,
link: "https://www.facebook.com/share/18AQzdTgNR/",
},

{
icon: <FaYoutube size={20} />,
link: "https://www.youtube.com/@afifayan-fun",
},

{
icon: <FaDiscord size={20} />,
link: "https://discord.com/users/1398998060461195285",
},

{
icon: <FaGithub size={20} />,
link: "https://github.com/afifayanf",
}

];

return (

<section
id="Home"
className="relative w-full min-h-screen flex items-center justify-center pt-24 md:pt-20 pb-16 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden"
>

<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

{/* Left Image */}

<motion.div
className="flex justify-center"
initial={{ opacity: 0, x: -80 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 1 }}

>

<img
src={profileImage}
alt="Afifayan"
className="max-w-[450px] w-full drop-shadow-2xl"
/>

</motion.div>

{/* Right Text */}

<div className="flex flex-col gap-6 text-center lg:text-left">

<h1 className="text-5xl md:text-7xl font-bold text-white">

Hi, It's <span className="text-[#ff6b6b] flex items-center gap-2 justify-center lg:justify-start">

Afifayan <Sparkles className="w-8 h-8 animate-pulse"/>

</span>

</h1>

<h2 className="text-2xl md:text-3xl text-white">

I'm a <span className="text-[#ff6b6b] font-bold">

<Typewriter
words={typingWords}
loop={true}
cursor
cursorStyle="|"
typeSpeed={70}
deleteSpeed={50}
delaySpeed={2000}
/>

</span>

</h2>

<p className="text-gray-400 max-w-xl mx-auto lg:mx-0">

I am a passionate student and developer with a deep love for building
sleek modern web applications. Crafting software isn't just a hobby —
it's my art.

</p>

{/* Socials */}

<div className="flex gap-4 justify-center lg:justify-start">

{socials.map((social,index)=>(
<a
key={index}
href={social.link}
target="_blank"
className="w-12 h-12 rounded-full border border-[#ff6b6b] flex items-center justify-center text-[#ff6b6b] hover:bg-[#ff6b6b] hover:text-white transition"

>

{social.icon}

</a>
))}

</div>

{/* Hire Button */}

<a
href="mailto:info@afifayan.fun"
className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#ff6b6b] text-white font-semibold w-fit mx-auto lg:mx-0 hover:scale-105 transition"

>

Hire me <MousePointer2 className="w-4 h-4"/>

</a>

</div>

</div>

</section>

);

}
