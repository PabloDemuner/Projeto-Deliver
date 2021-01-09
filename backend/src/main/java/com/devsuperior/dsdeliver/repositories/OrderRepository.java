package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsdeliver.entities.Order;

/*Interface que Faz a implementação padrão para buscar, salvar, deletar e atualizar dados 
 * conforme a entidade qure voce precisar 
 */
public interface OrderRepository extends JpaRepository<Order, Long> {

	//(@Query) Metodo para fazer consultas dos (Pedidos)
	
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products"
	+ " WHERE obj.status = 0 ORDER BY obj.moment ASC")
	List<Order> findOrderWithProduct();
	
}
