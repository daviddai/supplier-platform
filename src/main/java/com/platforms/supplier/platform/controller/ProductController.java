package com.platforms.supplier.platform.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
public class ProductController {

    @GetMapping(value = "/addProduct", produces = MediaType.TEXT_HTML_VALUE)
    public void addProduct(HttpServletResponse response) {
        response.setContentType(MediaType.TEXT_HTML_VALUE);
    }

}
