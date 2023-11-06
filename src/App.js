import "./App.css";
import Calculator from "./components/Calculator";
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
      }}
      >
      <Calculator />
    </div>
      </CssVarsProvider>
  );
}

export default App;
