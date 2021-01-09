package com.devsuperior.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.OrderDTO;
import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.repositories.OrderRepository;

//(@Service)Componente de injeção de dependencia no controlador

@Service
public class OrderService {

	// (@Autowired) Faz a resolução da dependencia de forma transparente
	@Autowired
	private OrderRepository repository;

	// Injeção de dependencia desacoplada (OPCIONAL)
	/*
	 * public ProductService(ProductRepository repository) { this.repository =
	 * repository; }
	 */

	// @Transactional(readOnly = true)Operação de transação(somente leitura)

	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrderWithProduct();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}

}
