const Story = () => {
	return (
		<div
			className='relative flex-center bg-cyan-900 h-screen'
			id='story-section'
		>
			<div className='w-[80%] h-[80%] flex justify-between items-start'>
				<div className='h-full flex flex-col justify-center items-center uppercase pl-10'>
					<h2 className='text-6xl font-bold text-center text-white'>
						<span className='mr-16'>The</span> <br /> Whitsundays
					</h2>
					<p>A movie that&apos;s waiting to be written</p>
				</div>
				<div className='h-full w-[40%]  flex flex-col justify-center items-center gap-10 z-2'>
					<div>
						<h3 className='text-3xl mb-4'>
							Background <br /> & Audience
						</h3>
						<p>
							Tourism & Events Queensland wanted to increase consideration of
							the Whitsundays amongst &apos;social fun seeker&apos; digital
							savvy customers that socialize substantially online.
						</p>
					</div>
					<div>
						<h3 className='text-3xl mb-4'>Problem</h3>
						<p>
							The Whitsundays was losing it cachet as an inspirational holiday
							location.
						</p>
					</div>
					<div>
						<h3 className='text-3xl mb-4'>Objective</h3>
						<p>
							Shift perceptions and re-build the Whitsundays&apos; social
							currency as a world-class destination.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Story;
