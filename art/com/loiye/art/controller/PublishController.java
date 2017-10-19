package com.loiye.art.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping("/dog")
public class PublishController {

    @GetMapping("")
    public void accessArtHome(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.sendRedirect("templates/index.html");
    }

}
