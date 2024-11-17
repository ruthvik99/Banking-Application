package com.TermProject.Banking.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.util.Date;

@Entity
public class creditCard {
    @Id
    private int cardnum;
    private int limit;
    private Date expirydate;
    private int amountDue;
    private int cIntrestRate;
    @ManyToOne
    @JoinColumn(name = "branchId", nullable = false)
    private branch branchId;
    @ManyToOne
    @JoinColumn(name = "ssn", nullable = false)
    private customer ssn;

    public creditCard() {
    }

    public int getCardnum() {
        return cardnum;
    }

    public void setCardnum(int cardnum) {
        this.cardnum = cardnum;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public Date getExpirydate() {
        return expirydate;
    }

    public void setExpirydate(Date expirydate) {
        this.expirydate = expirydate;
    }

    public int getAmountDue() {
        return amountDue;
    }

    public void setAmountDue(int amountDue) {
        this.amountDue = amountDue;
    }

    public int getcIntrestRate() {
        return cIntrestRate;
    }

    public void setcIntrestRate(int cIntrestRate) {
        this.cIntrestRate = cIntrestRate;
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
