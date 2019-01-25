package com.kitc.exam.controller;

import java.util.Collections;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.kitc.exam.model.Ebook;
import com.kitc.exam.repository.EbookRepository;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class EbookController {

	private final Logger logger = LoggerFactory.getLogger(AuthController.class);

	@Autowired
	private EbookRepository ebookRepository;

	@PostMapping(path = "/addebook") // Map ONLY GET Requests
	public @ResponseBody Ebook addNewUser(@RequestBody Ebook ebook) {
		ebook.setSearchCounter(0);
		ebookRepository.save(ebook);
		return ebook;
	}

	@GetMapping(path = "/searchbookbytitle") // Map ONLY GET Requests
	public @ResponseBody Ebook SearchBook(@RequestParam("title") String title) {
		logger.info("Title: " + title);
		Ebook ebook = ebookRepository.findByTitle(title);
		int count = ebook.getSearchCounter();
		ebook.setSearchCounter(count + 1);
		ebookRepository.save(ebook);
		return ebook;
	}

	@GetMapping(path = "/mostlyviewed") // Map ONLY GET Requests
	public @ResponseBody List<Ebook> MostlyViewedBook() {
		List<Ebook> ebooks = ebookRepository.findAll();
		Collections.sort(ebooks, (Ebook e1, Ebook e2) -> e1.getSearchCounter() - e2.getSearchCounter());
		List<Ebook> tenebooks = ebooks.subList(0, Math.min(ebooks.size(), 10));
		return tenebooks;
	}

}
