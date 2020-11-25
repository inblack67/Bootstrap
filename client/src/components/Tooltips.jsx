import React, { useEffect } from 'react';
import $ from 'jquery';

const Tooltips = () => {
	useEffect(() => {
		$('[data-toggle="tooltip"]').tooltip();
	}, []);

	return (
		<div className='mt-4'>
			<button className='btn btn-dark' data-toggle='tooltip' data-placement='top' title='some tip'>
				Tooltip 1
			</button>
			<button className='btn btn-primary' data-toggle='tooltip' data-placement='top' title='some tip'>
				Tooltip 2
			</button>
			<button className='btn btn-danger' data-toggle='tooltip' data-placement='top' title='some tip'>
				Tooltip 3
			</button>
			<button
				className='btn btn-success'
				data-toggle='tooltip'
				data-placement='top'
				data-html='true'
				title='<h3>h3 tip</h3>'
			>
				Tooltip 4 with html
			</button>
		</div>
	);
};

export default Tooltips;
