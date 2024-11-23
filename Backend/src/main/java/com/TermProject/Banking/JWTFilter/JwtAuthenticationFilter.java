package com.TermProject.Banking.JWTFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.util.ArrayList;

public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final SecretKey SECRET_KEY;

    public JwtAuthenticationFilter(SecretKey secretKey) {
        this.SECRET_KEY = secretKey; // Inject the same key as used for token generation
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String header = request.getHeader("Authorization");

        if (header != null && header.startsWith("Bearer ")) {
            String token = header.substring(7); // Remove the "Bearer " prefix
            try {
                // Validate the token and extract claims
                Claims claims = Jwts.parserBuilder()
                        .setSigningKey(SECRET_KEY)
                        .build()
                        .parseClaimsJws(token)
                        .getBody();

                String username = claims.getSubject(); // Extract the username from the token

                if (username != null) {
                    SecurityContextHolder.getContext().setAuthentication(
                            new org.springframework.security.authentication.UsernamePasswordAuthenticationToken(username, null, new ArrayList<>())
                    );
                }
            } catch (Exception e) {
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                return;
            }
        }

        // Continue with the filter chain
        filterChain.doFilter(request, response);
    }
}