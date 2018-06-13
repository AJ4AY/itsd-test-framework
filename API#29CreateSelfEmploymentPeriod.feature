@API#29
@IBDStore

@Integration
@Regression
Feature:IBD Store
  As a user
  I want to create a Self-Employment period for the given Income Source,
  and returns the Id used to identify this period in the future.

  Background:
    Given I have valid unique identifier for taxEntityId
    And valid unique identifier for incomeSourceId
    And I have valid income source payload
    When I post the income source details
    Then I should see the response status code for post as 201

  Scenario:Status code 201-Create Self-Employment period
    And I have valid self assessment period details
    When I post valid self assessment period details
    Then I should see the response status code for self employment period as 201

  Scenario:Status code 400-Create Self-Employment period with missing selfEmploymentPeriodDates
    And I have invalid self assessment period details
    When I post valid self assessment period details
    Then I should see the response status code for self employment period as 400

  Scenario:Status code 404-Create Self-Employment period with missing income source
    And I have valid self assessment period details
    When I post invalid self assessment period details
    Then I should see the response status code for self employment period as 404
