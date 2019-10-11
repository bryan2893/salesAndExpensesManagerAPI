class SALE_DETAIL{
    constructor(invoiceNumber,detailNumber,productCode,productVarietyCode,productName,quantity,price){
        this.invoiceNumber = invoiceNumber;
        this.detailNumber = detailNumber;
        this.productCode = productCode;
        this.productVarietyCode = productVarietyCode;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }
}

module.exports = SALE_DETAIL;