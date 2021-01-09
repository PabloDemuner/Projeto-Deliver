package com.devsuperior.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdeliver.entities.Order;

/*Interface que Faz a implementação padrão para buscar, salvar, deletar e atualizar dados 
 * conforme a entidade qure voce precisar 
 */
public interface OrderRepository extends JpaRepository<Order, Long> {

}
