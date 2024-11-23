package com.TermProject.Banking.service;

import com.TermProject.Banking.model.customer;

import java.util.List;
import java.util.Optional;

public interface customerService {
    public customer saveCustomer(customer customer);
    public List<customer> getAllCustomers();
    public customer findById(int ssn);
}
