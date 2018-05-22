@API#36-Post
@IncomeSourcesStore

@Integration
@Regression

Feature:
  As a user
  I want to create income source for a given taxEntityId and incomeSourceId
  so that  view the EOPS results


  Scenario: create income source for a valid taxEntityId and incomeSourceId

#    Given I have the stub <api>,<filepath>,<statusCode>

    Given I have valid unique identifier for taxEntityId
    And valid unique identifier for incomeSourceId
    And I have valid income source details
    When I post the income source details
    Then I should see the response status code for post as 202

#    Then I stop the stub

