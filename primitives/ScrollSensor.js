import { PureComponent } from 'react';

import { throttle } from '../utils';

export class ScrollSensor extends PureComponent {
	state = { scrollX: 0, scrollY: 0 };

	componentDidMount = () => {
		window.addEventListener('scroll', this.handleScroll);
	};

	componentWillUnmount = () => {
		window.removeEventListener('scroll', this.handleScroll);
	};

	handleScroll = throttle(() => {
		const { scrollX, scrollY } = window;

		this.setState({ scrollX, scrollY });
	});

	render() {
		return this.props.children(this.state);
	}
}
