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
  "name": "I have the stub \u003capi\u003e,\u003cfilepath\u003e,\u003cstatusCode\u003e",
  "keyword": "Given "
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
formatter.step({
  "name": "I stop the stub",
  "keyword": "Then "
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
  "name": "I have the stub /calculations/liability/1234567890123456/12345678,/RESPONSE/calculatorstore/GET_API#24 - Get Calculation Data_200_EXAMPLE_RESPONSE.json,200",
  "keyword": "Given "
});
formatter.match({
  "location": "IncomeSourceEOPSSteps.stub(String,String,int)"
});
formatter.result({
  "error_message": "com.github.tomakehurst.wiremock.common.FatalStartupException: java.lang.RuntimeException: java.net.BindException: Address already in use: bind\r\n\tat com.github.tomakehurst.wiremock.WireMockServer.start(WireMockServer.java:146)\r\n\tat com.itsd.test.config.GetStub.setUpStub(GetStub.java:19)\r\n\tat com.itsd.test.steps.IncomeSourceEOPSSteps.stub(IncomeSourceEOPSSteps.java:26)\r\n\tat ✽.I have the stub /calculations/liability/1234567890123456/12345678,/RESPONSE/calculatorstore/GET_API#24 - Get Calculation Data_200_EXAMPLE_RESPONSE.json,200(src/test/resources/features/calculatorstore/CalculatorStore.feature:8)\r\nCaused by: java.lang.RuntimeException: java.net.BindException: Address already in use: bind\r\n\tat com.github.tomakehurst.wiremock.jetty9.JettyHttpServer.start(JettyHttpServer.java:139)\r\n\tat com.github.tomakehurst.wiremock.WireMockServer.start(WireMockServer.java:144)\r\n\tat com.itsd.test.config.GetStub.setUpStub(GetStub.java:19)\r\n\tat com.itsd.test.steps.IncomeSourceEOPSSteps.stub(IncomeSourceEOPSSteps.java:26)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:283)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:173)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:153)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:128)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\nCaused by: java.net.BindException: Address already in use: bind\r\n\tat java.base/sun.nio.ch.Net.bind0(Native Method)\r\n\tat java.base/sun.nio.ch.Net.bind(Net.java:433)\r\n\tat java.base/sun.nio.ch.Net.bind(Net.java:425)\r\n\tat java.base/sun.nio.ch.ServerSocketChannelImpl.bind(ServerSocketChannelImpl.java:225)\r\n\tat java.base/sun.nio.ch.ServerSocketAdaptor.bind(ServerSocketAdaptor.java:74)\r\n\tat org.eclipse.jetty.server.ServerConnector.open(ServerConnector.java:298)\r\n\tat org.eclipse.jetty.server.AbstractNetworkConnector.doStart(AbstractNetworkConnector.java:80)\r\n\tat org.eclipse.jetty.server.ServerConnector.doStart(ServerConnector.java:236)\r\n\tat org.eclipse.jetty.util.component.AbstractLifeCycle.start(AbstractLifeCycle.java:68)\r\n\tat org.eclipse.jetty.server.Server.doStart(Server.java:431)\r\n\tat org.eclipse.jetty.util.component.AbstractLifeCycle.start(AbstractLifeCycle.java:68)\r\n\tat com.github.tomakehurst.wiremock.jetty9.JettyHttpServer.start(JettyHttpServer.java:137)\r\n\t... 42 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "A valid unique identifier of taxpayer 1234567890123456 exists",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculationStoreSteps.getTaxPayerDetails(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "valid unique identifier of the calculation 12345678 exists",
  "keyword": "And "
});
formatter.match({
  "location": "CalculationStoreSteps.getCalcId(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I get 1234567890123456,12345678",
  "keyword": "When "
});
formatter.match({
  "location": "CalculationStoreSteps.accessEndPoint(String,String)"
});
formatter.result({
  "status": "skipped"
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
formatter.step({
  "name": "I stop the stub",
  "keyword": "Then "
});
formatter.match({
  "location": "IncomeSourceEOPSSteps.stopStub()"
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
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c202\u003e but was \u003c409\u003e.\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:482)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:654)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:124)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:132)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:119)\r\n\tat com.itsd.test.tests.IncomeSourceEOPSTest.validatePostResponseCode(IncomeSourceEOPSTest.java:35)\r\n\tat com.itsd.test.steps.IncomeSourceEOPSSteps.verifyPostStatusCode(IncomeSourceEOPSSteps.java:61)\r\n\tat ✽.I should see the response status code for post as 202(src/test/resources/features/incomesourcestore/RetrieveIncomeSourceDetails.feature:19)\r\n",
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