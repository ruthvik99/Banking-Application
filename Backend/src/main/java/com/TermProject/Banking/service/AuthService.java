package com.TermProject.Banking.service;

import com.TermProject.Banking.model.customer;
import com.TermProject.Banking.repository.customerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private customerRepository customerRepository;

    public void registerCustomer(customer customer) {
        customerRepository.save(customer); //saving user in database
    }
}
