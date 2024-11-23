package com.TermProject.Banking.service;

import com.TermProject.Banking.model.account;
import com.TermProject.Banking.model.customer;

import java.util.List;

public interface accountService {
    public account saveAccount(account account);
    public List<account> getAllAccounts();
    public account findById(int id);
}
