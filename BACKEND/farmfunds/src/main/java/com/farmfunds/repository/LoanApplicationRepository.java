package com.farmfunds.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.farmfunds.entity.LoanApplication;

import java.util.List;
import java.util.Optional;


public interface LoanApplicationRepository extends JpaRepository<LoanApplication, Long> {

    LoanApplication findById(long id);
    List<LoanApplication> findByEmail(String email);
    List<LoanApplication> findBySalary(int salary);
    List<LoanApplication> findByLoanamount(int loanamount);
    List<LoanApplication> findByLoantype(String loantype);
    List<LoanApplication> findByStatus(String status);
    Optional<LoanApplication> findByTracknumber(long tracknumber);
    long countByStatus(String status);
    long count();

}
