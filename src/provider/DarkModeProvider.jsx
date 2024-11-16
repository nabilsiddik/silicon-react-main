import React, { createContext, useState } from 'react'

export const darkModeContext = createContext(null)

const DarkModeProvider = ({children}) => {

    const [isDarkModeOn, setIsDarkModeOn] = useState(false)
    
    const onChecked = () => {
      setIsDarkModeOn(!isDarkModeOn)
    }
    
    const contextValue = {
        isDarkModeOn,
        setIsDarkModeOn,
        onChecked
    }

  return (
    <darkModeContext.Provider value={contextValue}>
        {children}
    </darkModeContext.Provider>
  )
}

export default DarkModeProvider
