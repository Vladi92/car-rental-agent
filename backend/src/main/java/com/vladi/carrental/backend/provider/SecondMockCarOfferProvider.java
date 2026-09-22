package com.vladi.carrental.backend.provider;

import com.vladi.carrental.backend.domain.CarOffer;
import com.vladi.carrental.backend.dto.CarSearchRequest;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;

@Component
public class SecondMockCarOfferProvider implements CarOfferProvider{
    @Override
    public List<CarOffer> search(CarSearchRequest request) {
        return List.of(new CarOffer(
                "5454776",
                "Budget",
                "Hyundai",
                "Mini",
                "Manual",
                5,
                BigDecimal.valueOf(600),
                "USD",
                true,
                BigDecimal.valueOf(50),
                BigDecimal.valueOf(100)
        ),
                new CarOffer(
                        "5156586",
                        "Sixt",
                        "Skoda Fabia",
                        "Mini",
                        "Automatic",
                        5,
                        BigDecimal.valueOf(800),
                        "USD",
                        true,
                        BigDecimal.valueOf(100),
                        BigDecimal.valueOf(150)
                )

        );
    }
}
