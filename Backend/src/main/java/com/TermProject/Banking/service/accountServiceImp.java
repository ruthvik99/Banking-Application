package com.TermProject.Banking.service;

import com.TermProject.Banking.model.account;
import com.TermProject.Banking.model.branch;
import com.TermProject.Banking.repository.accountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class accountServiceImp implements accountService{
    @Autowired
    private accountRepository accountRepo;
    @Override
    public account saveAccount(account account) {
        return accountRepo.save(account);
    }
    @Override
    public List<account> getAllAccounts() {
        return accountRepo.findAll();
    }
    @Override
    public account findById(int id){
        Optional<account> optional = accountRepo.findById(id);
        if(optional.isPresent()){
            return optional.get();
        } else {
            throw new NoSuchElementException("Account not found");
        }
    }
}
