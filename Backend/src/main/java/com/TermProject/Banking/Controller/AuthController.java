package com.TermProject.Banking.controller;

import com.TermProject.Banking.model.customer;
import com.TermProject.Banking.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    // Endpoint to register a new customer
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody customer customer) {
        // Call the AuthService to register the customer
        authService.registerCustomer(customer);

        // Return a success response
        return ResponseEntity.ok("Customer registered successfully");
    }
}
