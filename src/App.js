import { useEffect, useState } from "react";
import { PAGE_SIZE } from "./components/constants";
import Pagination from "./components/Pagination";
import ProductCard from "./components/ProductCard";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };
  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return !products.length ? (
    <h2>No Products found</h2>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      <Pagination
        noOfPages={noOfPages}
        goToPrevPage={goToPrevPage}
        currentPage={currentPage}
        goToNextPage={goToNextPage}
        handlePageChange={handlePageChange}
      />
      <div className="pagination-container">
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </div>
  );
}
