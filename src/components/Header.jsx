import { useRef, useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const Header = ({ isVideoPlaying }) => {
	const videoId = 'YqFTAXm7_Qc';
	const videoContainerRef = useRef(null);
	const [dimensions, setDimensions] = useState({ width: 1000, height: 700 });

	console.log(isVideoPlaying);

	useEffect(() => {
		const updateDimensions = () => {
			if (videoContainerRef.current) {
				const { clientWidth, clientHeight } = videoContainerRef.current;
				setDimensions({ width: clientWidth, height: clientHeight });
			}
		};

		updateDimensions();

		window.addEventListener('resize', updateDimensions);

		return () => {
			window.removeEventListener('resize', updateDimensions);
		};
	}, []);

	const opts = {
		height: dimensions.height,
		width: dimensions.width,
		playerVars: {
			autoplay: isVideoPlaying ? 1 : 0,
		},
	};

	return (
		<div
			className='flex-center w-full h-screen-minus bg-sky-100 mt-[80px]'
			id='header-section'
		>
			<div className='h-[100%] w-[100%]' ref={videoContainerRef}>
				<div id='header-section'>
					<YouTube videoId={videoId} opts={opts} />
				</div>
			</div>
		</div>
	);
};

export default Header;
