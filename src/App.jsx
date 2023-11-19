import React from 'react';
import data from './data.js';
import Question from './QuestionComp';

const App = () => {
	return (
		<main>
			<h1>Questions</h1>
			<ul>
				{data.map(({ id, title, info }) => (
					<li key={id}>
						<Question
							title={title}
							info={info}
						/>
					</li>
				))}
			</ul>
		</main>
	);
};

export default App;
