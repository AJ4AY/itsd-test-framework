package com.itsd.test.datasets;

import com.itsd.test.datagenerators.Constants;
import com.itsd.test.datagenerators.DateGenerator;
import org.json.JSONObject;

import java.util.Arrays;
import java.util.HashMap;

public class IncomeSourceEOPSRequestBody implements Constants {

    public JSONObject requestParams;
    private DateGenerator dateGenerator;

    public IncomeSourceEOPSRequestBody() {
        dateGenerator = new DateGenerator();
    }

    public void getIncomeSourceEOPSRequestBodyDetails() {
        requestParams = new JSONObject();
//        requestParams.put("cessationDate", dateGenerator.startDate());
        requestParams.put("commencementDate", dateGenerator.startDate());
        requestParams.put("incomeSourceId", incomeSourceId);
        requestParams.put("incomeSourceName", incomeSourceName);
        requestParams.put("taxationPeriods", Arrays.asList(new HashMap<String, Object>() {{
            put("accountingPeriodStartDate", dateGenerator.startDate());
            put("accountingPeriodEndDate", dateGenerator.endDate());
//            put("basisPeriodStartDate", dateGenerator.startDate());
//            put("basisPeriodEndDate", dateGenerator.endDate());
//            put("obligations", Arrays.asList(new HashMap<String, Object>() {{
//                put("ObligationPeriodStartDate", dateGenerator.startDate());
//                put("ObligationPeriodEndDate", dateGenerator.endDate());
//            }}));
        }}));
        requestParams.put("taxEntityId", taxEntityId);
        requestParams.put("incomeSourceType", incomeSourceType);
    }
}