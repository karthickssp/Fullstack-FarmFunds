package com.farmfunds.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.farmfunds.entity.LoanSchema;
import com.farmfunds.service.LoanSchemaService;

@RestController
@RequestMapping("/farmfunds/loanschema")
@CrossOrigin
public class LoanSchemaController {
    
    @Autowired
    private LoanSchemaService loanSchemaService;
    
    @GetMapping("/allschema")
    public ResponseEntity<List<LoanSchema>> getAllLoanSchemas() {
        List<LoanSchema> loanSchemas = loanSchemaService.getAllLoanSchemas();
        return new ResponseEntity<>(loanSchemas, HttpStatus.OK);
    }

    @GetMapping("/loanid/{id}")
    public ResponseEntity<Optional<LoanSchema>> getLoanSchemasById(@PathVariable Long id) {
        Optional<LoanSchema> loan = loanSchemaService.getLoanSchemaById(id);
        return new ResponseEntity<>(loan, HttpStatus.OK);
    }
    
    @GetMapping("/byloan/{loan}")
    public ResponseEntity<List<LoanSchema>> getLoanSchemasByLoan(@PathVariable String loan) {
        List<LoanSchema> loanSchemas = loanSchemaService.getLoanSchemasByLoan(loan);
        return new ResponseEntity<>(loanSchemas, HttpStatus.OK);
    }
    
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<LoanSchema> createLoanSchema(@RequestBody LoanSchema loanSchema) {
        LoanSchema newLoanSchema = loanSchemaService.saveLoanSchema(loanSchema);
        return new ResponseEntity<>(newLoanSchema, HttpStatus.CREATED);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLoan(@PathVariable int id) {
        loanSchemaService.deleteLoanSchema(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @PreAuthorize("hasRole('USER')")
    @GetMapping("/count")
    public ResponseEntity<Long> countSchema(){
        long count = loanSchemaService.countSchema();
        return new ResponseEntity<>(count, HttpStatus.OK);
    }

}
