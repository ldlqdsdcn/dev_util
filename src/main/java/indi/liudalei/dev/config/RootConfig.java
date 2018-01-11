package indi.liudalei.dev.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

/**
 * Created by 刘大磊 on 2017/8/22 9:02.
 */
@Configuration
@ComponentScan("indi.liudalei.dev.**.service")
public class RootConfig {
    private static final Logger log = LoggerFactory.getLogger(RootConfig.class);

    @Value("${mailserver.host}")
    private String host;
    @Value("${mailserver.port}")
    private Integer port;
    @Value("${mailserver.username}")
    private String username;
    @Value("${mailserver.password}")
    private String password;
    @Value("${mailserver.default_encoding}")
    private String encoding;
    @Value("${mailserver.smtp.auth}")
    private boolean auth;



    /**
     * 发送邮件
     *
     * @return
     */
    @Bean
    public JavaMailSender javaMailSender() {
        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
        javaMailSender.setHost(host);
        javaMailSender.setPort(port);
        javaMailSender.setUsername(username);
        javaMailSender.setPassword(password);
        javaMailSender.setDefaultEncoding(encoding);
        javaMailSender.getJavaMailProperties().put("mail.smtp.auth", auth);
        return javaMailSender;
    }
}
