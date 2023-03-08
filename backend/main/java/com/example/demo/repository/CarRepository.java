package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.cars;

public interface CarRepository extends JpaRepository<cars,Integer>{

}
