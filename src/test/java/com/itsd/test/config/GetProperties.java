package com.itsd.test.config;

public enum GetProperties {

    GET_BASE_URL("base_url"),
    GET_PORT("port"),
    GET_CONTENT_TYPE_JSON("application_json"),
    GET_API_24_200("api24#200");

    private String value;

    GetProperties(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
