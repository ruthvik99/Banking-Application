package com.TermProject.Banking.service;

import com.TermProject.Banking.model.customer;
import com.TermProject.Banking.repository.customerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class customerSreviceImp implements customerService{
    @Autowired
    private customerRepository customerRepo;
    @Override
    public customer saveCustomer(customer customer) {
        return customerRepo.save(customer);
    }
    @Override
    public List<customer> getAllCustomers() {
        return customerRepo.findAll();
    }
    @Override
    public customer findById(int ssn) {
        return customerRepo.findById(ssn).orElseThrow(() -> new NoSuchElementException("Customer not found"));
    }

    @Override
    public customer findByUsername(String username) {
        return customerRepo.findByUsername(username);
    }
}
