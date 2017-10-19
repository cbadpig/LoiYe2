package com.loiye.art.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/dog/note")
public class ArtController {

    @GetMapping("")
    public ModelAndView accessArtHome() {
        return  new ModelAndView("templates/art/note/note.html");
    }

}
