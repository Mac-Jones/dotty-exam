import { useState } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Story from './components/Story';
import Footer from './components/Footer';
import Solutions from './components/Solutions';

export default function App() {
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);

	const playVideo = () => {
		setIsVideoPlaying(true);
	};

	return (
		<div className='font-poppins text-white w-screen'>
			<Navbar playVideo={playVideo} />
			<Header isVideoPlaying={isVideoPlaying} />
			<Story />
			<Solutions />
			<Footer />
		</div>
	);
}
