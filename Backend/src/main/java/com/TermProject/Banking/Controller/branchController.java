package com.TermProject.Banking.Controller;

import com.TermProject.Banking.model.branch;
import com.TermProject.Banking.service.branchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/branch")
public class branchController {
    @Autowired
    private branchService branchService;

    @PostMapping("/add")
    public String add(@RequestBody branch branch) {
        branchService.saveBranch(branch);
        return "New branch added";
    }

    @GetMapping("/getAll")
    public List<branch> list() {
        return branchService.getAllBranches();
    }
}
