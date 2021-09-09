import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}
	html {
		box-sizing: border-box;
		@media only screen and (max-width: $bp-largest) {
		font-size: 50%;
	}
	}
	body {
		font-family: 'Poppins';
	}
`
