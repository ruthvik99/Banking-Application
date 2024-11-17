package com.TermProject.Banking.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
@Entity
public class account {
    @Id
    private int accnum;
    private int balance;
    private String atype;
    @ManyToOne
    @JoinColumn(name = "branchId", nullable = false)
    private branch branchId;

    public account() {
    }

    public int getAccnum() {
        return accnum;
    }

    public void setAccnum(int accnum) {
        this.accnum = accnum;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    public String getAtype() {
        return atype;
    }

    public void setAtype(String atype) {
        this.atype = atype;
    }

    public branch getBranchId() {
        return branchId;
    }

    public void setBranchId(branch branchId) {
        this.branchId = branchId;
    }
}
