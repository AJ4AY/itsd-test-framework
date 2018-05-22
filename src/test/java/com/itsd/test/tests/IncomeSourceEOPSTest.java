package com.itsd.test.tests;

import com.itsd.test.datagenerators.Constants;
import com.itsd.test.datasets.IncomeSourceEOPSRequestBody;
import com.itsd.test.config.GetProperties;
import com.itsd.test.config.PropertiesLoader;

import static com.itsd.test.config.PropertyFile.URL;
import static org.hamcrest.Matchers.lessThan;

public class IncomeSourceEOPSTest implements Constants {

    private IncomeSourceEOPSRequestBody incomeSourceEOPSRequestBody;
    public CalculationStoreTest calculationStoreTest;

    public IncomeSourceEOPSTest() {
        incomeSourceEOPSRequestBody = new IncomeSourceEOPSRequestBody();
        calculationStoreTest = new CalculationStoreTest();
    }

    public void getRequestBody() {
        incomeSourceEOPSRequestBody.getIncomeSourceEOPSRequestBodyDetails();
        calculationStoreTest.getRequestSpec().body(incomeSourceEOPSRequestBody.requestParams.toString());
    }

    public void postIncomeSource() {
        calculationStoreTest.response = calculationStoreTest.request.post(PropertiesLoader.getValueFromPropertiesFile(URL, GetProperties.GET_BASE_URL)+"/income-sources/{taxEntityId}/{incomeSourceId}", taxEntityId, incomeSourceId);
    }

    public void response() {
        calculationStoreTest.response = calculationStoreTest.request.when().get(PropertiesLoader.getValueFromPropertiesFile(URL, GetProperties.GET_BASE_URL)+"/income-sources/AP151219B");
    }

    public void validatePostResponseCode(int statusCode) {
        calculationStoreTest.json = calculationStoreTest.response.then().assertThat().statusCode(statusCode).and().assertThat().time(lessThan(30000L)).log().all();
    }
}