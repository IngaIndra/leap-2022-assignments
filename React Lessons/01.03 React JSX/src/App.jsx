import "./App.css";
import data from "./data.json";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <Header />
      <main className="mt-3">
        <div className="container-sm">
          <div className="row g-3">
            {data.products.map((product, index) => (
              <div className="col-sm-3" key={index}>
                {ProductCard(product)}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
