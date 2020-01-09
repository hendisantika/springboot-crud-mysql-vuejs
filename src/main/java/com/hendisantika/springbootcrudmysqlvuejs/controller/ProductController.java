package com.hendisantika.springbootcrudmysqlvuejs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by IntelliJ IDEA.
 * Project : springboot-crud-mysql-vuejs
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 09/01/20
 * Time: 07.04
 */
@Controller
public class ProductController {
    @GetMapping("/")
    public String list() {
        return "products";
    }
}