package io.github.eduardoabporto.tcc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EntityScan(basePackages = {"io.github.eduardoabporto.tcc.model"})
@ComponentScan(basePackages = {"io.*"})
@EnableJpaRepositories(basePackages = {"io.github.eduardoabporto.tcc.model.repository"})
@EnableTransactionManagement
@EnableWebMvc
@RestController
public class TccApplication {

    public static void main(String[] args) {
        SpringApplication.run(TccApplication.class, args);
    }
}
