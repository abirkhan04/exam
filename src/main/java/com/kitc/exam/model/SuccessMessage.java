package com.kitc.exam.model;

public class SuccessMessage {

	public SuccessMessage(boolean success, String msg) {
		this.success = success;
		this.msg= msg;
	}

	private boolean success;

	private String msg;

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

}
