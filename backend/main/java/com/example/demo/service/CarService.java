package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.cars;
import com.example.demo.repository.CarRepository;

@Service
public class CarService {

    @Autowired
    private CarRepository carRepository;
    
    public List<cars> getAllCars() {
        List<cars> cars = new ArrayList<>();
        carRepository.findAll().forEach(cars::add);
        return cars;
    }
    
    public cars getCarById(Integer id) {
        Optional<cars> car = carRepository.findById(id);
        if (car.isPresent()) {
            return car.get();
        } else {
            return null;
        }
    }
    
    public cars createCar(cars car) {
        return carRepository.save(car);
    }
    
    public cars updateCar(Integer id, cars carDetails) {
        Optional<cars> car = carRepository.findById(id);
        if (car.isPresent()) {
            cars updatedCar = car.get();
            updatedCar.setBrand(carDetails.getBrand());
            updatedCar.setType(carDetails.getType());
            updatedCar.setMileage(carDetails.getMileage());
            updatedCar.setColour(carDetails.getColour());
            return carRepository.save(updatedCar);
        } else {
            return null;
        }
    }
    
    public void deleteCar(Integer id) {
        carRepository.deleteById(id);
    }
}

