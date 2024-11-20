package com.TermProject.Banking.service;

import com.TermProject.Banking.model.loan;

import java.util.List;

public interface loanService {
    public loan saveLoan(loan loan);
    public List<loan> getAllLoans();
}
