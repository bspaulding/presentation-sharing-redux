/* eslint-disable import/no-webpack-loader-syntax */

// Import React
import React from 'react';

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
  Text,
} from 'spectacle';
// import 'prism-themes/themes/prism-ghcolors.css';
// import 'prismjs/themes/prism-solarizedlight.css';
import './prism-atom-one-light.css';
import './presentation.css';
import Prism from 'prismjs';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const oneLight = createTheme(
  {
    primary: 'hsl(230, 1%, 98%)',
    secondary: 'hsl(230, 8%, 24%)',
    tertiary: 'hsl(198, 99%, 37%)',
    quartenary: 'hsl(5, 74%, 59%)',
  },
  {
    primary: 'Fira Code',
    secondary: 'Helvetica',
  }
);

const theme = oneLight;

const CodePane = ({ language = "javascript", source }) =>
	<pre className={`language-${language}`}>
		<code className={`language-${language}`} style={{fontFamily: "Fira Code" }} dangerouslySetInnerHTML=
			{{ __html: Prism.highlight(source, Prism.languages[language], language)}}
		/>
	</pre>

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
				<Slide>
					<CodePane source={require('raw-loader!./code-test.example')} />
				</Slide>
        <Slide transition={['zoom']} bgColor="primary" progressColor="quartenary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary" progressColor="quartenary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
