package com.TermProject.Banking.service;

import com.TermProject.Banking.model.branch;

import java.util.List;

public interface branchService {
    public branch saveBranch(branch branch);
    public List<branch> getAllBranches();
    public branch findById(int id);
}
