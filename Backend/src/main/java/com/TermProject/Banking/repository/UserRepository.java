package com.TermProject.Banking.repository;

import com.TermProject.Banking.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // [add queries here later]
    User findByUsername(String username);
}
