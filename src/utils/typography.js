import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
//import FairyGates from "typography-theme-fairy-gates"


Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

/*
FairyGates.overrideThemeStyles = () => {
  return {
    "a .gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}
*/

delete Wordpress2016.googleFonts
//delete FairyGates.googleFonts

const typography = new Typography(Wordpress2016)
//const typography = new Typography(FairyGates)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale