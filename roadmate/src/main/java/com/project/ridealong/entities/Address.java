package com.project.ridealong.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "address")
public class Address extends BaseEntity{
	
	@Column
	private String locality;
	
	@Column(length = 30)
	private String street;
	
	@Column(length = 15)
	private String City;
	
	@Column(length = 15)
	private String State;

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
	
	public Address() {
		// TODO Auto-generated constructor stub
	}

	public Address(String locality, String street, String city, String state) {
		super();
		this.locality = locality;
		this.street = street;
		this.City = city;
		this.State = state;
	}

	@Override
	public String toString() {
		return "Address [locality=" + locality + ", street=" + street + ", City=" + City + ", State=" + State + "]";
	}
}
