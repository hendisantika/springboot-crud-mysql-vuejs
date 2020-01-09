package com.hendisantika.springbootcrudmysqlvuejs.repository;

import com.hendisantika.springbootcrudmysqlvuejs.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by IntelliJ IDEA.
 * Project : springboot-crud-mysql-vuejs
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 09/01/20
 * Time: 07.01
 */
public interface ProductRepository extends JpaRepository<Product, Long> {
}