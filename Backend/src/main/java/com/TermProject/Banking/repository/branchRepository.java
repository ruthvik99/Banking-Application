package com.TermProject.Banking.repository;

import com.TermProject.Banking.model.branch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface branchRepository extends JpaRepository<branch, Integer> {
}
