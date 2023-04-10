import React, { useState } from 'react';

//Component
import { Modal } from '../Modal';
import { ShowModal } from '../ShowModal';

export const App = () => {
	const [isVisible, setVisible] = useState(false);

	return (
		<div className='app-content'>
			{!isVisible && <ShowModal setVisible={setVisible} />}
			<Modal isVisible={isVisible} setVisible={setVisible} />
		</div>
	);
};
