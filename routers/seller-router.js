
const express=require('express');
const router=express.Router();
const shopuser = require('../middleware/shop_user_auth');
const shopAuth=require('../middleware/shopauth');

//shop side 

router.get('/ourorders',shopuser,shopAuth,(req,res)=>{
    res.render('ourorders');
  })
  router.post('/category-selling',shopuser,shopAuth,require('../shop-controller/category-selling'))
  router.post('/load-all-shop-products',shopuser,shopAuth,require('../shop-controller/load-all-shop-product'));
  router.post('/add-more-product',require('../shop-controller/add-more-products'));
  router.get('/order-details',shopuser,shopAuth,require('../shop-controller/order-details'))
  router.post('/shop-order',shopuser,shopAuth,require('../shop-controller/shop-order'))
  router.post('/load-single-shop-product',require('../shop-controller/load-single-product'))
  router.post('/product',shopuser,shopAuth,require('../shop-controller/product'));
  router.post('/load-all-products',require('../shop-controller/load-all-products'))
  router.post('/order-success',require('../shop-controller/order-success'))
  router.get('/view-order',(req,res)=>{
      res.render('view-order');
  })
  //viw product//
  router.get('/shop-login',(req,res)=>{
      res.render('shop-login')
  })
  
  router.get('/shop',shopuser,shopAuth,(req,res)=>{
    res.status(200).render('ourorders');
  });
  router.post('/shop',shopuser,require('../shop-controller/shop'));
  router.get('/total-selling',shopuser,shopAuth,(req,res)=>{
  res.render('selling');
  
  });
  router.post('/total-selling',shopuser,shopAuth,require('../shop-controller/total-selling'))
  router.get('/shop-logout',shopuser,require('../shop-controller/shop-logout'));
  
  module.exports=router