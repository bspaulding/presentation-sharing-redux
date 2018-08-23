/* eslint-disable import/no-webpack-loader-syntax */

// Import React
import React from "react";

// Import Spectacle Core tags
import {
	Appear,
	BlockQuote,
	Cite,
	Deck,
	Fill,
	Heading,
	Link,
	ListItem,
	List,
	Notes,
	Quote,
	Slide,
	Text,
	Layout
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
// import 'prism-themes/themes/prism-ghcolors.css';
// import 'prismjs/themes/prism-solarizedlight.css';
import "./prism-atom-one-light.css";
import "normalize.css";
import "./presentation.css";
import Prism from "prismjs";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
import githubMark from "./images/GitHub-Mark-120px-plus.png";
import twitterMark from "./images/Twitter_Logo_Blue.png";

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
		primary: "Nunito",
		secondary: "Fira Code"
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

const SocialMark = ({ image, handle }) => (
	<div
		style={{
			display: "flex",
			flexDirection: "row",
			alignItems: "center"
		}}
	>
		<img src={image} style={{ width: 32, height: 32, marginRight: 16 }} />
		<span style={{ fontSize: 24 }}>{handle}</span>
	</div>
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
							alignItems: "center",
							justifyContent: "center",
							display: "flex",
							width: "100%",
							height: 200
						}}
					>
						<img
							style={{ width: 200, height: 200 }}
							src={require("./images/react-logo.svg")}
						/>
						<span style={{ fontSize: 100 }}>❤️</span>
						<img
							style={{ width: 160, height: 160 }}
							src={require("./images/redux-logo.svg")}
						/>
					</div>
					<Heading size={1} fit caps lineHeight={1} textColor="secondary">
						Universal React Applications with Redux
					</Heading>
					<Text margin="10px 0 100px 0" textColor="tertiary" size={1} fit bold>
						sharing redux between web and mobile apps
					</Text>
				</Slide>
				<Slide textAlign="left">
					<Layout>
						<Fill>
							<Heading>Hello!</Heading>
							<Text textColor="#6F7072">I'm Brad Spaulding</Text>
							<Text textColor="#6F7072" textSize={24}>
								I build things with React and Redux at
							</Text>
							<img src={require("./images/spredfast-logo.png")} />
							<div
								style={{
									flexDirection: "column",
									display: "flex",
									alignItems: "center",
									marginTop: 40
								}}
							>
								<SocialMark image={githubMark} handle="bspaulding" />
								<SocialMark image={twitterMark} handle="bradspaulding" />
							</div>
						</Fill>
						<Fill>
							<img
								style={{ borderRadius: "100%" }}
								src={require("./images/avatar.jpg")}
							/>
						</Fill>
					</Layout>
				</Slide>
				<Slide>
					<Heading size={1} fit caps lineHeight={1}>
						Why this talk?
					</Heading>
					<img
						src={require("./images/ryan-florence-tweet.png")}
						style={{
							width: "70%",
							borderRadius: 12,
							borderWidth: 1,
							borderStyle: "solid",
							borderColor: "black"
						}}
					/>
				</Slide>
				<Slide>
					<img src={require("./images/monkey-love.gif")} />
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
					<Appear>
						<Text>* don't compile async/await</Text>
					</Appear>
				</Slide>
				<Slide padding="0px">
					<CodePane source={require("./rollup-config.example")} />
				</Slide>
				<Slide>
					<Heading fit caps>
						Why Bundle?
					</Heading>
					<Layout>
						<Fill>
							<Text>provides a chance to catch</Text>
						</Fill>
						<Fill>
							<Text>single entry point enforces encapsulation</Text>
						</Fill>
					</Layout>
					<Notes>
						{`
						- controversial, not the standard in RN
						- gives us a chance to catch things
						- single entry point enforces encapsulation
					`}
					</Notes>
				</Slide>
				<Slide>
					<Heading>Issues Bundling: Web Specifics</Heading>
					<Layout>
						<Fill>
							<Text>No window or dom</Text>
						</Fill>
						<Fill>
							<Text>static config</Text>
						</Fill>
					</Layout>
				</Slide>
				<Slide>
					<CodePane source={require("./bundle-entry.example")} />
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
				<Slide>
					<img
						src={require("./images/trap-bride.gif")}
						style={{ width: "100%" }}
					/>
					<Link textSize={14} href="https://gph.is/2dTysxt">
						https://gph.is/2dTysxt
					</Link>
				</Slide>
			</Deck>
		);
	}
}
