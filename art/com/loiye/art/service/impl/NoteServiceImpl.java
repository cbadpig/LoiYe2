package com.loiye.art.service.impl;

import com.loiye.art.service.NoteService;
import com.loiye.core.bean.HsWzWj;
import com.loiye.core.mapper.HsWzWjMapper;
import com.loiye.core.util.LyConstant;
import com.loiye.core.util.LyEmpty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class NoteServiceImpl implements NoteService {

    @Autowired
    private HsWzWjMapper hsWzWjMapper;

    @Override
    public String getWJWZ() {

        List<HsWzWj> hsWzWjList = hsWzWjMapper.selectByYh(LyConstant.YH_ID);

        return null;
    }
}
