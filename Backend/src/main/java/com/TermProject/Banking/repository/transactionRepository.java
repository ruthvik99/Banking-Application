package com.TermProject.Banking.repository;

import com.TermProject.Banking.model.transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface transactionRepository extends JpaRepository<transaction, Integer> {
}
