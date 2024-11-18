package com.TermProject.Banking.model;

import jakarta.persistence.*;

@Entity
public class account {
    @Id
    private int accnum;
    private double balance;
    private String atype;
    @ManyToOne
    @JoinColumn(name = "branchId", nullable = false)
    private branch branchId;
    @OneToOne
    @JoinColumn(name="ssn", nullable=false)
    private customer ssn;
    public account() {
    }

    public int getAccnum() {
        return accnum;
    }

    public void setAccnum(int accnum) {
        this.accnum = accnum;
    }

    public double getBalance() {
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

    public customer getSsn() {
        return ssn;
    }

    public void setSsn(customer ssn) {
        this.ssn = ssn;
    }
}
