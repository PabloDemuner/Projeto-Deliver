package com.devsuperior.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

//(@Service)Componente de injeção de dependencia no controlador

@Service
public class ProductService {

	// (@Autowired) Faz a resolução da dependencia de forma transparente
	@Autowired
	private ProductRepository repository;

	// Injeção de dependencia desacoplada (OPCIONAL)
	/*
	 * public ProductService(ProductRepository repository) { this.repository =
	 * repository; }
	 */

	// @Transactional(readOnly = true)Operação de transação(somente leitura)

	@Transactional(readOnly = true)
	public List<ProductDTO> findAll() {

		List<Product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}

}
