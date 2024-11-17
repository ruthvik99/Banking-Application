package com.TermProject.Banking.service;

import com.TermProject.Banking.model.customer;

import java.util.List;

public interface customerService {
    public customer saveCustomer(customer customer);
    public List<customer> getAllCustomers();
}
