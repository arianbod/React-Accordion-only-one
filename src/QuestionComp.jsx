import React, { useState } from 'react';

const QuestionComp = ({ title, info }) => {
	const [expandState, setExpandState] = useState(false);
	const expandClickHandler = () => {
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
			<div className={`question-content ${expandState ? 'expanded' : ''}`}>
				{expandState && <p>{info}</p>}
			</div>
		</article>
	);
};

export default QuestionComp;
