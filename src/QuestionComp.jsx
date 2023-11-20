import React, { useState } from 'react';

const QuestionComp = ({ title, info, collapseAllHandler }) => {
	const [expandState, setExpandState] = useState(false);
	const expandClickHandler = () => {
		collapseAllHandler;
		setExpandState(!expandState);
	};
	return (
		<article className='question'>
			<header>
				<h5>{title}</h5>
				<button
					className='question-btn'
					onClick={expandClickHandler}>
					{expandState ? '-' : '+'}
				</button>
			</header>
			{expandState && <p>{info}</p>}
		</article>
	);
};

export default QuestionComp;
