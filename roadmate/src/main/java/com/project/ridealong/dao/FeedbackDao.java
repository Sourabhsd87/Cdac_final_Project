package com.project.ridealong.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.ridealong.entities.Feedback;
import com.project.ridealong.entities.Riders;

import java.util.List;


public interface FeedbackDao extends JpaRepository<Feedback,Long>{

	List<Feedback> findByRider(Riders rider);
}
