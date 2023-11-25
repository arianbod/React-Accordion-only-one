import React, { useState } from 'react';
import data from './data.js';
import Question from './QuestionComp';

const App = () => {
	const [expandedQuestion, setExpandedQuestion] = useState(null);
	const handleOnToggle = (id) => {
		setExpandedQuestion(expandedQuestion != id ? id : null);
	};
	return (
		<main>
			<section className='container'>
				<h1>Questions</h1>
				<ul>
					{data.map(({ id, title, info }) => (
						<li key={id}>
							<Question
								title={title}
								info={info}
								isExpanded={expandedQuestion === id}
								expandClickHandler={() => handleOnToggle(id)}
							/>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
};

export default App;
