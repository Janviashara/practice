
  //3.URL Builder
 function buildURL(url, { path, params }) {
  let queryString = 
 }
 buildURL("https://example.com", {
  path: "products",
  params: { category: "books", sort: "price" }
});