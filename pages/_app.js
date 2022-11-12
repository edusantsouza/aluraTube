import React from "react";
import  {CSSReset}  from "../src/components/CSSReset";
import { ThemeProvider } from "styled-components";
import ColorModeProvider, {ColorModeContext} from "../src/components/Menu/components/ColorMode";

const theme = {
  light: {
      backgroundBase: "#f9f9f9",
      backgroundLevel1: "#ffffff",
      backgroundLevel2: "#f0f0f0",
      borderBase: "#e5e5e5",
      textColorBase: "#222222",
  },
  dark: {
      backgroundBase: "#181818",
      backgroundLevel1: "#202020",
      backgroundLevel2: "#313131",
      borderBase: "#383838",
      textColorBase: "#FFFFFF",
  }
};

function ProviderWrapper(props){
  return (
    <ColorModeProvider initialMode={"dark"}>
          {props.children}
    </ColorModeProvider>

  )
}

//Componente que renderiza o conteúdo da index.js, passando os conteúdos via props
function MyApp({Component, pageProps}){
  const context = React.useContext(ColorModeContext)
  return (
      <ThemeProvider theme={theme[context.mode]}>
        <CSSReset/>
        <Component {...pageProps}/>
      </ThemeProvider>
  )
}

export default function _App(props){
  return(
    <ProviderWrapper>
      <MyApp {...props}/>
    </ProviderWrapper>
  )
}
