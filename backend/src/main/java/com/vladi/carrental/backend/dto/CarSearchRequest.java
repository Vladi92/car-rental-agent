package com.vladi.carrental.backend.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CarSearchRequest {

    @NotBlank
    private String pickupLocation;
    @NotNull
    private LocalDateTime pickupDate;
    @NotBlank
    private String dropoffLocation;
    @NotNull
    private LocalDateTime dropoffDate;
    @NotNull
    @Min(18)
    @Max(100)
    private Integer driverAge;
}