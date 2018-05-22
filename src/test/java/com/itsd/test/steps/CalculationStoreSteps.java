package com.itsd.test.steps;

import com.itsd.test.tests.CalculationStoreTest;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.Map;

public class CalculationStoreSteps {

    private CalculationStoreTest calculationStoreTest;
//    private WireMockServer wireMockServer = new WireMockServer(Integer.parseInt(getValueFromPropertiesFile(URL, GET_PORT)));
//    private final String EVENTS_PATH = "/calculations/liability/1234567890123456/12345678";

    public CalculationStoreSteps() {
        calculationStoreTest = new CalculationStoreTest();
    }

    //    @Before
    public void setUp() {
//        wireMockServer.start();
//        System.out.println("Running: SetUp");
//        calculationStoreTest.restFulActions.setDefaultPort(Integer.parseInt(getValueFromPropertiesFile(URL, GET_PORT)));
//        configureFor("localhost", Integer.parseInt(getValueFromPropertiesFile(URL, GET_PORT)));
//        stubFor(get(urlEqualTo(EVENTS_PATH)).willReturn(
//                aResponse().withStatus(200)
//                        .withHeader("Content-Type", getValueFromPropertiesFile(URL, GET_CONTENT_TYPE_JSON))
//                        .withBody(getJson(getValueFromPropertiesFile(RESPONSE_FILE_NAME,GET_API_24_200)))));

    }

    @Given("A (.*) unique identifier of taxpayer (.*) exists")
    public void getTaxPayerDetails(String type, String taxPayerId) {
        System.out.println(" taxPayerId " + type);
        calculationStoreTest.getRequestSpec();
    }

    @And("(.*) unique identifier of the calculation (.*) exists")
    public void getCalcId(String type, String calcId) {
        System.out.println(" calcId " + type);
        getTaxPayerDetails(type, calcId);
    }

    @When("I get (.*),(.*)")
    public void accessEndPoint(String taxId, String calcId) {
        calculationStoreTest.response(taxId, calcId);
    }

    @Then("I should see the response status code as (.*)")
    public void verifyStatusCode(int statusCode) {
        calculationStoreTest.validateResponse(statusCode);
    }



    @And("I should see the following entities in the response body")
    public void verifyResponseBody(Map<String, String> responseElements) {
        calculationStoreTest.verifyResponseBody(responseElements);
    }
}