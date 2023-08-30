package com.project.ridealong.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreType;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@JsonIgnoreType
public class Feedback extends BaseEntity{
	
	@ManyToOne
	@JoinColumn(name = "Rider_id")
	private Riders rider;
	
	@ManyToOne
	@JoinColumn(name = "Trip_id")
	private Trip trip;
	
	@Column(name = "Text")
	private String feedback_text;

	public Feedback() {
		// TODO Auto-generated constructor stub
	}
	
	public Riders getRider() {
		return rider;
	}

	public void setRider(Riders rider) {
		this.rider = rider;
	}

	public Trip getTrip() {
		return trip;
	}

	public void setTrip(Trip trip) {
		this.trip = trip;
	}

	public String getFeedback_text() {
		return feedback_text;
	}

	public void setFeedback_text(String feedback_text) {
		this.feedback_text = feedback_text;
	}

	public Feedback(Long id, Riders rider, Trip trip, String feedback_text) {
		super(id);
		this.rider = rider;
		this.trip = trip;
		this.feedback_text = feedback_text;
	}

	@Override
	public String toString() {
		return "Feedback [rider=" + rider + ", trip=" + trip + ", feedback_text=" + feedback_text + "]";
	}

	
}
