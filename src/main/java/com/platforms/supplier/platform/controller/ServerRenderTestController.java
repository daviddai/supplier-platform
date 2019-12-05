package com.platforms.supplier.platform.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServerRenderTestController {

    @GetMapping(value = "/ping")
    public String ping() {
        return "pong";
    }

    @GetMapping(value = "/home", produces = "text/html")
    public void home() {
    }

}
