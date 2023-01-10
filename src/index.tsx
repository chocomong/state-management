import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyle } from "./styles/GloblaStyle";
import { darkTheme } from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
