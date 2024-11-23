package com.TermProject.Banking.Controller;

import com.TermProject.Banking.model.account;
import com.TermProject.Banking.model.branch;
import com.TermProject.Banking.model.customer;
import com.TermProject.Banking.service.accountService;
import com.TermProject.Banking.service.branchService;
import com.TermProject.Banking.service.customerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/account")
public class accountController {
    @Autowired
    private accountService accountService;

    @Autowired
    private branchService branchService;

    @Autowired
    private customerService customerService;

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody Map<String, Object> accountData) {
        int branchId = (int) accountData.get("branchId");
        int ssn = (int) accountData.get("ssn");

        branch branch = branchService.findById(branchId);
        if (branch == null) {
            return ResponseEntity.badRequest().body("Branch not found with ID: " + branchId);
        }

        customer customer = customerService.findById(ssn);
        if (customer == null) {
            return ResponseEntity.badRequest().body("Customer not found with SSN: " + ssn);
        }

        account account = new account();
        account.setAccnum((int) accountData.get("accnum"));
        account.setBalance((double) accountData.get("balance"));
        account.setAtype((String) accountData.get("atype"));
        account.setBranchId(branch);
        account.setSsn(customer);

        accountService.saveAccount(account);
        return ResponseEntity.ok("New account added successfully");
    }


    @GetMapping("/getAll")
    public List<account> list(){
        return accountService.getAllAccounts();
    }
    }
