package com.platforms.supplier.platform.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
public class ServerRenderTestController {

    @GetMapping(value = "/ping", produces = MediaType.TEXT_PLAIN_VALUE)
    public String ping() {
        return "pong";
    }

    @GetMapping(value = "/home", produces = MediaType.TEXT_HTML_VALUE)
    public void home(HttpServletResponse response) {
        response.setContentType(MediaType.TEXT_HTML_VALUE);
    }

    @GetMapping(value = "/greetings", produces = MediaType.TEXT_HTML_VALUE)
    public void greeting(HttpServletResponse response) {
        response.setContentType(MediaType.TEXT_HTML_VALUE);
    }

}
