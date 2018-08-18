/* eslint-disable import/no-webpack-loader-syntax */

// Import React
import React from "react";

// Import Spectacle Core tags
import {
	BlockQuote,
	Cite,
	Deck,
	Heading,
	ListItem,
	List,
	Quote,
	Slide,
	Text
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
// import 'prism-themes/themes/prism-ghcolors.css';
// import 'prismjs/themes/prism-solarizedlight.css';
import "./prism-atom-one-light.css";
import "normalize.css";
import "./presentation.css";
import Prism from "prismjs";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";

Prism.plugins.NormalizeWhitespace.setDefaults({
	indent: 1,
	"tabs-to-spaces": 2
});

const oneLight = createTheme(
	{
		primary: "hsl(230, 1%, 98%)",
		secondary: "hsl(230, 8%, 24%)",
		tertiary: "hsl(198, 99%, 37%)",
		quartenary: "hsl(5, 74%, 59%)"
	},
	{
		primary: "Fira Code",
		secondary: "Helvetica"
	}
);

const theme = oneLight;

const CodePane = ({ language = "javascript", source }) => (
	<pre className={`language-${language}`}>
		<code
			className={`language-${language}`}
			style={{ fontFamily: "Fira Code" }}
			dangerouslySetInnerHTML={{
				__html: Prism.highlight(source, Prism.languages[language], language)
			}}
		/>
	</pre>
);

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck transition={["fade"]} transitionDuration={300} theme={theme}>
				<Slide
					transition={["zoom"]}
					bgColor="primary"
					progressColor="quartenary"
				>
					<div
						style={{
							flexDirection: "row",
							display: "flex",
							width: 150,
							height: 100
						}}
					>
						<img src={require("./images/react-logo.svg")} />
						<span style={{ textSize: 50 }}>❤️</span>
						<img src={require("./images/redux-logo.svg")} />
					</div>
					<Heading size={1} fit caps lineHeight={1} textColor="secondary">
						Universal React Applications with Redux
					</Heading>
					<Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
						sharing redux between web and mobile apps
					</Text>
				</Slide>
				<Slide>
					<img
						style={{ width: "100%" }}
						src={require("./images/Team Org.png")}
					/>
				</Slide>
				<Slide>
					<img
						style={{ width: "100%" }}
						src={require("./images/Team Org 2.png")}
					/>
				</Slide>
				<Slide>
					<img
						style={{ width: "100%" }}
						src={require("./images/Bundling.png")}
					/>
				</Slide>
				<Slide>
					<CodePane source={require("./bundle-import-reducers.example")} />
				</Slide>
				<Slide>
					<CodePane source={require("./bundle-import-container.example")} />
				</Slide>
				<Slide>
					<CodePane source={require("./bundle-import-container-2.example")} />
				</Slide>
				<Slide>
					<CodePane source={require("./bundle-import-container-3.example")} />
				</Slide>
			</Deck>
		);
	}
}
