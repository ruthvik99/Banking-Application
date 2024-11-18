package com.TermProject.Banking.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.sql.Timestamp;

@Entity
public class transaction {
    @Id
    private int transactionId;
    private String tType;
    private double amount;
    private Timestamp timeStamp;
    @ManyToOne
    @JoinColumn(name = "accnum", nullable = false)
    private account accnum;

    public transaction() {
    }

    public int getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(int transactionId) {
        this.transactionId = transactionId;
    }

    public String gettType() {
        return tType;
    }

    public void settType(String tType) {
        this.tType = tType;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Timestamp getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Timestamp timeStamp) {
        this.timeStamp = timeStamp;
    }

    public account getAccnum() {
        return accnum;
    }

    public void setAccnum(account accnum) {
        this.accnum = accnum;
    }
}
