package com.TermProject.Banking.Controller;

import com.TermProject.Banking.model.LoginRequest;
import com.TermProject.Banking.model.customer;
import com.TermProject.Banking.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    // Endpoint to register a new customer
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody customer customer) {
        // Call the AuthService to register the customer
        authService.registerCustomer(customer);

        // Return a success response
        return ResponseEntity.ok("Customer registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        if (authService.authenticateUser(loginRequest.getUsername(), loginRequest.getPassword())) {
            // Generate a JWT token
            String token = authService.generateJwtToken(loginRequest.getUsername());
            // Return token in a JSON response
            return ResponseEntity.ok(Map.of("token", token, "message", "Login successful"));
        } else {
            // Return an error message with proper HTTP status
            return ResponseEntity.status(401).body(Map.of("message", "Invalid credentials"));
        }
    }
}
