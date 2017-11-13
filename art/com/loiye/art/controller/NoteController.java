package com.loiye.art.controller;

import com.loiye.core.util.Result;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/huaishu/ajax")
public class NoteController {

    @GetMapping("/WJWZ")
    public String getWJWZ() {
        return "";
    }

}
