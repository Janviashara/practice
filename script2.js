// 2. Generate Query String from Object

  function parseQueryString(queryString){
    let query = queryString.split('&');
    let obje ={};
    for (let i=0; i<query.length;i++){
      let key = query[i].split('=')[0];
      let value = query[i].split('=')[1];
      obje[key]=value;
    }

    console.log(obje);
  }
  parseQueryString("?search=programming&page=2&sort=asc&hello=hii");