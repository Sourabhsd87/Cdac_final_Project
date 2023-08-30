package com.project.ridealong.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "trips")
public class Trip extends BaseEntity{

    
    @Column(name = "from_location")
    private String from;

    @Column(name = "to_location")
    private String to;

    @Column(name = "date")
    private String date;

    @ManyToOne
    @JoinColumn(name = "rider_id")
    private Riders rider;

    public Trip() {}

    public Trip(String from, String to, String date) {
        this.from = from;
        this.to = to;
        this.date = date;
    }

    

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Riders getRider() {
        return rider;
    }

    public void setRider(Riders rider) {
        this.rider = rider;
    }

    @Override
    public String toString() {
        return "Trip [ from=" + from + ", to=" + to + ", date=" + date + "]";
    }
}
