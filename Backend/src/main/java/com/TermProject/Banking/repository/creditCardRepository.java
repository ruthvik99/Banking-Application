package com.TermProject.Banking.repository;

import com.TermProject.Banking.model.creditCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface creditCardRepository extends JpaRepository<creditCard, Integer> {

}
