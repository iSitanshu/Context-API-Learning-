import { useState } from "react";
import { ThemeProvider } from "./Context/Theme";
import { useEffect } from "react";

export default function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
<ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm x-auto flex justify-end mb-4">
        {/* Theme Button */}
        </div>
        {/* Card */}
        <div className="w-full max-w-sm mx-auto">

        </div>
      </div>
    </div>
</ThemeProvider>
  )
}