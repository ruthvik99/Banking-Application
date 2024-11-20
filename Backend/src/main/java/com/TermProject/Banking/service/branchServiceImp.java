package com.TermProject.Banking.service;

import com.TermProject.Banking.model.branch;
import com.TermProject.Banking.repository.branchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class branchServiceImp implements branchService {
    @Autowired
    private branchRepository branchRepo;

    @Override
    public branch saveBranch(branch branch) {
        return branchRepo.save(branch);
    }

    @Override
    public List<branch> getAllBranches() {
        return branchRepo.findAll();
    }
}
