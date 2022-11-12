import React from "react";

export const ColorModeContext = React.createContext(
{ 
  mode:'',
  setMode: () => { alert("Você precisa definir o tema antes!") },
  toggleMode: () =>{ alert("Você precisa definir o tema antes!") }
  }
)

export default function ColorModeProvider(props){
  const [mode, setMode] = React.useState(props.initialMode)
  const realToggleMode = () => {
    if(mode === "dark")  setMode("light")
    if(mode === "light")  setMode("dark")
}
  return(
    <ColorModeContext.Provider value={{mode:mode, setMode:setMode, toggleMode:realToggleMode  }}>
      {props.children}
    </ColorModeContext.Provider>
  )
}