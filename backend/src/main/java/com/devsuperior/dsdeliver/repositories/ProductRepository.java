package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdeliver.entities.Product;

/*Interface que Faz a implementação padrão para buscar, salvar, deletar e atualizar dados 
 * conforme a entidade qure voce precisar 
 */
public interface ProductRepository extends JpaRepository<Product, Long> {
	
	List<Product> findAllByOrderByNameAsc();

}
