import React from 'react';

const QuestionComp = ({ title, info }) => {
	return (
		<article className='question'>
			<header>
				<h5>{title}</h5>
				<button className='question-btn'>+</button>
			</header>
			<p>{info}</p>
		</article>
	);
};

export default QuestionComp;
