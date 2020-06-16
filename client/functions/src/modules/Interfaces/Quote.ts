class Quote {
    symbolName: string;
    price: number;
    change: number;
    
    constructor() {
        this.symbolName = "";
        this.price = 0;
        this.change = 0;
    }
}

export { Quote }