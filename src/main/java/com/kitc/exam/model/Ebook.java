package com.kitc.exam.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Ebook {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String title;
	private String description;
	private String coverimagename;
	private String pdfname;
	private String category;
	private Integer searchCounter;

	public Integer getSearchCounter() {
		return searchCounter;
	}

	public void setSearchCounter(Integer searchCounter) {
		this.searchCounter = searchCounter;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCoverimagename() {
		return coverimagename;
	}

	public void setCoverimagename(String coverimagename) {
		this.coverimagename = coverimagename;
	}

	public String getPdfname() {
		return pdfname;
	}

	public void setPdfname(String pdfname) {
		this.pdfname = pdfname;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

}
