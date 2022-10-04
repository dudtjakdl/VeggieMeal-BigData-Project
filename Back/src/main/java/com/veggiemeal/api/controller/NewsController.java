package com.veggiemeal.api.controller;

import com.veggiemeal.api.domain.dto.news.NewsDto;
import com.veggiemeal.api.service.news.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;

@RestController
@RequiredArgsConstructor
@RequestMapping(path= "/news", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "*")
public class NewsController {

    private final NewsService newsService;

    @GetMapping
    public ResponseEntity<List<NewsDto>> getNaverNews() {
        List<NewsDto> newsList = newsService.getNaverNews();
        System.out.println(newsList.toString());
        return ResponseEntity.status(200).body(newsList);
    }

}
