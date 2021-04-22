const PDFGenerator = require('pdfkit')
const fs = require('fs')
const path=require('path')

class InvoiceGenerator {
    constructor(invoice) {
        this.invoice = invoice
    }

    generateHeaders(doc) {
         const billingAddress = this.invoice.addresses.billing
        doc 
        .text(`INVOICE`,100,30,{align: 'center',color:'red'})
        doc
          
            .fillColor('#000')
            
            
            .text(`${this.invoice.shopname}`,50,50,{align: 'left'})
            .fontSize(10)
            .text(`${this.invoice.shopaddress}`,{align: 'left'})
            .text(`${this.invoice.shopcity},${this.invoice.shopstate}\n${this.invoice.shopcode}`,{align: 'left'})
            .text(`${this.invoice.shopmobile}`,{align: 'left'})
       
            .text('INVOICE', 275, 50, {align: 'right'})
            .fontSize(10)
            .text(`Invoice Number: ${this.invoice.invoiceNumber}`, {align: 'right'})
            .text(`Due: ${this.invoice.dueDate}`, {align: 'right'})
            .moveDown()
            .text(`Billing Address:\n ${billingAddress.name}\n${billingAddress.address}\n${billingAddress.city}\n${billingAddress.state}, ${billingAddress.postalCode}`, {align: 'right'})
    
        const beginningOfPage = 50
        const endOfPage = 550
    
        doc.moveTo(beginningOfPage,40)
            .lineTo(endOfPage,40)
            .stroke()


        doc.moveTo(beginningOfPage,200)
            .lineTo(endOfPage,200)
            .stroke()

        doc.moveTo(beginningOfPage,200)
            .lineTo(endOfPage,200)
            .stroke()
                

        doc.moveTo(beginningOfPage,250)
            .lineTo(endOfPage,250)
            .stroke()

    }

    generateTable(doc) {
        const tableTop = 270
        const itemCodeX=50
        const descriptionX = 120
        const dateX = 280
        const quantityX = 400
        // const gstX=450
        const amountX = 500
      

        doc
            .fontSize(10)
            .text('Sr no', itemCodeX, tableTop, {bold: true})
            .text('Order Date',dateX,tableTop)
            .text('Product name', descriptionX, tableTop)
            .text('Quantity', quantityX, tableTop)
       
            .text('Amount', amountX, tableTop)

        const items = this.invoice.items
        let i = 0


        for (i = 0; i < items.length; i++) {
            const item = items[i]
            const y = tableTop + 25 + (i * 25)

            doc
                .fontSize(10)
                .text(i+1,itemCodeX, y)
                .text(item.description, descriptionX, y)
                .text(item.quantity, quantityX, y)
                .text(`Rs. ${item.amount}`, amountX, y)
             
                .text(item.date,dateX,y)
        }
    }

    generateFooter(doc) {
        doc
            .fontSize(10)
            .text(`Payment due upon receipt. `, 50, 700, {
                align: 'center'
            })
    }

    generate() {
        let theOutput = new PDFGenerator 

        

        const fileName = `Invoice ${this.invoice.addresses.shipping.name}${this.invoice.addresses.shipping.postalCode}.pdf`

        // pipe to a writable stream which would save the result into the same directory
        theOutput.pipe(fs.createWriteStream(fileName))

        this.generateHeaders(theOutput)

        theOutput.moveDown()

        this.generateTable(theOutput)

        this.generateFooter(theOutput)
        

        // write out file
        theOutput.end()
       return fileName
     
    }
}

module.exports = InvoiceGenerator

