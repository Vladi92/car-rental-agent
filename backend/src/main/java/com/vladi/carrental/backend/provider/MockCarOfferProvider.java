package com.vladi.carrental.backend.provider;

import com.vladi.carrental.backend.domain.CarOffer;
import com.vladi.carrental.backend.dto.CarSearchRequest;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;

@Component
public class MockCarOfferProvider implements CarOfferProvider{
    @Override
    public List<CarOffer> search(CarSearchRequest request) {
        return List.of(new CarOffer(
                "12331",
                "Avis",
                "Toyota Yaris",
                "Mini",
                "Automatic",
                5,
                BigDecimal.valueOf(1200),
                "EUR",
                true,
                BigDecimal.valueOf(200),
                BigDecimal.valueOf(300)

        ));
    }
}
