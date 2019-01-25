package com.kitc.exam.repository;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import com.kitc.exam.model.Ebook;

public interface EbookRepository extends JpaRepository<Ebook, Serializable>{
	 public Ebook findByTitle(String title);
}
