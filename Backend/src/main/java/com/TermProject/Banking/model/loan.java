package com.TermProject.Banking.model;

import jakarta.persistence.*;

@Entity
public class loan {
    @Id
    private int loanNumber;
    private double amountLeft;
    private double amountLoaned;
    private double lintrestrate;
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

    public double getAmountLeft() {
        return amountLeft;
    }

    public void setAmountLeft(double amountLeft) {
        this.amountLeft = amountLeft;
    }

    public double getAmountLoaned() {
        return amountLoaned;
    }

    public void setAmountLoaned(double amountLoaned) {
        this.amountLoaned = amountLoaned;
    }

    public double getLintrestrate() {
        return lintrestrate;
    }

    public void setLintrestrate(double lintrestrate) {
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
