package com.TermProject.Banking.controller;

import com.TermProject.Banking.dto.AuthRequest;
import com.TermProject.Banking.dto.AuthenticationResponse;
import com.TermProject.Banking.dto.UserDto;
import com.TermProject.Banking.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/register")
    public String register(@RequestBody UserDto userDto) {

        String encodedPassword = passwordEncoder.encode(userDto.getPassword());

        // saving user in DB
        System.out.println("Registering user: " + userDto.getUsername() + " with encoded password: " + encodedPassword);

        return "User registered successfully";
    }

    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody AuthRequest authRequest) {
        // user authentication
        System.out.println("Authenticating user: " + authRequest.getUsername());

        // generate JWT token
        String token = jwtService.generateToken(authRequest.getUsername());

        return new AuthenticationResponse(token);
    }
}
