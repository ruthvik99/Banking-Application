package com.TermProject.Banking.model;

import jakarta.persistence.*;

@Entity
public class loan {
    @Id
    private int loanNumber;
    private int amountLeft;
    private int amountLoaned;
    private int lintrestrate;
    @ManyToOne
    @JoinColumn(name = "branchId", nullable = false)
    private branch branchId;
    @ManyToOne
    @JoinColumn(name = "ssn", nullable = false)
    private customer ssn;

    public loan() {
    }

    public int getLoanNumber() {
        return loanNumber;
    }

    public void setLoanNumber(int loanNumber) {
        this.loanNumber = loanNumber;
    }

    public int getAmountLeft() {
        return amountLeft;
    }

    public void setAmountLeft(int amountLeft) {
        this.amountLeft = amountLeft;
    }

    public int getAmountLoaned() {
        return amountLoaned;
    }

    public void setAmountLoaned(int amountLoaned) {
        this.amountLoaned = amountLoaned;
    }

    public int getLintrestrate() {
        return lintrestrate;
    }

    public void setLintrestrate(int lintrestrate) {
        this.lintrestrate = lintrestrate;
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
