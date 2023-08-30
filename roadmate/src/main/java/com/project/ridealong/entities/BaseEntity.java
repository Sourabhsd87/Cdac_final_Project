package com.project.ridealong.entities;

import jakarta.persistence.*;

@MappedSuperclass
public class BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public BaseEntity(Long id) {
		super();
		Id = id;
	}
	
	public BaseEntity() {
		// TODO Auto-generated constructor stub
	}
}
