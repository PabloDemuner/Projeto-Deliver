
/**useEffect acessa o tempo de vida útil dos componentes */

import './styles.css';
import { toast, Toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { fetchProducts, saveOrder } from '../api';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import { OrderLocationData, Product, OrderPayload } from './types';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';


function Orders() {

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  //Calculo da soma dos produtos e seus respctivios preços
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(() => { toast.warning('Erro ao listar pedido');})},[]);
  //Função do Click em um Card que verifica se o card ja foi selecionado ou não
  //Pelo menos um Item.
  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

    const handleSubmit = () => {
    const productsIds = selectedProducts.map (({id}) => ({id}));
    const payload ={...orderLocation!, products: productsIds};

    /*function App(){
      const notify = () => toast("Wow so easy !");
  
      return (
        <div>
          <button onClick={notify}>Notify !</button>
          <ToastContainer />
        </div>
      );
    }*/

    saveOrder (payload).then((response) => {
      toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
      setSelectedProducts([]);
    })
      .catch(() => {
        toast.warning('Erro ao enviar pedido');
      })
  }
  

  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <ProductsList
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts} />
        <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        <OrderSummary amount={selectedProducts.length} totalPrice={totalPrice} 
        onSubmit= {handleSubmit} />
      </div>
      <Footer />
    </>
  )
}
export default Orders;