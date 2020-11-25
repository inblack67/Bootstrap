import React from 'react';

const Accordians = () => {
	return (
		<div>
			<div className='accordian'>
				<div className='card'>
					<div className='card-body'>
						<a href='item1' className='btn btn-dark' data-toggle='collapse' data-parent='#accordian'>
							Read More
						</a>
					</div>
				</div>
			</div>
			<div className='lead collapse' id='item1'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequatur, sed eveniet tenetur modi
					adipisci delectus iure ad? Mollitia laudantium atque illum quae dicta expedita dolor, nisi earum
					quidem assumenda?
				</p>
			</div>
		</div>
	);
};

export default Accordians;
