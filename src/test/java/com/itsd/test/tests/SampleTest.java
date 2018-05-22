package com.itsd.test.tests;//package com.itsa.test.tests;
//
//import com.github.tomakehurst.wiremock.WireMockServer;
//import com.itsa.framework.services.RestFulActions;
//import com.itsa.test.config.FileScanner;
//import org.junit.Test;
//
//import static com.github.tomakehurst.wiremock.client.WireMock.*;
//import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
//import static com.itsa.test.config.GetProperties.GET_CONTENT_TYPE_JSON;
//import static com.itsa.test.config.PropertiesLoader.getValueFromPropertiesFile;
//import static com.itsa.test.config.PropertyFile.URL;
//import static org.hamcrest.Matchers.equalTo;
//
//public class SampleTest {
//
//    private final int PORT = 8084;
//    private WireMockServer wireMockServer = new WireMockServer(PORT);
//
//    private final String EVENTS_PATH = "/calculations/liability/1234567890123456/12345678";
//    private final String APPLICATION_JSON = "application/json";
//    private final String CALC_STORE = getEventJson();
//
//    private RestFulActions restFulActions;
//
//    public SampleTest(){
//        restFulActions=new RestFulActions();
//    }
//
////    @Before
//    public void before() {
//        System.out.println("Setting up!");
//        wireMockServer.start();
//        restFulActions.setDefaultPort(PORT);
//        configureFor("localhost", PORT);
//        stubFor(get(urlEqualTo(EVENTS_PATH)).willReturn(
//                aResponse().withStatus(200)
//                        .withHeader("Content-Type", APPLICATION_JSON)
//                        .withBody(CALC_STORE)));
//    }
//
//    @Test
//    public void getURlTenVerifyOddsValueEqualsto() {
//        restFulActions.get(EVENTS_PATH)
//                .then().log().all()
//                .statusCode(200).log().all()
//                .assertThat()
//                .body("calcID", equalTo("string"))
//                .and()
//                .body("calcResult.incomeTaxNicDelta", equalTo(0));
//    }
//@Test
//    public void tes1(){
//        restFulActions.given().contentType(getValueFromPropertiesFile(URL, GET_CONTENT_TYPE_JSON)).body("{\n" +
//                "  \"commencementDate\": \"2017-01-01\",\n" +
//                "\n" +
//                "  \"incomeSourceName\": \"Micro Service type (01)\",\n" +
//                "  \n" +
//                "  \"incomeSourceId\": \"XTIS00000000939\",\n" +
//                "  \"taxationPeriods\": [\n" +
//                "    {\n" +
//                "      \"accountingPeriodStartDate\": \"2017-04-06\",\n" +
//                "      \"accountingPeriodEndDate\": \"2018-04-05\"\n" +
//                "      }\n" +
//                "    ],\n" +
//                "  \"taxEntityId\": \"AP151219B\",\n" +
//                "  \"incomeSourceType\": \"01\"\n" +
//                "}\n").when().post("http://10.102.163.188:80/income-sources/AP151219B/XTIS00000000939").then().assertThat().statusCode(202).log().all();
//    }
//
////    @After
//    public void after() {
//        System.out.println("Running: tearDown");
//        wireMockServer.stop();
//    }
//
//
//    private static String getEventJson() {
//        return FileScanner.inputStreamToString(SampleTest.class
//                .getResourceAsStream("/RESPONSE/calculatorstore/GET_API#24 - Get Calculation Data_200_EXAMPLE_RESPONSE.json"));
//    }
//}
