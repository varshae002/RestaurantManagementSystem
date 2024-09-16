package com.example.restaurantmanagementsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.restaurantmanagementsystem.entity.Order;
import com.example.restaurantmanagementsystem.service.OrderService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/orders")
public class OrderController {

	@Autowired
	private OrderService orderService;

	@GetMapping("")
	public List<Order> getAllOrders() {
		return orderService.getAllOrders();
	}

	 @GetMapping("/{id}")
	    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
	        Order order = orderService.getOrderById(id);
	        return ResponseEntity.ok(order);
	    }

	@PostMapping("")
	public Order createOrder(@RequestBody Order order) {
		return orderService.createOrder(order);
	}

	 @PutMapping("/{id}")
	    public ResponseEntity<Order> updateOrder(@RequestBody Order updatedOrder, @PathVariable Long id) {
	        Order updated = orderService.updateOrder(updatedOrder, id);
	        return ResponseEntity.ok(updated);
	    }

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteOrder(@PathVariable Long id) {
		orderService.deleteOrder(id);
		return ResponseEntity.noContent().build();
	}
}
