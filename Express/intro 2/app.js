const express = require("express");

const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());

const port = 8000;

let categories = JSON.parse(fs.readFileSync("categoryData.json", "utf-8"));
let nextCatId = categories.length;

const updateCategories = () => {
  fs.writeFileSync("categoryData.json", JSON.stringify(categories));
};

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.get("/categories/:id", (req, res) => {
  const { id } = req.params;
  let category = null;

  for (const row of categories) {
    if (id == row.id) {
      category = row;
      break;
    }
  }

  res.json(category);
});

app.delete("/categories/:id", (req, res) => {
  const { id } = req.params;
  categories = categories.filter((row) => row.id !== id);
  updateCategories;
  res.json(id);
});

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app.post("/categories", jsonParser, (req, res) => {
  const { name } = req.body;
  const newCategory = { id: nextCatId++, name };
  categories.push(newCategory);
  res.json(newCategory);
});

app.put("/categories/:id", jsonParser, (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  let updatedCat;
  categories = categories.map((row) => {
    console.log("aaa");
    if (row.id === Number(id)) {
      updatedCat = { id: Number(id), name };
      return updatedCat;
    }
    return row;
  });
  updateCategoriesFile();
  res.json(updatedCat);
});

app.get("generateNumbers", (req, res) => {
  let result = "";
  for (let i = 0; i < 10000; i++) {
    let n = "";
    if (i < 1000) {
      n += "0";
    }
    if (i < 100) {
      n += "0";
    }
    if (i < 10) {
      n += "0";
    }
    n += i;
    result += "9911${n}\n";
  }
  fs.writeFileSync("phones.txt", result);
  res.json("Done");
});

let products = JSON.parse(fs.readFileSync("MOCK_DATA.json", "utf-8"));

app.get("/products", (req, res) => {
  let { pageSize, page, priceTo, priceFrom, q } = req.query;
  pageSize = Number(pageSize) || 10;
  page = Number(page) || 1;
  let start, end;

  start = (page - 1) * pageSize;
  end = page * pageSize;

  const items = products.slice(start, end);

  res.json({
    total: products.length,
    totalPages: Math.ceil(products.length / pageSize),
    page,
    pageSize,
    items,
  });
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
