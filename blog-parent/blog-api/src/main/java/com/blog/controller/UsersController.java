package com.blog.controller;

import com.blog.service.SysUserService;
import com.blog.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users")
public class UsersController {
    @Autowired
    private SysUserService sysUserService;

    // /users/currentUser
    @GetMapping ("currentUser")
    public Result currentUser(@RequestHeader("Authorization") String token){
        return sysUserService.findUserByToken(token);
    }
}
