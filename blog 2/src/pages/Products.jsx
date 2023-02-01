import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import currencyFormatter from "../utils/currencyFormatter";

import relateTime from "dayjs/plugin/relativeTime";
import { Link, useLocation } from "react-router-dom";
dayjs.extend(relateTime);

export default function Products() {
  const [page, setPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const location = useLocation();

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/products?pageSize=${pageSize}&page=${currentPage}`
      )
      .then((res) => {
        setPage(res.data);
      });
  }, [currentPage, pageSize]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has("page")) {
      setCurrentPage(Number(searchParams.get("page")));
    }
    if (searchParams.has("pageSize")) {
      setPageSize(Number(searchParams.get("pageSize")));
    }
  }, [location]);

  if (!page) {
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  const getPaginations = () => {
    let result = [];
    //adding first page
    result.push(
      <li className={`page-item ${1 === page.page && "active"}`}>
        <a className="page-link" href="#">
          1
        </a>
      </li>
    );
    //front triple dots
    if (page.page - 2 > 0) {
      result.push(
        <li className={`page-item`}>
          <span className="page-link">...</span>
        </li>
      );
    }
    //adding current page
    if (page.page !== 1 && page.page !== page.totalPages) {
      result.push(
        <>
          {currentPage === 2 ? (
            <></>
          ) : (
            <li className={`page-item `}>
              <a className="page-link" href="#">
                {page.page - 1}
              </a>
            </li>
          )}
          <li className={`page-item active`}>
            <a className="page-link" href="#">
              {page.page}
            </a>
          </li>{" "}
          {currentPage === page.totalPages - 1 ? (
            <></>
          ) : (
            <li className={`page-item `}>
              <a className="page-link" href="#">
                {page.page + 1}
              </a>
            </li>
          )}
        </>
      );
    }
    //how many pages after current page
    if (page.page === 1) {
      result.push(
        <li className={`page-item`}>
          <span className="page-link">2</span>
        </li>
      );
    }
    //how many pages before current page
    if (page.page === pageSize) {
      result.push(
        <li className={`page-item`}>
          <span className="page-link">{page.totalPages - 1}</span>
        </li>
      );
    }

    //back triple dots
    if (page.totalPages - 2 >= page.page) {
      result.push(
        <li className={`page-item`}>
          <span className="page-link">...</span>
        </li>
      );
    }

    //adding last page
    result.push(
      <li className={`page-item ${page.totalPages === page.page && "active"}`}>
        <a className="page-link" href="#">
          {page.totalPages}
        </a>
      </li>
    );
    return result;
  };

  return (
    <main>
      <div className="container">
        <div className="d-flex justify-content-end mb-4">
          <label>
            Хуудаслалт &nbsp;
            <select>
              <option value={10}>10</option>
              <option value={10}>20</option>
              <option value={10}>30</option>
              <option value={10}>50</option>
              <option value={10}>100</option>
            </select>
          </label>
        </div>
        <div className="row gy-4">
          {page.items.map((product) => {
            return (
              <div className="col-sm-3" key={product.id}>
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
                <Link
                  to={`/products?pageSize=${pageSize}&page=${currentPage - 1}`}
                  className="page-link"
                >
                  Previous
                </Link>
              </li>
              {getPaginations()}
              <li
                className={`page-item ${
                  page.page === page.totalPages && "disabled"
                }`}
              >
                <Link
                  to={`/products?pageSize=${pageSize}&page=${currentPage + 1}`}
                  className="page-link"
                >
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
