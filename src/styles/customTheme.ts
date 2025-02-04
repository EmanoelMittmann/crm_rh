import { extendTheme } from '@stardust-ds/react'

type DynamicSchemeColors = {
  color: {
    bg: string
    text: string
  }
}

export const theme = extendTheme({
  color: {
    lightBlue: '#00AAFF',
    negative: {
      transparent: '#FF3541'
    },
    positive: {
      transparent: '#1ECB4F26'
    },
    black: {
      transparent: '#00000040'
    }
  }
})

export const colors = theme.brand.color

export type Theme = typeof theme & {
  brand: DynamicSchemeColors
}

export enum COLOR_SCHEME {
  LIGHT = 'light',
  DARK = 'dark'
}

export type Scheme = 'light' | 'dark'

export const modes: Record<Scheme, DynamicSchemeColors> = {
  light: { color: { bg: '#FFF', text: '#000' } },
  dark: { color: { bg: '#22272D', text: '#fff' } }
}

export const preferredMode = window?.matchMedia(
  '(prefers-color-scheme: light)'
)?.matches
  ? 'dark'
  : 'light'

export function getTheme(scheme: Scheme) {
  const deepStringifyClone = JSON.stringify(
    extendTheme(modes[scheme])
  )
  const deepParseClone = JSON.parse(deepStringifyClone)

  return deepParseClone
}
