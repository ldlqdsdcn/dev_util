package indi.liudalei.dev;

import indi.liudalei.dev.config.RootConfig;
import indi.liudalei.dev.config.WebAppConfig;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Import;

/**
 * Created by 刘大磊 on 2017/11/19.
 */
@EnableAutoConfiguration
@Import(value = {RootConfig.class, WebAppConfig.class})
public class Application extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }

    public static void main(String[] args) {

    }
}
