package com.vladi.carrental.backend.controller;

import com.vladi.carrental.backend.client.TestApiClient;
import com.vladi.carrental.backend.domain.CarOffer;
import com.vladi.carrental.backend.dto.CarSearchRequest;
import com.vladi.carrental.backend.dto.PostResponse;
import com.vladi.carrental.backend.service.CarSearchService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
public class CarSearchController {

    private final CarSearchService carSearchService;
    private final TestApiClient testApiClient;

    public CarSearchController(
            CarSearchService carSearchService,
            TestApiClient testApiClient) {

        this.carSearchService = carSearchService;
        this.testApiClient = testApiClient;
    }

    @PostMapping("/search")
    public List<CarOffer> carSearch(@RequestBody CarSearchRequest request) {
        return carSearchService.search(request);
    }

    @GetMapping("/test/{id}")
    public PostResponse test(@PathVariable Integer id) {
        return testApiClient.getPost(id);
    }
}