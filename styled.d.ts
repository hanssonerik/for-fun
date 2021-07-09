import 'styled-components'
interface IPalette {
  main: string
  variant: string
  contrastText: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      background: IPalette
      surface: IPalette
      error: IPalette
      primary: IPalette
      secondary: IPalette
    }
  }
}
