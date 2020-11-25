import React from 'react';

const Modals = () => {
	return (
		<div>
			<button className='btn btn-primary' data-toggle='modal' data-target='#modal1'>
				Launch Modal
			</button>
			<div className='modal' id='modal1'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<span className='modal-title'>Modal Title</span>
							<button className='close' data-dismiss='modal'>
								&times;
							</button>
						</div>
						<div className='modal-body'>
							<p className='lead'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime neque officia molestiae
								minima voluptates, eum laborum at soluta sequi voluptatibus optio, autem inventore dolor
								distinctio odit unde minus! Laborum, sit?
							</p>
						</div>
						<div className='modal-footer'>
							<button className='btn btn-danger' data-dismiss='modal'>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modals;
