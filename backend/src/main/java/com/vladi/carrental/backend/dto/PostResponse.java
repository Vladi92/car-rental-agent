package com.vladi.carrental.backend.dto;

public record PostResponse(
        Integer userId,
        Integer id,
        String title,
        String body)
{ }
