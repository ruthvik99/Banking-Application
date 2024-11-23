package com.TermProject.Banking.service;

import com.TermProject.Banking.model.customer;
import com.TermProject.Banking.repository.customerRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import javax.crypto.SecretKey;

import java.util.Date;

@Service
public class AuthService {

    private final customerRepository customerRepository;
    private final SecretKey secretKey;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AuthService(customerRepository customerRepository, SecretKey secretKey, PasswordEncoder passwordEncoder) {
        this.customerRepository = customerRepository;
        this.secretKey = secretKey;
        this.passwordEncoder = passwordEncoder; // Injected from the configuration
    }

    // Register a new customer
    public void registerCustomer(customer customer) {
        // Hash the password before saving
        String hashedPassword = passwordEncoder.encode(customer.getPassword());
        customer.setPassword(hashedPassword);

        // Save the customer to the database
        customerRepository.save(customer);
    }

    // Authenticate user credentials (login)
    public boolean authenticateUser(String username, String rawPassword) {
        // Find the customer by username
        customer existingCustomer = customerRepository.findByUsername(username);

        // Validate the password using PasswordEncoder
        return existingCustomer != null && passwordEncoder.matches(rawPassword, existingCustomer.getPassword());
    }

    // Generate JWT Token
    public String generateJwtToken(String username) {
        return Jwts.builder()
                .setSubject(username) // Set the username as the subject
                .setIssuedAt(new Date()) // Current timestamp
                .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // Token valid for 24 hours
                .signWith(secretKey, SignatureAlgorithm.HS512) // Sign with the injected secret key
                .compact();
    }
}