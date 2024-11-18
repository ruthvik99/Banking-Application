package com.TermProject.Banking.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class branch {
    @Id
    private int branchId;
    private String bname;
    private double assets;
    private String bcity;
    private String bstreet;
    private int totcustomers;

    public branch() {
    }

    public int getBranchId() {
        return branchId;
    }

    public void setBranchId(int branchId) {
        this.branchId = branchId;
    }

    public String getBname() {
        return bname;
    }

    public void setBname(String bname) {
        this.bname = bname;
    }

    public double getAssets() {
        return assets;
    }

    public void setAssets(int assets) {
        this.assets = assets;
    }

    public String getBcity() {
        return bcity;
    }

    public void setBcity(String bcity) {
        this.bcity = bcity;
    }

    public String getBstreet() {
        return bstreet;
    }

    public void setBstreet(String bstreet) {
        this.bstreet = bstreet;
    }

    public int getTotcustomers() {
        return totcustomers;
    }

    public void setTotcustomers(int totcustomers) {
        this.totcustomers = totcustomers;
    }
}
