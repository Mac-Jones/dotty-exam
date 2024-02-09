import { useState } from 'react';

const links = ['video', 'photography', 'social', 'PR', 'radio'];

const Footer = () => {
	const [active, setActive] = useState('video');
	const handleFilter = (link) => {
		setActive(link);
	};

	const renderContent = () => {
		switch (active) {
			case 'video':
				return {
					content: (
						<video width='640' height='360' controls>
							<source src='../assets/whitsundays.mp4' type='video/mp4' />
							<source src='../assets/whitsundays.mp4' type='video/webm' />
						</video>
					),
					description: (
						<p>
							Discover the breathtaking beauty of the Whitsundays in this
							mesmerizing film. Crystal-clear waters, pristine beaches, and
							unforgettable moments await. Dive in now!
						</p>
					),
				};
			case 'photography':
				return {
					content: <img src='../assets/whit.jpg' alt='Photography Content' />,
					description: (
						<p>
							Embark on an enchanting journey through the Whitsundays movie.
							Surrender to the allure of azure seas and untouched landscapes.
							Nature&apos;s masterpiece unveiled on screen
						</p>
					),
				};
			case 'social':
				return {
					content: (
						<img src='../assets/mj-logo-primary-transparent.png' alt='Social' />
					),
					description: (
						<p>
							Dive into the Whitsundays social tapestry, where vibrant events,
							beachside camaraderie, and cultural celebrations create
							unforgettable memories. Immerse yourself in the lively atmosphere,
							forging connections amidst tropical splendor and community warmth.
						</p>
					),
				};
			case 'PR':
				return {
					content: (
						<img
							src='../assets/mj-logo-primary-transparent.png'
							alt='Public Relations'
						/>
					),
					description: (
						<p>
							Explore the Whitsundays with our latest PR coverage, showcasing
							the region&apos;s natural wonders and captivating experiences.
							Discover the magic through press releases that unveil the charm,
							adventure, and hospitality of this extraordinary destination.
						</p>
					),
				};
			case 'radio':
				return {
					content: (
						<video width='640' height='360' controls>
							<source src='../assets/whitsundays.mp4' type='video/mp4' />
							<source src='../assets/whitsundays.mp4' type='video/webm' />
						</video>
					),
					description: (
						<p>
							Immerse yourself in the allure of the Whitsundays - a cinematic
							paradise of turquoise waters and pristine beaches. Capturing
							nature&apos;s elegance and serenity, this visual journey is an
							invitation to escape into the breathtaking beauty of an untouched
							oasis
						</p>
					),
				};
			default:
				return {
					content: (
						<div className='flex flex-col w-[50%] gap-5'>
							<p>No content available for this link</p>
						</div>
					),
					description: null,
				};
		}
	};

	const { content, description } = renderContent();

	return (
		<div
			className='h-screen bg-cyan-950 flex justify-center items-start w-screen'
			id='footer-section'
		>
			<div className='flex flex-col justify-around items-center h-screen  w-[60%] mt-0'>
				<ul className='text-xl font-extralight mb-10'>
					{links.map((link) => (
						<button
							key={link}
							onClick={() => handleFilter(link)}
							className={`${
								active === link ? 'bg-blue-400' : ''
							} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
						>
							{link}
						</button>
					))}
				</ul>
				<div className='flex w-[100%] gap-10 text-white-800 text-center items-center'>
					<div className='flex flex-col w-[50%] gap-5'>{content}</div>
					<div className='flex flex-col w-[50%] gap-5'>{description}</div>
				</div>
				<button></button>
				<a
					href='https://mj-portfolio-3d.netlify.app/'
					className='bg-blue-400 hover:bg-blue-500 whitespace-nowrap rounded-lg px-8 py-2.5 capitalize self-end'
				>
					View Project
				</a>
			</div>
		</div>
	);
};

export default Footer;
