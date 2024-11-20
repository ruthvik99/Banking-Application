package com.TermProject.Banking.Controller;

import com.TermProject.Banking.model.creditCard;
import com.TermProject.Banking.service.creditCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/creditCard")
public class creditCardController {
    @Autowired
    private creditCardService creditCardService;

    @PostMapping("/add")
    public String add(@RequestBody creditCard creditCard) {
        creditCardService.saveCreditCard(creditCard);
        return "New credit card added";
    }

    @GetMapping("/getAll")
    public List<creditCard> list() {
        return creditCardService.getAllCreditCards();
    }
}
