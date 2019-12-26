package com.platforms.supplier.platform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(
        scanBasePackages = {
                "com.platforms.supplier.platform"
        }
)
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
        logo();
    }

    private static void logo() {
        System.out.println(" ___                 _  _             ___  _         _    ___                  ");
        System.out.println("/ __> _ _  ___  ___ | |<_> ___  _ _  | . \\| | ___  _| |_ | | ' ___  _ _ ._ _ _ ");
        System.out.println("\\__ \\| | || . \\| . \\| || |/ ._>| '_> |  _/| |<_> |  | |  | |- / . \\| '_>| ' ' |");
        System.out.println("<___/`___||  _/|  _/|_||_|\\___.|_|   |_|  |_|<___|  |_|  |_|  \\___/|_|  |_|_|_|");
        System.out.println("          |_|  |_|                                                             ");
    }

}
