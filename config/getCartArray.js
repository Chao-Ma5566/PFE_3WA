const getCartItemsArray = async (products, cart) => {
        const data =  await cart.map(item => {
            const product = products.find(p => p.id === item.product_id);
            return {
                id: product.id,
                url: product.url,
                stock: Number(product.stock),
                name: product.name,
                price: product.price,
                quantity: Number(item.quantity),
                caption: product.caption
            };
        });
        return data
    }
    
export default getCartItemsArray