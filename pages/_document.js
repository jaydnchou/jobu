import { extractCritical } from 'emotion-server';

import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const page = ctx.renderPage();
		const styles = extractCritical(page.html);
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps, ...styles };
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<meta name="theme-color" content="#000000" />
					<link rel="stylesheet" href="/css/reset.css" />
					<link
						href="https://fonts.googleapis.com/css?family=Montserrat:200,400,800&display=swap"
						rel="stylesheet"
					/>
					<style dangerouslySetInnerHTML={{ __html: this.props.css }} />
				</Head>
				<body className="custom_class">
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
