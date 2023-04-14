import { createGlobalStyle } from 'styled-components'

import { Theme } from './customTheme'

interface ITheme {
  theme: Theme
}

export const GlobalStyles = createGlobalStyle<ITheme>`
    * {
		margin: 0;
        outline: 0;
		padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${(props) => props.theme.brand.color.bg};
    }
`
