const webFooterDocumnet=require('../modals/websitemodal')


module.exports=async(req,res)=>{
    try{
        let aboutus=req.body.about
        let office=req.body.office
        let contact=req.body.contact
        let address=req.body.address
        let links=req.body.links
        let footer=new webFooterDocumnet({
           
            aboutus,
            office,
            contact,
            address,
            links
            
        })
       let footerSave =await footer.save()
        console.log(footerSave)
       
    }catch(err){

    }
}