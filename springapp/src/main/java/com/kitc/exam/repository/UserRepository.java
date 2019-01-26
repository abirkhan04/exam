package com.kitc.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kitc.exam.model.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	 public User findByEmail(String email);
}
