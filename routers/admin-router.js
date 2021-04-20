const express=require('express');
const router=express.Router();
const adminauth=require('../middleware/adminauth')

router.get('/admin-login',(req,res)=>{
    res.render('admin-login');
})
router.get('/admin',adminauth,(req,res)=>{
    res.render('admin-index');
})
router.get('/add-products',adminauth,(req,res)=>{
    res.render('add-product');
})
router.get('/add-admin',(req,res)=>{
    res.render('add-admin');
});
router.get('/users',adminauth,(req,res)=>{
    res.render('users');
})
router.get('/load-admin-product',adminauth,(req,res)=>{
    res.render('admin-index')
})
router.post('/users',require('../admin-controller/show-users'))
router.post('/products',require('../admin-controller/show-product'))
router.post('/admin-login',require('../admin-controller/admin-login'));
router.post('/admin-details',require('../admin-controller/add-admin'));
router.post('/admin-product',require('../admin-controller/add-product'));
router.post('/show-products',require('../admin-controller/show-product'));
router.get('/edit-product',require('../admin-controller/edit-product'))
router.post('/updated-product',require('../admin-controller/update-product'))
router.post('/delete-products',require('../admin-controller/delete-product'))
router.post('/search-product',require('../admin-controller/search-product'));
router.get('/admin-logout',require('../admin-controller/admin-logout'));
router.post('/add-category',require('../admin-controller/add-category'));
router.post('/load-all-category',require('../admin-controller/load-category'));
router.post('/delete-category',require('../admin-controller/delete-category'));
router.post('/delete-sub-category',require('../admin-controller/delete-sub-category'));
router.post('/edit-category',require('../admin-controller/edit-category'));
router.post('/update-category',require('../admin-controller/update-category'));
router.post('/update-sub-category',require('../admin-controller/update-sub-category'))
router.post('/add-sliderimg',require('../admin-controller/sliderimg'))
router.post('/load-slider-img',require('../admin-controller/load-slider-img'))
router.get('/sub-category',adminauth,(req,res)=>{
     res.render('add-sub-category');
})
router.post('/sub-category',require('../admin-controller/add-sub-category'));
router.get('/category',adminauth,(req,res)=>{
    res.render('add-category');
})
router.post('/load-sub-category',require('../admin-controller/load-sub-category'))
router.get('/add-slider-img',adminauth,(req,res)=>{
    res.render('update-slider')
})
router.post('/load-single-sub-category',require('../admin-controller/load-single-sub-category'))
router.post('/search-category',require('../admin-controller/search-category'))



router.get('/order-done',(req,res)=>{
   
    res.render('order-done');
})


module.exports=router