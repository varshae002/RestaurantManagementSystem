package com.example.restaurantmanagementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.restaurantmanagementsystem.entity.MenuItem;

public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {

}