package com.vladi.carrental.backend.dto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CarSearchRequest {

    private String pickupLocation;

    private LocalDateTime pickupDate;

    private String dropoffLocation;

    private LocalDateTime dropoffDate;

    private Integer driverAge;
}