
const api = {
  product: "http://localhost:8080/product/getAll",
  category: "http://localhost:8080/home/getCate",
  create: "http://localhost:8080/product/save",
  deleteProduct:"http://localhost:8080/product/delete"
}
// const token = "";
// localStorage.setItem("token", "123");
// window.addEventListener("load", () =>{
//   if(localStorage.getItem("token") == "123"){
//     window.location.href="/form.html"
//   }
// })


const product = {
  url: api.product,
  method: 'Get'
};

var doc = document.querySelector(".table_container");
function getProduct() {
  axios(product)
    .then(response => response.data.map
      (function (product) {
        doc.innerHTML +=
          `<tr class = "product-${product.id}">
          <td align="center">
              <a class="btn btn-default" onclick="changeProduct(${product})">
                  <em class="fa fa-pencil"></em>
              </a> 
              <a class="btn btn-danger" onclick="deleteProduct(${product.id})">
                  <em class="fa fa-trash"></em>
              </a>
          </td>
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td>${product.category.name}</td>
          <td>${product.quantity}</td>
          <td>${product.price_in}</td>
          <td>${product.price_out}</td>
          <td>${product.enable}</td>
          <td> <img src="${product.img}"  alt="" style = "width:75px;height:75px"></td>
        </tr>`
      }));
}
getProduct();


let formData = new FormData();
var myform = document.querySelector(".myform");
myform.addEventListener("submit", function () {
  var name =document.querySelector("#name");
  formData.append("name", name.value);

  var category =document.querySelector("#category");
  formData.append("category", category.value);

  var quality =document.querySelector("#quality");
  formData.append("quantity", quality.value);

  var price_in =document.querySelector("#price_in");
  formData.append("price_in", price_in.value);

  var price_out =document.querySelector("#price_out");
  formData.append("price_out", price_out.value);

  var img =document.querySelector("#img");
  createProduct(formData);
  // console.log(formData.get("category"));
   //console.log(formData.get("img"));
})

function getFiles(event) {
  formData.append("pic", event.target.files[0]);
  console.log(formData.get("img"));
}

function createProduct(formData){

  const createProduct = {
    url: api.create,
    method: 'post',
    data:formData
  };

  axios(createProduct)
    .then(response => {
      console.log("success");
    }).catch(error => {
      console.log(error);
    });
}

var btn_add = document.querySelector(".btn_add");
btn_add.addEventListener("click", function () {
  myform.style.display = "block";
})

var btn_cancel = document.querySelector(".btn-cancel");
btn_cancel.addEventListener("click", function(){
  myform.style.display = "none";
})

var categoryDropList = document.querySelector(".category");

function getCate() {
  const category = {
    url: api.category,
    method: 'Get'
  };
  
  axios(category)
    .then(response => response.data.map
      (function (category) {
          categoryDropList.innerHTML+=`
          <option value="${category.id}" >
            ${category.name} 
          </option>
          `
      }));
}
getCate();

function deleteProduct(id){

  const deleteProduct = {
    url: api.deleteProduct+"?id=" + id,
    method: 'Get'
  };

  axios(deleteProduct)
    .then(response => {
      var item = document.querySelector(".product-"+ id);
      //console.log(item);
      //item.remove();
    });
}

function changeProduct(product){
  myform.style.display = "block";
  // let name = document.getElementById("name");
  // name.textContent = product.name;
  // let category = document.getElementById("category");
  // category.textContent = product.category;
  // let quality = document.getElementById("quality");
  // quality.textContent = product.quantity;
  // let price_in = document.getElementById("price_in");
  // price_in.textContent = product.price_in;
  // let price_out = document.getElementById("price_out");
  // price_out.textContent = product.price_out;
  // let img = document.getElementById("img");
  // img.textContent = product.img;
}
