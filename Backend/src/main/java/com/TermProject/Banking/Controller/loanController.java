package com.TermProject.Banking.Controller;

import com.TermProject.Banking.model.branch;
import com.TermProject.Banking.model.creditCard;
import com.TermProject.Banking.model.customer;
import com.TermProject.Banking.model.loan;
import com.TermProject.Banking.service.branchService;
import com.TermProject.Banking.service.customerService;
import com.TermProject.Banking.service.loanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/loan")
public class loanController {
    @Autowired
    private loanService loanService;

    @Autowired
    private branchService branchService;

    @Autowired
    private customerService customerService;

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody Map<String, Object> accountData) throws ParseException {
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

        loan loan = new loan();
        loan.setLoanNumber((int) accountData.get("loanNumber"));
        loan.setAmountLoaned((double) accountData.get("amountLoaned"));
        loan.setAmountLeft((double) accountData.get("amountLeft"));
        loan.setLintrestrate((double) accountData.get("lintrestrate"));
        loan.setBranchId(branch);
        loan.setSsn(customer);

        loanService.saveLoan(loan);
        return ResponseEntity.ok("New loan added successfully");
    }

    @GetMapping("/getAll")
    public List<loan> list() {
        return loanService.getAllLoans();
    }
}
