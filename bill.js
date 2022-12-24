const getBill = {
    url: "http://localhost:8080/bill/getAll",
    method: 'get'
};

var doc = document.querySelector(".table_container");
axios(getBill)
    .then(response=>{
        response.data.map(function(bill){
            doc.innerHTML +=
          `<tr class = "bill-${bill.id}">
          <td align="center">
              <a class="btn btn-default" onclick="changeProduct(${bill})">
                  <em class="fa fa-pencil"></em>
              </a> 
              <a class="btn btn-danger" onclick="deleteProduct(${bill.id})">
                  <em class="fa fa-trash"></em>
              </a>
          </td>
          <td>${bill.id}</td>
          <td>${bill.name}</td>
          <td>${bill.address}</td>
          <td>${bill.phone}</td>
          <td>${bill.createAt}</td>
        </tr>`
        });
    }).catch(e => {
        console.log(e)
    }); 