package com.vladi.carrental.backend.client;

import com.vladi.carrental.backend.dto.PostResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

@Component
public class TestApiClient {

    private final RestClient restClient;

    public TestApiClient() {
        this.restClient = RestClient.builder()
                .baseUrl("https://jsonplaceholder.typicode.com")
                .build();
    }

    public PostResponse getPost(Integer id) {
        return restClient
                .get()
                .uri("/posts/{id}", id)
                .retrieve()
                .body(PostResponse.class);
    }
}