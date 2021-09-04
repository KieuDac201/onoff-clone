import "./App.css";
import Header from "./components/Header";

console.log(process.env.REACT_APP_FIREBASE_API_KEY);
function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
