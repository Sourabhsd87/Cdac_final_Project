package com.project.ridealong.DTOs;

public class feedbackDto {

	private Long riderId;
	
	private Long tripId;
	
	private String feedback;

	public feedbackDto() {
		super();
	}

	public feedbackDto(Long riderId, Long tripId, String feedback) {
		super();
		this.riderId = riderId;
		this.tripId = tripId;
		this.feedback = feedback;
	}

	public Long getRiderId() {
		return riderId;
	}

	public void setRiderId(Long riderId) {
		this.riderId = riderId;
	}

	public Long getTripId() {
		return tripId;
	}

	public void setTripId(Long tripId) {
		this.tripId = tripId;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	@Override
	public String toString() {
		return "feedbackDto [riderId=" + riderId + ", tripId=" + tripId + ", feedback=" + feedback + "]";
	}
	
	
	
}
