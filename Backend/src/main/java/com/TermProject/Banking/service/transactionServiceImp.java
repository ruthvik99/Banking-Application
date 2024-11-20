package com.TermProject.Banking.service;

import com.TermProject.Banking.model.transaction;
import com.TermProject.Banking.repository.transactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class transactionServiceImp implements transactionService {
    @Autowired
    private transactionRepository transactionRepo;

    @Override
    public transaction saveTransaction(transaction transaction) {
        return transactionRepo.save(transaction);
    }

    @Override
    public List<transaction> getAllTransactions() {
        return transactionRepo.findAll();
    }
}
