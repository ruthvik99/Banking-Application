package com.TermProject.Banking.Controller;

import com.TermProject.Banking.model.account;
import com.TermProject.Banking.service.accountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/account")
public class accountController {
    @Autowired
    private accountService accountService;
    @PostMapping("/add")
    public String add(@RequestBody account account){
        accountService.saveAccount(account);
        return "New account added";
    }
    @GetMapping("/getAll")
    public List<account> list(){
        return accountService.getAllAccounts();
    }
}
