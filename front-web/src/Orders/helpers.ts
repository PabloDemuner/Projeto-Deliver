/**Função de verificação se o produto esta selecionado ou não */

import { Product } from "./types";

export function checkIsSelected(selectedProducts: Product[], product: Product){
    return  selectedProducts.some(item => item.id === product.id);
}

/*Formatação do preço buscando no BackEnd*/
export function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat(
        'pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
    return formatter.format(price);
}