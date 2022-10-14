import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	@media (max-width: 992px) {
		html {
			font-size: 93.75%;
		}
	}
	
	@media (max-width: 768px) {

		html {
			font-size: 87.5%;
		}
	}

	body, button, input, textarea {
		background: ${(props) => props.theme.background};
		font-family: 'Montserrat', sans-serif;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	button {
		cursor: pointer;
	}
`
