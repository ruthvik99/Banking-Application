package com.TermProject.Banking.Controller;

import com.TermProject.Banking.model.loan;
import com.TermProject.Banking.service.loanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/loan")
public class loanController {
    @Autowired
    private loanService loanService;

    @PostMapping("/add")
    public String add(@RequestBody loan loan) {
        loanService.saveLoan(loan);
        return "New loan added";
    }

    @GetMapping("/getAll")
    public List<loan> list() {
        return loanService.getAllLoans();
    }
}
