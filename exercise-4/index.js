const express = require('express')
const app = express()
const bodyparser = require('body-parser');
const { json } = require('body-parser');
const port = 3000

app.use(bodyparser.json());

let idCount=1;

let product=[{
    id:idCount,
    name:'Battery',
    manufacturer:'Nokia',
    category:'Electronics',
    description:'12 ma/h',
    price: 7.50
},
{
    id:++idCount,
    name:'Pen',
    manufacturer:'Tree',
    category:'Office supplies',
    description:'B12',
    price: 2.99
}]

let userId=1;

let user=[{
    id:userId,
    name:'Pekka Koppi',
    address:'Suurtie 4',
    phone: 123456789,
    email:'test@mail.com'
}]

let invoiceId=1;
let total=0;
let allProducts=[product[0]];

let invoices=[{
    id:invoiceId,
    userid:user[0].id,
    product:allProducts,
    total:total+=product[0].price
}]

app.post('/product',(req,res)=>{
    product.push({
        id:++idCount,
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        category:req.body.category,
        description:req.body.description,
        price:req.body.price
    });
    res.send("product added");
});

app.get('/product',(req,res)=>{
    //get all products
    res.json(product);
});

app.get('/product/:id',(req,res)=>{
    //get product by id
    res.json(product.find(d=>d.id==req.params.id));
});

app.put('/product/:id',(req,res)=>{
    //update product
    let i=product.findIndex(d=>d.id==req.params.id)
    product[i]={
        id:req.params.id,
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        category:req.body.category,
        description:req.body.description,
        price:req.body.price
    }
    res.send("product with id:"+req.params.id+" modified")
});

app.get('/product/other/:name',(req,res)=>{
    //search product by name,category,manufacturer
    res.json(product.filter(d=>d.name.includes(req.params.name)||d.category.includes(req.params.name)
    || d.manufacturer.includes(req.params.name)))
});

app.post('/user',(req,res)=>{
    //create user
    user.push({
        id:++userId,
        name:req.body.name,
        address:req.body.address,
        phone:req.body.phone,
        email:req.body.email
    })
    res.send("new user created")
});

app.get('/user',(req,res)=>{
    res.json(user)
})

app.post('/invoice/:user',(req,res)=>{
    //create invoice for user
    total=0;
    allProducts=[];
    for(let i=0;i<req.body.id.length;i++){
        total=total+product[product.findIndex(d=>d.id==req.body.id[i])].price
        console.log(req.body.id[i])
    }
    for(let i=0;i<req.body.id.length;i++){
        allProducts[i]=product[product.findIndex(d=>d.id==req.body.id[i])]
        console.log(allProducts[i])
    }
    invoices.push({
        id:++invoiceId,
        userid:req.params.user,
        product:allProducts,
        total:total
    })
    console.log(req.body.id.length)
    res.send("new invoice created")
});

app.get('/invoice/user/:id',(req,res)=>{
    //get user invoices
    res.json(invoices.filter(d=>d.userid==req.params.id))
});

app.get('/invoice/:user/:id',(req,res)=>{
    //get single user invoice
    res.json(invoices.find(s=>s.userid==req.params.user && s.id==req.params.id))
});

app.delete('/invoice/:user/:id',(req,res)=>{
    invoices.splice(invoices.findIndex(d=>d.userid==req.params.user && d.id==req.params.id),1)
    res.send("invoice deleted")
});

app.listen(port,()=>{
    console.log("app listening at http://localhost:${port}")
})