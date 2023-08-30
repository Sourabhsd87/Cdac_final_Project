package com.project.ridealong.DTOs;

import com.project.ridealong.entities.Role;

import jakarta.validation.constraints.NotBlank;

public class userDTO {
	
	@NotBlank(message = "Enter your name")
	private String Name;
	
	private int age;
	
	private String email;
	
	private String password;
	
	private Role role;
	
	private String locality;
	
	private String street;
	
	private String City;
	
	private String State;

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String getLocality() {
		return locality;
	}

	public void setLocality(String locality) {
		this.locality = locality;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return City;
	}

	public void setCity(String city) {
		City = city;
	}

	public String getState() {
		return State;
	}

	public void setState(String state) {
		State = state;
	}
	
	public userDTO() {
		// TODO Auto-generated constructor stub
	}

	public userDTO(String name, int age, String email, String password, Role role, String locality, String street,
			String city, String state) {
		super();
		this.Name = name;
		this.age = age;
		this.email = email;
		this.password = password;
		this.role = role;
		this.locality = locality;
		this.street = street;
		this.City = city;
		this.State = state;
	}

	@Override
	public String toString() {
		return "userDTO [Name=" + Name + ", age=" + age + ", email=" + email + ", password=" + password + ", role="
				+ role + ", locality=" + locality + ", street=" + street + ", City=" + City + ", State=" + State + "]";
	}
	
	
}
