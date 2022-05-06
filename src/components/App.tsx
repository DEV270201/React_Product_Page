import React,{useState} from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { MantineProvider,ColorSchemeProvider,ColorScheme } from "@mantine/core";


const App = () => {
  

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
  <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{colorScheme}}>
      <Navbar />
      <Home />
    </MantineProvider>
  </ColorSchemeProvider>
    </>
  );
}

export default App;

