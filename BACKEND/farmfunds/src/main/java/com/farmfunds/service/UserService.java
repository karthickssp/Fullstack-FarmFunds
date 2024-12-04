package com.farmfunds.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.farmfunds.entity.UserInfo;
import com.farmfunds.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserInfo> getAllUserInfo() {
        return userRepository.findAll();
    }
    
    public Optional<UserInfo> getUserInfoByEmail(String email) {
        return userRepository.findById(email);
    }

    public UserInfo saveUserInfo(UserInfo userInfo) {
        return userRepository.save(userInfo);
    }

    public void deleteUserInfo(String email) {
        userRepository.deleteById(email);
    }

}
