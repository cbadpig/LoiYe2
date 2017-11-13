package com.loiye.core.mapper;

import com.loiye.core.bean.HsWzWj;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface HsWzWjMapper {

    /**
     * 根据用户id，查询出该用户的所有文章文集
     * @param yhId
     * @return
     */
    List<HsWzWj> selectByYh(Integer yhId);


//    int deleteByPrimaryKey(Integer id);
//
//    int insert(HsWzWj record);
//
//    int insertSelective(HsWzWj record);
//
//    HsWzWj selectByPrimaryKey(Integer id);
//
//    int updateByPrimaryKeySelective(HsWzWj record);
//
//    int updateByPrimaryKeyWithBLOBs(HsWzWj record);
//
//    int updateByPrimaryKey(HsWzWj record);
}