package com.loiye.art.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/dog")
public class PublishController {

    @GetMapping("")
    public ModelAndView accessArtHome() {
        return new ModelAndView("/templates/index.html");
    }

}
