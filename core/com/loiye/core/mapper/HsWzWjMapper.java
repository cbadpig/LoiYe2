package com.loiye.core.mapper;

import com.loiye.core.bean.HsWzWj;

public interface HsWzWjMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(HsWzWj record);

    int insertSelective(HsWzWj record);

    HsWzWj selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(HsWzWj record);

    int updateByPrimaryKeyWithBLOBs(HsWzWj record);

    int updateByPrimaryKey(HsWzWj record);
}