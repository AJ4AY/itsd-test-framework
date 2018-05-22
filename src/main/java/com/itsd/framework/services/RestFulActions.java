package com.itsd.framework.services;

import com.google.common.base.Preconditions;
import io.restassured.RestAssured;
import io.restassured.config.LogConfig;
import io.restassured.config.RestAssuredConfig;
import io.restassured.filter.log.LogDetail;
import io.restassured.internal.RequestSpecificationImpl;
import io.restassured.internal.ResponseSpecificationImpl;
import io.restassured.internal.TestSpecificationImpl;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSender;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import net.serenitybdd.rest.decorators.ResponseSpecificationDecorated;
import net.serenitybdd.rest.decorators.request.RequestSpecificationDecorated;
import net.serenitybdd.rest.utils.RestDecorationHelper;
import net.serenitybdd.rest.utils.RestSpecificationFactory;

import java.net.URI;
import java.net.URL;
import java.util.Map;

public class RestFulActions {


    private ThreadLocal<RequestSpecificationDecorated> currentRequestSpecification = new ThreadLocal<>();

    /**
     * A basePath is added to the {@link @baseUrl} when making requests.
     * E.g.
     * if http://localhost is @baseUrl
     * and "xyz" is basePath
     * the url will be:
     * http://localhost/basepath.
     * by default basePath value is empty.
     * <p>
     * given().when().get("/baseUrl")
     */
    public String setDefaultBasePath(final String basePath) {
        return RestAssured.basePath = basePath;
    }

    public String getDefaultBasePath() {
        return RestAssured.basePath;
    }

    /**
     * The base URI that's used by REST assured when making requests if a non-fully qualified URI is used in the request.
     * Default value is {@value #baseURI}.
     */
    public String setDefaultBaseUrl(final String baseURI) {
        return RestAssured.baseURI = baseURI;
    }

    public String getDefaultBaseUrl() {
        return RestAssured.baseURI;
    }

    /**
     * The port is used when it's left out of the specified URI when making a request.
     * Default port will evaluate to 8080.
     * default URI with Default Port would be http://localhost:8080
     */
    public int setDefaultPort(final int port) {
        return RestAssured.port = port;
    }

    public int getDefaultPort() {
        return RestAssured.port;
    }

    /**
     * Specifies if you should url encode the URL automatically.
     * e.g. the query parameters are already be encoded before you provide them to Rest Assured then it's advised to disable
     * URL encoding. For example:
     * RestAssured.urlEncodingEnabled= true or
     * RestAssured.urlEncodingEnabled=false(if the "query" is already url encoded)
     * RestAssured.baseURI = "http://localhost/";
     * RestAssured.port = 8080;
     * RestAssured.urlEncodingEnabled = false; // Because "query" is already url encoded
     * String query = "project%20=%20BAM%20AND%20issuetype%20=%20Bug";
     * String response = get("/rest/api/2.0.alpha1/search?jql={q}",query).andReturn().asString();
     */

    public boolean setUrlEncodingEnabled(final boolean urlEncodingEnabled) {
        return RestAssured.urlEncodingEnabled = urlEncodingEnabled;
    }

    public boolean isUrlEncodingEnabled() {
        return RestAssured.urlEncodingEnabled;
    }

    /**
     * By setting the default root path of the response body , you don't need to write the entire path for each expectation.
     * E.g. instead of writing:
     * <p>
     * get(..).then().assertThat().
     * body("x.y.firstName", is(..)).
     * body("x.y.lastName", is(..)).
     * <p>
     * you can use a root and do:
     * <p>
     * RestAssured.rootPath = "x.y";
     * get(..).then().assertThat().
     * body("firstName", is(..)).
     * body("lastName", is(..)).
     */

    public String setDefaultRootPath(final String rootPath) {
        if (rootPath == null) {
            throw new IllegalArgumentException("RootPath can not be null");
        }
        return RestAssured.rootPath = rootPath;
    }

    public String getDefaultRootPath() {
        return RestAssured.rootPath;
    }


    /**
     * Start building the request part of the test specification. E.g.
     *
     * @return A request specification.
     * <p>
     * given().
     * parameters("firstName", "John", "lastName", "Doe")
     * .when()
     * .post("/greetXML")
     * .then()
     * .body("greeting.firstName", equalTo("John"));
     */

    public RequestSpecification given() {
        final RequestSpecificationImpl requestSpecificationGenerated = (RequestSpecificationImpl) RestAssured.given();
        final RequestSpecification request = RestDecorationHelper.decorate(requestSpecificationGenerated);
        final ResponseSpecificationDecorated response = RestSpecificationFactory.getInstrumentedResponseSpecification((ResponseSpecificationImpl) requestSpecificationGenerated.response());
        return ((TestSpecificationImpl) given(request, response)).getRequestSpecification();
    }

