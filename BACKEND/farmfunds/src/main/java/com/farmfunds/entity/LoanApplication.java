package com.farmfunds.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class LoanApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long tracknumber;
    private String firstname;
    private String lastname;
    private Date dob;
    private String gender;
    private String mobile;
    private String email;
    private String maritalstatus;
    private String aadharno;
    private String panno;
    private String doorno;
    private String addressline1;
    private String addressline2;
    private String city;
    private int pin;
    private int salary;
    private String patta;
    private int area;
    private int loanamount;
    private String loanpurpose;
    private int duration;
    private String loantype;
    private String coapplicant;
    private long accountno;
    private String message;
    @Column(columnDefinition = "varchar(255) default 'pending'")
    private String status;

    private String aadhar;
    private String pan;
    private String photo;
    private String signature;

}
