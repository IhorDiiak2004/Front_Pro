import { createContext } from "react"

export const themes = {
  green: {
    color: 'green',
    backgroundColor: '#808080'
  },
  orange: {
    color: 'orange',
    backgroundColor: '#fff'
  }
}

export const ThemeContext = createContext();