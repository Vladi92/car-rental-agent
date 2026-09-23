package com.vladi.carrental.backend.service;

import com.vladi.carrental.backend.domain.CarOffer;
import com.vladi.carrental.backend.dto.CarSearchRequest;
import com.vladi.carrental.backend.exception.InvalidSearchRequestException;
import com.vladi.carrental.backend.provider.CarOfferProvider;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarSearchService {

    private final List<CarOfferProvider> providers;

    public CarSearchService(List<CarOfferProvider> providers){
        this.providers = providers;
    }

    public List<CarOffer> search(CarSearchRequest request) {
        if (!request.getDropoffDate().isAfter(request.getPickupDate())) {
            throw new InvalidSearchRequestException(
                    "Drop-off date must be after pickup date"
            );
        }
        return providers.stream()
                .flatMap(provider -> provider.search(request).stream())
                .toList();
    }

}
