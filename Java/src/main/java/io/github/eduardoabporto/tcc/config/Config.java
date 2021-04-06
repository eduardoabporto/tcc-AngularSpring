package io.github.eduardoabporto.tcc.config;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaDialect;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;


@Configuration
public class Config {

    @Bean
    public DataSource dataSource() {

        DataSourceBuilder ds = DataSourceBuilder.create();

        ds.username("vjmzsbugzlomwp");
        ds.password("449c428247004f646edb66272d3073f9db96a687e85fe29d356937921df698d8");
        ds.url("jdbc:postgresql://ec2-54-235-108-217.compute-1.amazonaws.com:5432/dbde2q2eag3vav");
        ds.driverClassName("org.postgresql.Driver");

/*

        ds.username("postgres");
        ds.password("Fusc@1984");
        ds.url("jdbc:postgresql://localhost:5432/tcc_os");
        ds.driverClassName("org.postgresql.Driver");

        ds.username("portode1");
        ds.password("2:1sJvY6*GKc1c");
        ds.url("jdbc:postgresql://localhost:5432/portode1_tcc_os");
        ds.driverClassName("org.postgresql.Driver");

        ds.username("sa");
        ds.password("password");
        ds.url("jdbc:h2:mem:db");
        ds.driverClassName("org.h2.Driver");

 */

        return ds.build();
    }

    @Bean
    public EntityManagerFactory entityManagerFactory() {

        LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();

        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        vendorAdapter.setGenerateDdl(true);
        vendorAdapter.setShowSql(true);

        factory.setDataSource(dataSource());
        factory.setJpaVendorAdapter(vendorAdapter);
        factory.setPackagesToScan("io.github.eduardoabporto.tcc.model.entity");
        factory.afterPropertiesSet();

        return factory.getObject();
    }

    @Bean
    public PlatformTransactionManager transactionManager() {

        JpaTransactionManager manager = new JpaTransactionManager();
        manager.setEntityManagerFactory(entityManagerFactory());
        manager.setJpaDialect(new HibernateJpaDialect());

        return manager;
    }


}
