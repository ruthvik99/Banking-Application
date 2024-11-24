package com.TermProject.Banking.Controller;

import com.TermProject.Banking.model.account;
import com.TermProject.Banking.model.branch;
import com.TermProject.Banking.model.creditCard;
import com.TermProject.Banking.model.customer;
import com.TermProject.Banking.service.creditCardService;
import com.TermProject.Banking.service.branchService;
import com.TermProject.Banking.service.customerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/creditCard")
public class creditCardController {

    @Autowired
    private creditCardService creditCardService;

    @Autowired
    private branchService branchService;

    @Autowired
    private customerService customerService;

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody Map<String, Object> accountData) throws ParseException {
        // Parse branchId from string to int
        int branchId = Integer.parseInt(accountData.get("branchId").toString());
        int ssn = (int) accountData.get("ssn");

        // Retrieve branch and customer data
        branch branch = branchService.findById(branchId);
        if (branch == null) {
            return ResponseEntity.badRequest().body("Branch not found with ID: " + branchId);
        }

        customer customer = customerService.findById(ssn);
        if (customer == null) {
            return ResponseEntity.badRequest().body("Customer not found with SSN: " + ssn);
        }

        // Create and set up the CreditCard object
        creditCard cc = new creditCard();

        // Parse cardnum from string to int
        cc.setCardnum(Integer.parseInt(accountData.get("cardnum").toString()));

        // Parse creditLimit from string to double
        cc.setCreditLimit(Double.parseDouble(accountData.get("creditLimit").toString()));

        // Parse expirydate from string to Date
        String expString = (String) accountData.get("expirydate");
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date expDate = sdf.parse(expString);
        cc.setExpirydate(expDate);

        // Parse amountDue from string to double
        cc.setCreditLimit(Double.parseDouble(accountData.get("amountDue").toString()));

        // Parse cIntrestRate from string to double
        cc.setCreditLimit(Double.parseDouble(accountData.get("cIntrestRate").toString()));
        // Set the branch and customer to the CreditCard object
        cc.setBranchId(branch);
        cc.setSsn(customer);

        // Save the CreditCard object
        creditCardService.saveCreditCard(cc);

        return ResponseEntity.ok("New Credit Card added successfully");
    }

    @GetMapping("/getAll")
    public List<creditCard> list() {
        return creditCardService.getAllCreditCards();
    }
}
