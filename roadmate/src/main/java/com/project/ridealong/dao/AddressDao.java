package com.project.ridealong.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.ridealong.entities.Address;

public interface AddressDao extends JpaRepository<Address,Long>{
	
	
	
}
