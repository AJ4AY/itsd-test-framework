package com.itsd.test.tests;

import com.itsd.framework.services.RestFulActions;
import com.itsd.test.datagenerators.Constants;
import com.itsd.test.config.GetProperties;
import com.itsd.test.config.PropertiesLoader;
import com.itsd.test.config.PropertyFile;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import org.apache.commons.lang3.StringUtils;

import java.util.Map;

import static org.hamcrest.Matchers.equalTo;

public class CalculationStoreTest implements Constants {

    public RestFulActions restFulActions;
    public RequestSpecification request;
    public ResponseBody body;
    public Response response;
    protected ValidatableResponse json;

    public CalculationStoreTest() {
        restFulActions = new RestFulActions();
    }

    public RequestSpecification getRequestSpec() {
        request = restFulActions.given().contentType(PropertiesLoader.getValueFromPropertiesFile(PropertyFile.URL, GetProperties.GET_CONTENT_TYPE_JSON)).log().all();
        return request;
    }

    public void response(String taxpayerId, String calcId) {
        response = request.when().get("/calculations/liability/{taxPayerId}/{CalcId}", taxpayerId, calcId);
    }

    public void responseForIncomeSource() {
        response = request.when().get(PropertiesLoader.getValueFromPropertiesFile(PropertyFile.URL, GetProperties.GET_BASE_URL)+"/income-sources/{taxEntityId}", taxEntityId);
    }

    public void validateResponse(int statusCode) {
        json = response.then().assertThat().statusCode(statusCode).log().all();
    }

    public void verifyResponseBody(Map<String, String> responseElements) {
        for (Map.Entry<String, String> field : responseElements.entrySet()) {
            if (StringUtils.isNumeric(field.getValue())) {
                json.assertThat().body(field.getKey(), equalTo(Integer.parseInt(field.getValue()))).log().all();
            } else {
                json.assertThat().body(field.getKey(), equalTo(field.getValue())).log().ifError().log().all();
            }
        }

    }

    private String getTaxPayerId(String taxPayerId) {
        return taxPayerId;
    }

    private String getCalcId(String calcId) {
        return calcId;
    }


}
