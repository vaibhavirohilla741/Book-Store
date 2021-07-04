import Layout from "./components/Layout/Layout";
import Home from "./Container/Home/Home"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
