package com.itsd.test.config;

public enum PropertyFile {

    URL("url.properties"),
    RESPONSE_FILE_NAME("responseFile.properties");

    private String type;

    private PropertyFile(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

}
