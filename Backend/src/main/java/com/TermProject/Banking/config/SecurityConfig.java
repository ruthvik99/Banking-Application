package com.TermProject.Banking.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

/*
 * This file uses BCryptPasswordEncoder to hash the password before storing it in the database.
 */

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())  //disable csrf???
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/auth/**").permitAll()  //for unauthenticated access to /auth endpoints
                        .anyRequest().authenticated()  //requiring authentication for other endpoints
                )
                .httpBasic();  //basic authentication

        return http.build();
    }
}