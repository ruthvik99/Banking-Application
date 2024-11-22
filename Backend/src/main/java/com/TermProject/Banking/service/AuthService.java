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

    // Authentication method (login)
    public boolean authenticateUser(String username, String password) {
        // Find the customer by username
        customer existingCustomer = customerRepository.findByUsername(username);

        if (existingCustomer != null && existingCustomer.getPassword().equals(password)) {
            return true;  // Password matches
        } else {
            return false;  // Invalid credentials
        }
    }
}
