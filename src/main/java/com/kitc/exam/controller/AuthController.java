package com.kitc.exam.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.kitc.exam.model.SuccessMessage;
import com.kitc.exam.model.User;
import com.kitc.exam.model.UserLogin;
import com.kitc.exam.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class AuthController {

	private final Logger logger = LoggerFactory.getLogger(AuthController.class);

	@Autowired
	private UserRepository userRepository;

	@PostMapping(path = "/createuser") // Map ONLY GET Requests
	public @ResponseBody User addNewUser(@RequestBody User user) {
		userRepository.save(user);
		return user;
	}

	@PostMapping(path = "/userlogin") // Map ONLY GET Requests
	public @ResponseBody SuccessMessage userLogin(@RequestBody UserLogin userLogin) {
		logger.info(userLogin.getEmail());
		User user = userRepository.findByEmail(userLogin.getEmail());
		if(user.getPassword().equals(userLogin.getPassword())){
			return new SuccessMessage(true, "User Logged In Successfully");
		}else {
			return new SuccessMessage(false, "User Not Logged in Successfully");
		}
	}

}
