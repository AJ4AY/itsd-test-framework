package com.itsd.test.config;

import com.github.tomakehurst.wiremock.WireMockServer;
import com.itsd.test.tests.CalculationStoreTest;

import static com.github.tomakehurst.wiremock.client.WireMock.*;

public class GetStub {


    private CalculationStoreTest calculationStoreTest;
    private WireMockServer wireMockServer = new WireMockServer(Integer.parseInt(PropertiesLoader.getValueFromPropertiesFile(PropertyFile.URL, GetProperties.GET_PORT)));

    public GetStub() {
        this.calculationStoreTest = new CalculationStoreTest();
    }

    public void setUpStub(String event, String path, int statusCode) {
        wireMockServer.start();
        System.out.println("Running: SetUp");
        calculationStoreTest.restFulActions.setDefaultPort(Integer.parseInt(PropertiesLoader.getValueFromPropertiesFile(PropertyFile.URL, GetProperties.GET_PORT)));
        configureFor("localhost", Integer.parseInt(PropertiesLoader.getValueFromPropertiesFile(PropertyFile.URL, GetProperties.GET_PORT)));
        stubFor(get(urlEqualTo(event)).willReturn(
                aResponse().withStatus(statusCode)
                        .withHeader("Content-Type", PropertiesLoader.getValueFromPropertiesFile(PropertyFile.URL, GetProperties.GET_CONTENT_TYPE_JSON))
                        .withBody(FileScanner.getJson(path))));

    }

    public void stopStub() {
        System.out.println("Running: tearDown");
        wireMockServer.shutdownServer();
    }
}
