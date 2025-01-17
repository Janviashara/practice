
  //3.URL Builder
//   function buildURL(url, parameters){
//     var qs = "";
//     for(var key in parameters) {
//       var value = parameters[key];
//       qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
//     }
//     if (qs.length > 0){
//       qs = qs.substring(0, qs.length-1); //chop off last "&"
//       url = url + "?" + qs;
//     }
//     return url;
//   }
// console.log(buildURL("https://example.com", {
//   path: "products",
//   params: { category: "books", sort: "price" }
// }));

// function buildURL(url,path,params){
//   let qs = "";
//   for(let key in params){
//     let value = params[key];
//     qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
//   }
//   if(qs.length > 0){
//     qs = qs.substring(0, qs.length-1);
//     url = url + "/" + path + "?" + qs;
//   }
//   return url;
// }
// console.log(buildURL("https://example.com", "products", { category: "books", sort: "price" })); 

// console.log(buildURL("https://example.com", {
//   path: "products",
//   params: { category: "books", sort: "price" }
// }));

// function parseQueryString(queryString){
//   let query = queryString.split('&');
//   let obj = {};
//   for (let i=0; i<query.length;i++){
//         let key = query[i].split('=')[0];
//         let value = query[i].split('=')[1];
//         obj[key]=value;
//       }
//   console.log(obj);
// }
// parseQueryString("search=programming&page=2&sort=asc&hello=hii");

function buildURL(url,params){
  let qs = "";
  for(let key in params){
    let value = params[key];
    qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
  }
  if(qs.length > 0){
    qs = qs.substring(0, qs.length-1);
    url = url + "?" + qs;
  }
  return url;
}
console.log(buildURL("https://example.com", {
  path: "products",
  params: { category: "books", sort: "price" }
}));
