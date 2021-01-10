/**Cards dos produtos */

import { formatPrice } from './helpers';
import { Product } from './types';

type Props = {
    product: Product;
    onSelectProduct: (product: Product) => void;
    isSelected: boolean;
}

function ProductCard({ product, onSelectProduct, isSelected }: Props) {
    return (
        //Div que chama função do click em um pedido.
        //Essa função é uma Porps
        <div
            className={`order-card-container ${isSelected ? 'selected' :``}`}
            onClick={() => onSelectProduct(product)}
        >
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img src={product.imageUri} className="order-card-image" alt={product.name} />
            <h3 className="order-card-price">
                {formatPrice(product.price)}
            </h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
                <p>
                    {product.description}
                </p>
            </div>
        </div >
    )
}
export default ProductCard;