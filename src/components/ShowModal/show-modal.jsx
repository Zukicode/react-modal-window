import React from 'react';

//Style
import './show-modal-styles.scss';

export const ShowModal = ({ setVisible }) => {
	return (
		<button onClick={() => setVisible(true)} className='show-modal'>
			<span>⬛️</span>
			Відкрити вікно
		</button>
	);
};
