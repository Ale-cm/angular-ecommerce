export class Product {

    constructor(

        public sku: string = sku,
        public name: string = name,
        public description: string = description,
        public unitPrice: number = unitPrice,
        public imageUrl: string = imageUrl,
        public active: boolean = active,
        public unitsInStock: number= unitsInStock,
        public dateCreated: Date = dateCreated,
        public lastUpdated: Date = lastUpdated

    ) { }

}
