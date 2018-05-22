package com.itsd.test.config;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class PropertiesLoader {

    public static String getValueFromPropertiesFile(PropertyFile config, GetProperties properties) {
        Properties prop = new Properties();
        InputStream input;

        try {
            input = PropertiesLoader.class.getClassLoader().getResourceAsStream(config.getType());
            if (input == null) {
                System.out.println("Sorry, unable to find " + config.getType());
                return null;
            }
            prop.load(input);
            return prop.getProperty(properties.getValue());
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        return null;
    }
}