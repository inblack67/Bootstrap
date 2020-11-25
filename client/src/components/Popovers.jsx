import React, { useEffect } from 'react';
import $ from 'jquery';

const Popovers = () => {
	useEffect(() => {
		$('[data-toggle="popover"]').popover();
	}, []);

	return (
		<div>
			<button
				className='btn btn-danger'
				data-toggle='popover'
				data-placement='left'
				data-content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, placeat!'
				data-trigger='focus' // click anywhere to quit
			>
				Popover
			</button>
			<button
				className='btn btn-dark'
				data-toggle='popover'
				data-placement='top'
				data-content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, placeat!'
			>
				Popover
			</button>
			<button
				className='btn btn-success'
				data-toggle='popover'
				data-placement='right'
				data-content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, placeat!'
			>
				Popover
			</button>
		</div>
	);
};

export default Popovers;
