import REact from 'react';
const QuestionComp = ({ title, info, expandClickHandler, isExpanded }) => {
	return (
		<article className='question'>
			<header>
				<h5>{title}</h5>
				<button
					className='question-btn'
					onClick={expandClickHandler}>
					{isExpanded ? '-' : '+'}
				</button>
			</header>
			<div className={`question-content ${isExpanded ? 'expanded' : ''}`}>
				{isExpanded && <p>{info}</p>}
			</div>
		</article>
	);
};

export default QuestionComp;
