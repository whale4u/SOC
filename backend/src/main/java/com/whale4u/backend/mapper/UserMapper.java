package com.whale4u.backend.mapper;

import com.whale4u.backend.bean.Role;
import com.whale4u.backend.bean.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    User loadUserByUsername(String username);

    List<Role> getUserRolesById(Integer id);
}
