package com.vladi.carrental.backend.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CarSearchRequest {

    @NotBlank(message = "Pick up location is required")
    private String pickupLocation;
    @NotNull(message = "Pick up date is required")
    private LocalDateTime pickupDate;
    @NotBlank(message = "Drop off location is required")
    private String dropoffLocation;
    @NotNull(message = "Drop off date is required")
    private LocalDateTime dropoffDate;
    @NotNull(message = "Driver age is required")
    @Min(value = 18, message = "Driver must be at least 18 years old")
    @Max(value = 100, message = "Driver age must not exceed 100")
    private Integer driverAge;
}