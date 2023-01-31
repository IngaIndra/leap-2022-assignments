import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import relateTime from "dayjs/plugin/relativeTime";

import currencyFormatter from "../utils/currencyFormatter";
dayjs.extend(relateTime);

export default function Products() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((res) => {
      setPage(res.data);
    });
  }, []);

  useEffect(() => {
    console.log(page);
  }, [page]);

  if (!page) {
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  const getPaginations = () => {
    let result = [];
    for (let i = 1; i <= page.totalPages; i++) {
      result.push(
        <li className={`page-item ${i === page.page && "active"}`}>
          <a className="page-link" href="#">
            {i}
          </a>
        </li>
      );
    }
    return result;
  };

  return (
    <main>
      <div className="container">
        <div className="row gy-4">
          {page?.items?.map((product) => {
            return (
              <div className="col-sm-4" key={product.id}>
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={product.imageUrl} alt={product.name} />
                  </div>
                  <div className="product-card-desc">
                    <div className="product-card-date">
                      {dayjs(Number(product.createdAt) * 1000).fromNow()}
                    </div>
                    <div className="product-card-name">{product.name}</div>
                    <div className="product-card-price">
                      {currencyFormatter(product.price)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <nav aria-label="..." className="my-4">
            <ul className="pagination pagination-lg justify-content-center">
              <li className={`page-item ${page?.page === 1 && "disabled"}`}>
                <a href="#" className="page-link">
                  Previous
                </a>
              </li>

              {getPaginations()}
              <li
                className={`page-item ${
                  page.page === page.totalPages && "disabled"
                }`}
              >
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
