class SALE_INVOICE{
    constructor(invoiceNumber,workerId,date,toCarryOut,pending,clientId,clientName,invoiceDetails){
        this.invoiceNumber = invoiceNumber;
        this.workerId = workerId;
        this.date = date;
        this.toCarryOut = toCarryOut;
        this.pending = pending;//Por ejemplo un cliente puede pedir que no le coloquen tomate a una hamburguesa.
        this.clientId = clientId;
        this.clientName = clientName;
        this.invoiceDetails = invoiceDetails;
    }
}

module.exports = SALE_INVOICE;