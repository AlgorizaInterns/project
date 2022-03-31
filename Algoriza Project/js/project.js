var data = {
    "start": {

    }
}

computed:{
    addProduct(){
        if(this.searchValue.length!=''){
            const resultProduct=this.products.filter(product=>{
                if(product.name.includes(this.searchValue)){
                    return product
                }
            })
            this.searchProducts.push(resultProduct)
            if(this.searchProducts.length>0){
                return this.searchProducts
            }
        }
        else{ return products}
    }

};