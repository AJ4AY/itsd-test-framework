@API#40
@IBDStore

@Integration
@Regression
Feature:IBD Store
  As a user
  I want to Retrieves a list of all periods and their financial data associated with a given Self Employment.
  The data returned can be limited using query parameters.
  If startDateQuery and endDateQuery are both provided,
  only data periods that lie fully within the query parameters are returned.
  If returnLimitedDataQuery is true, then no financial data will be returned (only startDate, endDate, receivedTime and ibdSubmissionPeriodId).

  Background:
    Given I have valid unique identifier for taxEntityId
    And valid unique identifier for incomeSourceId
    And I have valid income source payload
    When I post the income source details
    Then I should see the response status code for post as 201
#    Given I have valid unique identifier for taxEntityId
#    And valid unique identifier for incomeSourceId
    And I have valid self assessment period details
    When I post valid self assessment period details
    Then I should see the response status code for self employment period as 201

  Scenario: Retrieves a list of all periods and their financial data associated with a given Self Employment(API#40)
    Given I have valid unique taxEntityId for self employment period
    And valid unique identifier for incomeSourceId
    When I retrieve the self employments period details
    Then I should see the response status code for self employment period as 200

