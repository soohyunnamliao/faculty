import _ from 'lodash';
import React from 'react';
import {Block} from './block';

class Books extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					These are online books I maintain to support my teaching.
				</div>

				{
					_.map(_.filter(this.props.app.getBooks(), book => book.editor), (book, index) =>
						<Block 
							key={"book-" + index}
							image={this.props.app.getWebRoot() + "/images/books/" + book.image}
							alt={book.alt}
							link={book.link}
							header={book.title}
							content={". " + book.description}
						/>
					)
				}

				<div className='lead'>
					These are books I've contributed to.
				</div>

				{
					_.map(_.filter(this.props.app.getBooks(), book => !book.editor), (book, index) =>
						<Block 
							key={"edited-book-" + index}
							image={this.props.app.getWebRoot() + "/images/books/" + book.image}
							alt={book.alt}
							link={book.link}
							header={book.title}
							content={". " + book.description}
						/>
					)
				}

			</div>
		);
	}
}

export {Books}