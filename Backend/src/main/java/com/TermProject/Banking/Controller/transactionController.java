package com.TermProject.Banking.Controller;

import com.TermProject.Banking.model.*;
import com.TermProject.Banking.service.accountService;
import com.TermProject.Banking.service.transactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/transaction")
public class transactionController {
    @Autowired
    private transactionService transactionService;

    @Autowired
    private accountService accountService;

    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody Map<String, Object> accountData) throws ParseException {
        int accnum = Integer.parseInt(accountData.get("accnum").toString());
        account account = accountService.findById(accnum);
        if (account == null) {
            return ResponseEntity.badRequest().body("Account not found with number: " + accnum);
        }

        transaction t = new transaction();
        t.setTransactionId((int) accountData.get("transactionId"));
        t.settType((String) accountData.get("tType"));
        t.setAmount((double) accountData.get("amount"));
        String time = (String) accountData.get("timeStamp");
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date timeD = sdf.parse(time);
        Timestamp timestamp = new Timestamp(timeD.getTime());
        t.setTimeStamp(timestamp);
        t.setAccnum(account);
        transactionService.saveTransaction(t);
        return ResponseEntity.ok("New transaction added successfully");
    }

    @GetMapping("/getAll")
    public List<transaction> list() {
        return transactionService.getAllTransactions();
    }
}
