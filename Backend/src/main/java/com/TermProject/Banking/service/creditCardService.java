package com.TermProject.Banking.service;

import com.TermProject.Banking.model.creditCard;

import java.util.List;

public interface creditCardService {
    public creditCard saveCreditCard(creditCard creditCard);
    public List<creditCard> getAllCreditCards();
}
