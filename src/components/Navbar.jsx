import { useState, useEffect } from 'react';
import { IoLogoYoutube } from 'react-icons/io5';
import { CgSoftwareDownload } from 'react-icons/cg';

import resume from '../assets/mj-resume-main.pdf';

const Navbar = ({ playVideo }) => {
	const [activeSection, setActiveSection] = useState('header-section');
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);

	const handleVideoClick = () => {
		setIsVideoPlaying(true);
		playVideo();
	};

	const handleScroll = () => {
		const sectionElements = document.querySelectorAll(
			'#story-section, #header-section, #solution-section, #footer-section'
		);

		sectionElements.forEach((section) => {
			const sectionId = section.getAttribute('id');
			const sectionTop = section.getBoundingClientRect().top;
			const sectionBottom = section.getBoundingClientRect().bottom;

			if (sectionTop <= 100 && sectionBottom > 100) {
				setActiveSection(sectionId);
			}
		});
	};

	useEffect(() => {
		const handleScrollThrottled = throttle(handleScroll, 100);
		window.addEventListener('scroll', handleScrollThrottled);

		return () => {
			window.removeEventListener('scroll', handleScrollThrottled);
		};
	}, []);

	const throttle = (func, limit) => {
		let inThrottle;
		return function () {
			const args = arguments;
			const context = this;
			if (!inThrottle) {
				func.apply(context, args);
				inThrottle = true;
				setTimeout(() => (inThrottle = false), limit);
			}
		};
	};

	const links = [
		{
			section: 'header-section',
			name: 'Background & Challenges',
		},
		{
			section: 'story-section',
			name: 'Results & Effectiveness',
		},
		{
			section: 'solution-section',
			name: 'Solution',
		},
		{
			section: 'footer-section',
			name: 'Slideshow',
		},
	];

	return (
		<div className='flex-center fixed top-0 z-50 w-full h-[80px] bg-black-300 text-white-400 py-0'>
			<div className='flex-between mx-auto w-full max-w-screen-xl px-8 xs:px-8 sm:px-16 '>
				<nav className='flex flex-center gap-x-3 md:gap-5 transition-all duration-1000 relative'>
					<IoLogoYoutube className='text-[36px]' onClick={handleVideoClick} />

					{links.map((link) => (
						<a
							key={link.section}
							href={`#${link.section}`}
							className={`text-xl border-left ${
								activeSection === link.section ? 'font-semibold text-white' : ''
							}`}
							onClick={() => setActiveSection(link.section)}
						>
							{link.name}
						</a>
					))}
				</nav>
				<div className='fixed right-5 top-1/2 transform -translate-y-1/2'>
					{links.map((link) => (
						<div
							key={link.section}
							className={`w-3 h-3 rounded-full ${
								activeSection === link.section ? 'bg-white' : 'bg-gray-500'
							} mb-2`}
						></div>
					))}
				</div>
				<button className='header__button-container flex text-xl bg-black-200 px-4 py-2 rounded-xl'>
					<CgSoftwareDownload className='text-2xl mt-[1px] mr-1' />
					<a href={resume} download className='btn header__btn '>
						Download Board
					</a>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
