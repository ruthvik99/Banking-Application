package com.TermProject.Banking.repository;

import com.TermProject.Banking.model.customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface customerRepository extends JpaRepository<customer, Integer> {
}
