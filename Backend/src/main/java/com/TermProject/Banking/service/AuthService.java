package com.TermProject.Banking.service;

import com.TermProject.Banking.model.User;
import com.TermProject.Banking.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public void registerUser(User user) {
        user.setRole("USER"); // default role "USER"
        userRepository.save(user); //saving user in database
    }
}