    private RequestSender given(final RequestSpecification request, final ResponseSpecification response) {
        RequestSpecification requestDecorated = RestDecorationHelper.decorate(request);
        ResponseSpecification responseDecorated = RestDecorationHelper.decorate(response);
        RequestSender created = RestAssured.given(requestDecorated, responseDecorated);
        currentRequestSpecification.set(
                (RequestSpecificationDecorated) ((TestSpecificationImpl) created).getRequestSpecification()
        );
        return created;
    }

    /**
     * It's same as #given() ,the only difference between {@link #with()} and {@link #given()} is syntactical.
     *
     * @return A request specification.
     * <p>
     * with().
     * parameters("firstName", "John", "lastName", "Doe")
     * .when()
     * .post("/greetXML")
     * .then()
     * .body("greeting.firstName", equalTo("John"));
     */

    public RequestSpecification with() {
        return given();
    }

    /**
     * Start building the DSL expression by sending a request without any parameters or headers etc. E.g.
     * <p/>
     *
     * @return A request sender interface that let's you call resources on the server
     * when().
     * get("/x").
     * then().
     * body("x.y.z1", equalTo("Z1")).
     * body("x.y.z2", equalTo("Z2"));
     * <p>
     * Note that if you need to add parameters, headers, cookies or other request properties use the {@link #given()} method.
     * </p>
     */

    public RequestSender when() {
        return given();
    }

    public RequestSpecification rest() {
        return given();
    }

    public ValidatableResponse and() {
        return then();
    }

    public ValidatableResponse then() {
        Preconditions.checkNotNull(currentRequestSpecification, "request specification should be initialized");
        final Response response = currentRequestSpecification.get().getLastResponse();
        Preconditions.checkNotNull(currentRequestSpecification, "response should be created");
        return response.then();
    }

    /**
     * Enable logging of both the request and the response if REST Assureds test validation fails with the specified log detail.
     * <p/>
     * <p>
     * This is just a shortcut for:
     * </p>
     * <pre>
     * RestAssured.config = RestAssured.config().logConfig(logConfig().enableLoggingOfRequestAndResponseIfValidationFails(logDetail));
     * </pre>
     *
     * @param "logDetails" The log detail to show in the log
     */


    public LogConfig enableLoggingOfRequestAndResponseIfValidationFails() {
        return enableLoggingOfRequestAndResponseIfValidationFails(LogDetail.ALL);
    }

    private LogConfig enableLoggingOfRequestAndResponseIfValidationFails(final LogDetail logDetail) {
        RestAssured.enableLoggingOfRequestAndResponseIfValidationFails(logDetail);
        return config().getLogConfig();
    }

    private RestAssuredConfig config() {
        return RestAssured.config();
    }

    public Response head(final URI uri) {
        return given().head(uri);
    }

    public Response head() {
        return given().head();
    }

    public Response head(final String path, final Object... pathParams) {
        return given().head(path, pathParams);
    }

    public Response head(final String path, final Map<String, ?> pathParams) {
        return given().head(path, pathParams);
    }

    public Response head(final URL url) {
        return given().head(url);
    }

    /**
     * Perform a POST request to a <code>uri</code>.
     *
     * @param path       The path to send the request to.
     * @param pathParams The path parameters.
     * @return The response of the request.
     */
    public Response post(final String path, final Object... pathParams) {
        if (pathParams != null && pathParams.length == 1 && pathParams[0] instanceof Map) {
            return given().post(path, (Map<String, ?>) pathParams[0]);
        } else {
            return given().post(path, pathParams);
        }
    }

    public Response post(final String path, final Map<String, ?> pathParams) {
        return given().post(path, pathParams);
    }

    public Response post(final URL url) {
        return given().post(url);
    }

    public Response post() {
        return given().post();
    }

    public Response post(final URI uri) {
        return given().post(uri);
    }

    /**
     * @param "path"       The path to send the request to.
     * @param "pathParams" The path parameters.
     * @return The response of the request.
     */

    public Response put(final URI uri) {
        return given().put(uri);
    }

    public Response put(final String path, final Object... pathParams) {
        if (pathParams != null && pathParams.length == 1 && pathParams[0] instanceof Map) {
            return given().put(path, (Map<String, ?>) pathParams[0]);
        } else {
            return given().put(path, pathParams);
        }
    }

    public Response put() {
        return given().put();
    }

    public Response put(final URL url) {
        return given().put(url);
    }

    public Response get(final URI uri) {
        return given().get(uri);
    }

    public Response get(final URL url) {
        return given().get(url);
    }

    public Response get(final String path, final Object... pathParams) {
        if (pathParams != null && pathParams.length == 1 && pathParams[0] instanceof Map) {
            return given().get(path, (Map<String, ?>) pathParams[0]);
        } else {
            return given().get(path, pathParams);
        }
    }

    public Response get(final String path, final Map<String, ?> pathParams) {
        return given().get(path, pathParams);
    }

    public Response get() {
        return given().get();
    }
}