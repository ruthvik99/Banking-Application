package com.TermProject.Banking.service;

import com.TermProject.Banking.model.loan;
import com.TermProject.Banking.repository.loanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class loanServiceImp implements loanService {
    @Autowired
    private loanRepository loanRepo;

    @Override
    public loan saveLoan(loan loan) {
        return loanRepo.save(loan);
    }

    @Override
    public List<loan> getAllLoans() {
        return loanRepo.findAll();
    }
}
