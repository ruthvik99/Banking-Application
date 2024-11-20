package com.TermProject.Banking.service;

import com.TermProject.Banking.model.transaction;

import java.util.List;

public interface transactionService {
    public transaction saveTransaction(transaction transaction);
    public List<transaction> getAllTransactions();
}
