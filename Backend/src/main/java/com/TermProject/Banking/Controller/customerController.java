package com.TermProject.Banking.Controller;

import com.TermProject.Banking.model.customer;
import com.TermProject.Banking.service.customerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
public class customerController {
    @Autowired
    private customerService customerService;
    @PostMapping("/add")
    public String add(@RequestBody customer customer){
        customerService.saveCustomer(customer);
        return "New customer added";
    }
    @GetMapping("/getAll")
    public List<customer> list(){
        return customerService.getAllCustomers();
    }
}
