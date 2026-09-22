package com.vladi.carrental.backend.provider;

import com.vladi.carrental.backend.domain.CarOffer;
import com.vladi.carrental.backend.dto.CarSearchRequest;

import java.util.List;

public interface CarOfferProvider {

    List<CarOffer> search(CarSearchRequest request);
}
