package com.project.ridealong.dao;

import com.project.ridealong.entities.Trip;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//@Repository
public interface TripDao extends JpaRepository<Trip, Long> {

	List<Trip> findByRiderId(Long riderId);

	List<Trip> findByFromAndTo(String source, String destination);
}
