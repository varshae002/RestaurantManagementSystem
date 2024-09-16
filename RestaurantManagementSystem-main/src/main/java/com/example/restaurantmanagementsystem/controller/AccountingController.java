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

import com.example.restaurantmanagementsystem.entity.Accounting;
import com.example.restaurantmanagementsystem.service.AccountingService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/accounting")
public class AccountingController {

	@Autowired
	private AccountingService accountingService;

	@GetMapping("")
	public List<Accounting> getAllAccounting() {
		return accountingService.getAllAccounting();
	}

	@GetMapping("/{id}")
	public Accounting getAccountingById(@PathVariable Long id) {
		return accountingService.getAccountingById(id);
	}

	@PostMapping("")
	public Accounting createAccounting(@RequestBody Accounting accounting) {
		return accountingService.createAccounting(accounting);
	}

	@PutMapping("/{id}")
	public Accounting updateAccounting(@PathVariable Long id, @RequestBody Accounting accounting) {
		return accountingService.updateAccounting(id, accounting);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteAccounting(@PathVariable Long id) {
		return accountingService.deleteAccounting(id);
	}
}
