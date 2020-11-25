import React from 'react';

const Collapses = () => {
	return (
		<div>
			<button className='btn btn-dark m-4' data-toggle='collapse' data-target='#collapse-target'>
				Collapse
			</button>
			<div className='collapse' id='collapse-target'>
				<p className='lead'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem atque obcaecati natus adipisci fugit
					vero numquam incidunt neque minus ducimus, dignissimos facere ea eius accusantium dolorum
					distinctio! Temporibus, vel possimus.
				</p>
			</div>
		</div>
	);
};

export default Collapses;
