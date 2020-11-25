import React, { useEffect } from 'react';
import $ from 'jquery';

const Carousels = () => {
	useEffect(() => {
		$('.carousel').carousel({
			interval: 3000,
			keyboard: true,
			pause: 'hover',
		});
	});

	return (
		<div id='slider1' className='carousel slide' data-ride='carousel'>
			<ol className='carousel-indicators'>
				<li className='active' data-target='#slider1' data-slide-to='0' />
				<li data-target='#slider1' data-slide-to='1' />
				<li data-target='#slider1' data-slide-to='2' />
			</ol>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<img src='https://source.unsplash.com/random?car' alt='unsplash' className='img-fluid' />
				</div>
				<div className='carousel-item'>
					<img src='https://source.unsplash.com/random?bike' alt='unsplash' className='img-fluid' />
				</div>
				<div className='carousel-item'>
					<img src='https://source.unsplash.com/random?phone' alt='unsplash' className='img-fluid' />
				</div>
			</div>
			<a href='slider1' className='carousel-control-prev' data-slide='prev'>
				<span className='carousel-control-prev-icon' />
			</a>
			<a href='slider1' className='carousel-control-next' data-slide='next'>
				<span className='carousel-control-next-icon' />
			</a>
		</div>
	);
};

export default Carousels;
