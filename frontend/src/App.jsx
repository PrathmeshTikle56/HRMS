import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/hello`)
      .then((res) => res.text())
      .then((data) => console.log(data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-10">HRMS Dashboard</h1>
      <p className="text-center">Check the console for API response</p>
    </>
  );
}

export default App;
