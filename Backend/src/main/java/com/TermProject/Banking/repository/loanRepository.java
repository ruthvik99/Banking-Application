package com.TermProject.Banking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.TermProject.Banking.model.loan;
import org.springframework.stereotype.Repository;

@Repository
public interface loanRepository extends JpaRepository<loan, Integer> {
}
