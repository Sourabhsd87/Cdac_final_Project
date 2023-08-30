package com.project.ridealong.entities;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreType;

import jakarta.persistence.*;


@Entity
@Table(name="riders")
@JsonIgnoreType
public class Riders extends BaseEntity{

	@Column(name="name")
	private String Name;
	
	@Column(name="age")
	private int age;
	
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;
	
	@Column(name="role")
	@Enumerated(EnumType.STRING)
	private Role role;
	
	@OneToOne
	@JoinColumn(name = "a_id")
	private Address address;
	
	public Riders() {
		// TODO Auto-generated constructor stub
	}



public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public Address getAddress() {
	return address;
}



public void setAddress(Address address) {
	this.address = address;
}







public String getPassword() {
	return password;
}



public void setPassword(String password) {
	this.password = password;
}

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

public Role getRole() {
	return role;
}

public void setRole(String role) {
	this.role = Role.valueOf(role);
}


public Riders(String name, int age, String email, String password, String role) {
	super();
	this.Name = name;
	this.age = age;
	this.email = email;
	this.password = password;
	this.role = Role.valueOf(role);
}

@Override
public String toString() {
	return "Riders [ Name=" + Name + ", age=" + age + ", email=" + email + ", role=" + role + "]";
}




}