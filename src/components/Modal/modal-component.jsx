import React from 'react';

//Style
import './modal-styles.scss';

//Icon
import iconClose from './../../close.png';

export const Modal = ({ isVisible, setVisible }) => {
	return (
		<div className={isVisible ? 'overlay animated' : 'overlay'}>
			<div className='modal'>
				<div className='modal-header'>
					<h1>Модальне вікно</h1>
					<button onClick={() => setVisible(false)}>
						<img src={iconClose} alt='close' />
					</button>
				</div>
				<div className='img'></div>
			</div>
		</div>
	);
};
