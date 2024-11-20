package com.TermProject.Banking.service;

import com.TermProject.Banking.model.creditCard;
import com.TermProject.Banking.repository.creditCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class creditCardServiceImp implements creditCardService {
    @Autowired
    private creditCardRepository creditCardRepo;

    @Override
    public creditCard saveCreditCard(creditCard creditCard) {
        return creditCardRepo.save(creditCard);
    }

    @Override
    public List<creditCard> getAllCreditCards() {
        return creditCardRepo.findAll();
    }
}
