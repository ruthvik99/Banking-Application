package com.TermProject.Banking.Controller;

import com.TermProject.Banking.model.transaction;
import com.TermProject.Banking.service.transactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transaction")
public class transactionController {
    @Autowired
    private transactionService transactionService;

    @PostMapping("/add")
    public String add(@RequestBody transaction transaction) {
        transactionService.saveTransaction(transaction);
        return "New transaction added";
    }

    @GetMapping("/getAll")
    public List<transaction> list() {
        return transactionService.getAllTransactions();
    }
}
