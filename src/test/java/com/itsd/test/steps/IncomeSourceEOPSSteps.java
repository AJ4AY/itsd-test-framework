package com.itsd.test.steps;

import com.itsd.test.config.GetStub;
import com.itsd.test.datagenerators.Constants;
import com.itsd.test.tests.CalculationStoreTest;
import com.itsd.test.tests.IncomeSourceEOPSTest;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class IncomeSourceEOPSSteps implements Constants {

    private CalculationStoreTest calculationStoreTest;
    private IncomeSourceEOPSTest incomeSourceEOPSTest;
    private GetStub getStub;

    public IncomeSourceEOPSSteps() {
        this.calculationStoreTest = new CalculationStoreTest();
        this.incomeSourceEOPSTest = new IncomeSourceEOPSTest();
        this.getStub = new GetStub();
    }

//    @Given("I have the stub (.*),(.*),(.*)")
//    public void stub(String api, String path, int statusCode) {
//        getStub.setUpStub(api, path, statusCode);
//    }

    @Given("I have (.*) unique identifier for taxEntityId")
    public void getTaxEntityID(String type) {
        calculationStoreTest.getRequestSpec();
    }

    @And("(.*) unique identifier for incomeSourceId")
    public void getIncomeSourceId(String type) {
        getTaxEntityID(type);
    }

    @And("I have (.*) income source details")
    public void iHaveIncomeSourceDetails(String type) {
        incomeSourceEOPSTest.getRequestBody();
    }

    @When("I post the income source details")
    public void postIncomeSource() {
        incomeSourceEOPSTest.postIncomeSource();
    }

    @When("I retrieve the income source details")
    public void retrieveIncomeSource() {
        calculationStoreTest.responseForIncomeSource();
    }

    @Then("I should see the response status code for income source as (.*)")
    public void verifyStatusCode(int statusCode) {
        calculationStoreTest.validateResponse(statusCode);
    }

    @Then("I should see the response status code for post as (.*)")
    public void verifyPostStatusCode(int statusCode) {
        incomeSourceEOPSTest.validatePostResponseCode(statusCode);
    }

    @Then("I stop the stub")
    public void stopStub() {
        getStub.stopStub();
    }
}