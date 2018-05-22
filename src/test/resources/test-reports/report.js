$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/calculatorstore/CalculatorStore.feature");
formatter.feature({
  "name": "",
  "description": "  As a User I want to view the\n  retrieved calculations from the store\n  so that I can view the reference to the calculation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Retrieve calculation results of a taxpayer with valid identifiers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "A \u003ctype\u003e unique identifier of taxpayer \u003ctaxpayerId\u003e exists",
  "keyword": "Given "
});
formatter.step({
  "name": "\u003ctype\u003e unique identifier of the calculation \u003ccalcId\u003e exists",
  "keyword": "And "
});
formatter.step({
  "name": "I get \u003ctaxpayerId\u003e,\u003ccalcId\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the response status code as \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see the following entities in the response body",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "calcTimestamp",
        "2018-04-25T07:02:27.785Z"
      ]
    },
    {
      "cells": [
        "calcID",
        "string"
      ]
    },
    {
      "cells": [
        "calcType",
        "string"
      ]
    },
    {
      "cells": [
        "calcName",
        "string"
      ]
    },
    {
      "cells": [
        "calcVersion",
        "string"
      ]
    },
    {
      "cells": [
        "calcVersionDate",
        "string"
      ]
    },
    {
      "cells": [
        "calcAmount",
        "0"
      ]
    },
    {
      "cells": [
        "calcSummary.nationalRegime",
        "UK"
      ]
    },
    {
      "cells": [
        "calcSummary.incomeTax",
        "0"
      ]
    },
    {
      "cells": [
        "calcResult.incomeTaxNicDelta",
        "0"
      ]
    },
    {
      "cells": [
        "calcResult.taxableIncome.totalIncomeReceived",
        "0"
      ]
    },
    {
      "cells": [
        "calcResult.taxableIncome.incomeReceived.employmentIncome",
        "0"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "type",
        "taxpayerId",
        "calcId",
        "statusCode",
        "api",
        "filepath"
      ]
    },
    {
      "cells": [
        "valid",
        "1234567890123456",
        "12345678",
        "200",
        "/calculations/liability/1234567890123456/12345678",
        "/RESPONSE/calculatorstore/GET_API#24 - Get Calculation Data_200_EXAMPLE_RESPONSE.json"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Retrieve calculation results of a taxpayer with valid identifiers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "A valid unique identifier of taxpayer 1234567890123456 exists",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculationStoreSteps.getTaxPayerDetails(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valid unique identifier of the calculation 12345678 exists",
  "keyword": "And "
});
formatter.match({
  "location": "CalculationStoreSteps.getCalcId(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get 1234567890123456,12345678",
  "keyword": "When "
});
formatter.match({
  "location": "CalculationStoreSteps.accessEndPoint(String,String)"
});
formatter.result({
  "error_message": "java.lang.RuntimeException: Some exception during recording fields\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:52)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:141)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1731)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1213)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1737)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1213)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:170)\r\n\tat net.serenitybdd.rest.decorators.request.RequestSpecificationDecorated.execute(RequestSpecificationDecorated.java:227)\r\n\tat net.serenitybdd.rest.decorators.request.RequestSpecificationDecorated.get(RequestSpecificationDecorated.java:48)\r\n\tat net.serenitybdd.rest.decorators.request.RequestSpecificationDecorated.get(RequestSpecificationDecorated.java:27)\r\n\tat com.itsd.test.tests.CalculationStoreTest.response(CalculationStoreTest.java:36)\r\n\tat com.itsd.test.steps.CalculationStoreSteps.accessEndPoint(CalculationStoreSteps.java:48)\r\n\tat ✽.I get 1234567890123456,12345678(src/test/resources/features/calculatorstore/CalculatorStore.feature:11)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.base/java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.base/java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:79)\r\n\tat java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:400)\r\n\tat java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:243)\r\n\tat java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:225)\r\n\tat java.base/java.net.PlainSocketImpl.connect(PlainSocketImpl.java:148)\r\n\tat java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:402)\r\n\tat java.base/java.net.Socket.connect(Socket.java:591)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:120)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:179)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2128)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:494)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:451)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$2.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:141)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1531)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1213)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1290)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1213)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:149)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:124)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:141)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1731)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1213)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1737)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1213)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:170)\r\n\tat net.serenitybdd.rest.decorators.request.RequestSpecificationDecorated.execute(RequestSpecificationDecorated.java:227)\r\n\tat net.serenitybdd.rest.decorators.request.RequestSpecificationDecorated.get(RequestSpecificationDecorated.java:48)\r\n\tat net.serenitybdd.rest.decorators.request.RequestSpecificationDecorated.get(RequestSpecificationDecorated.java:27)\r\n\tat com.itsd.test.tests.CalculationStoreTest.response(CalculationStoreTest.java:36)\r\n\tat com.itsd.test.steps.CalculationStoreSteps.accessEndPoint(CalculationStoreSteps.java:48)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:283)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:173)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:153)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:128)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see the response status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculationStoreSteps.verifyStatusCode(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see the following entities in the response body",
  "rows": [
    {
      "cells": [
        "calcTimestamp",
        "2018-04-25T07:02:27.785Z"
      ]
    },
    {
      "cells": [
        "calcID",
        "string"
      ]
    },
    {
      "cells": [
        "calcType",
        "string"
      ]
    },
    {
      "cells": [
        "calcName",
        "string"
      ]
    },
    {
      "cells": [
        "calcVersion",
        "string"
      ]
    },
    {
      "cells": [
        "calcVersionDate",
        "string"
      ]
    },
    {
      "cells": [
        "calcAmount",
        "0"
      ]
    },
    {
      "cells": [
        "calcSummary.nationalRegime",
        "UK"
      ]
    },
    {
      "cells": [
        "calcSummary.incomeTax",
        "0"
      ]
    },
    {
      "cells": [
        "calcResult.incomeTaxNicDelta",
        "0"
      ]
    },
    {
      "cells": [
        "calcResult.taxableIncome.totalIncomeReceived",
        "0"
      ]
    },
    {
      "cells": [
        "calcResult.taxableIncome.incomeReceived.employmentIncome",
        "0"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculationStoreSteps.verifyResponseBody(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/features/incomesourcestore/CreatingIncomeScourceEOPS.feature");
formatter.feature({
  "name": "",
  "description": "  As a user\n  I want to create income source for a given taxEntityId and incomeSourceId\n  so that  view the EOPS results",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@API#36-Post"
    },
    {
      "name": "@IncomeSourcesStore"
    },
    {
      "name": "@Integration"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "create income source for a valid taxEntityId and incomeSourceId",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@API#36-Post"
    },
    {
      "name": "@IncomeSourcesStore"
    },
    {
      "name": "@Integration"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have valid unique identifier for taxEntityId",
  "keyword": "Given "
});
formatter.match({
  "location": "IncomeSourceEOPSSteps.getTaxEntityID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valid unique identifier for incomeSourceId",
  "keyword": "And "
});
formatter.match({
  "location": "IncomeSourceEOPSSteps.getIncomeSourceId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have valid income source details",
  "keyword": "And "
});
formatter.match({
  "location": "IncomeSourceEOPSSteps.iHaveIncomeSourceDetails(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I post the income source details",
  "keyword": "When "
});
formatter.match({
  "location": "IncomeSourceEOPSSteps.postIncomeSource()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the response status code for post as 202",
  "keyword": "Then "
});
formatter.match({
  "location": "IncomeSourceEOPSSteps.verifyPostStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/incomesourcestore/RetrieveIncomeSourceDetails.feature");
formatter.feature({
  "name": "",
  "description": "  As a user\n  I want to retrieve income source details for a given taxEntityId\n  so that  view the retrieved EOPS income source details",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@API#36"
    },
    {
      "name": "@IncomeSourcesStore"
    },
    {
      "name": "@Integration"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Retrieve income source for a valid taxEntityId",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@API#36"
    },
    {
      "name": "@IncomeSourcesStore"
    },
    {
      "name": "@Integration"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have valid unique identifier for taxEntityId",
  "keyword": "Given "
});
formatter.match({
  "location": "IncomeSourceEOPSSteps.getTaxEntityID(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valid unique identifier for incomeSourceId",
  "keyword": "And "
});
formatter.match({
  "location": "IncomeSourceEOPSSteps.getIncomeSourceId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have valid income source details",
  "keyword": "And "
});
formatter.match({
  "location": "IncomeSourceEOPSSteps.iHaveIncomeSourceDetails(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I post the income source details",
  "keyword": "When "
});
formatter.match({
  "location": "IncomeSourceEOPSSteps.postIncomeSource()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the response status code for post as 202",
  "keyword": "Then "
});
formatter.match({
  "location": "IncomeSourceEOPSSteps.verifyPostStatusCode(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c202\u003e but was \u003c409\u003e.\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:482)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$2.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:654)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:124)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:132)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:119)\r\n\tat com.itsd.test.tests.IncomeSourceEOPSTest.validatePostResponseCode(IncomeSourceEOPSTest.java:35)\r\n\tat com.itsd.test.steps.IncomeSourceEOPSSteps.verifyPostStatusCode(IncomeSourceEOPSSteps.java:61)\r\n\tat ✽.I should see the response status code for post as 202(src/test/resources/features/incomesourcestore/RetrieveIncomeSourceDetails.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I retrieve the income source details",
  "keyword": "When "
});
formatter.match({
  "location": "IncomeSourceEOPSSteps.retrieveIncomeSource()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see the response status code for income source as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "IncomeSourceEOPSSteps.verifyStatusCode(int)"
});
formatter.result({
  "status": "skipped"
});
});