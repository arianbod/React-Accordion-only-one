import React from 'react';
import data from './data.js';
import Question from './QuestionComp';

const App = () => {
	const collapseAllHandler = () => {};
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
								collapseAllHandler={collapseAllHandler}
							/>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
};

export default App;
