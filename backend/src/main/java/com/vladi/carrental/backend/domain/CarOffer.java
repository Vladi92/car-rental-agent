package com.vladi.carrental.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@AllArgsConstructor
@Getter @Setter
public class CarOffer {

    private String id;

    private String provider;

    private String carName;

    private String category;

    private String transmission;

    private int seats;

    private BigDecimal totalPrice;

    private String currency;

    private boolean unlimitedMileage;

    private BigDecimal deposit;

    private BigDecimal excess;
}