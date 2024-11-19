package com.TermProject.Banking.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean //PasswordEncoder for hashing passwords using BCrypt
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); //BCrypt = a secure password encoding algorithm
    }

    @Bean //configure HTTP security settings for the application
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) //disables CSRF (Cross-Site Request Forgery)
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/auth/**").permitAll()
                        .anyRequest().authenticated()
                )
                .formLogin(form -> form.disable()) //for now disable form based login
                .logout(logout -> logout.disable()); //for now disable logout (can implement logout button later)
        return http.build();
    }
}
