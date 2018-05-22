Feature:
  As a User I want to view the
  retrieved calculations from the store
  so that I can view the reference to the calculation

  Scenario Outline: Retrieve calculation results of a taxpayer with valid identifiers

#    Given I have the stub <api>,<filepath>,<statusCode>
    Given A <type> unique identifier of taxpayer <taxpayerId> exists
    And <type> unique identifier of the calculation <calcId> exists
    When I get <taxpayerId>,<calcId>
    Then I should see the response status code as <statusCode>
    And I should see the following entities in the response body
      | calcTimestamp                                            | 2018-04-25T07:02:27.785Z |
      | calcID                                                   | string                   |
      | calcType                                                 | string                   |
      | calcName                                                 | string                   |
      | calcVersion                                              | string                   |
      | calcVersionDate                                          | string                   |
      | calcAmount                                               | 0                        |
      | calcSummary.nationalRegime                               | UK                       |
      | calcSummary.incomeTax                                    | 0                        |
      | calcResult.incomeTaxNicDelta                             | 0                        |
      | calcResult.taxableIncome.totalIncomeReceived             | 0                        |
      | calcResult.taxableIncome.incomeReceived.employmentIncome | 0                        |
#    Then I stop the stub

    Examples:
      | type  | taxpayerId       | calcId   | statusCode | api                                               | filepath                                                                              |
      | valid | 1234567890123456 | 12345678 | 200        | /calculations/liability/1234567890123456/12345678 | /RESPONSE/calculatorstore/GET_API#24 - Get Calculation Data_200_EXAMPLE_RESPONSE.json |
#
#  Scenario Outline: Retrieve calculation results of a taxpayer with invalid identifiers
#    Given I have the stub <api>,<filepath>,<statusCode>
#
#    Given A <type> unique identifier of taxpayer <taxpayerId> exists
#    And <type> unique identifier of the calculation <calcId> exists
#    When I get <taxpayerId>,<calcId>
#    Then I should see the response status code as <statusCode>
#    Then I stop the stub
#    Examples:
#      | type    | taxpayerId | calcId    | statusCode | api                                               | filepath                                                                              |
#      | invalid |            |           | 404        | /calculations/liability/1234567890123456/12345678 | /RESPONSE/calculatorstore/GET_API#24 - Get Calculation Data_200_EXAMPLE_RESPONSE.json |
#      | invalid |            | 123245678 | 401        | /calculations/liability/1234567890123456/12345678 | /RESPONSE/calculatorstore/GET_API#24 - Get Calculation Data_200_EXAMPLE_RESPONSE.json |
#      | invalid |            |           | 422        | /calculations/liability/1234567890123456/12345678 | /RESPONSE/calculatorstore/GET_API#24 - Get Calculation Data_200_EXAMPLE_RESPONSE.json |
#      | invalid |            |           | 502        | /calculations/liability/1234567890123456/12345678 | /RESPONSE/calculatorstore/GET_API#24 - Get Calculation Data_200_EXAMPLE_RESPONSE.json |