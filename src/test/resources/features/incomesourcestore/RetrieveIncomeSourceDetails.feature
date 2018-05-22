@API#36
@IncomeSourcesStore

@Integration
@Regression


Feature:
  As a user
  I want to retrieve income source details for a given taxEntityId
  so that  view the retrieved EOPS income source details

  Scenario:Retrieve income source for a valid taxEntityId

    Given I have valid unique identifier for taxEntityId
    And valid unique identifier for incomeSourceId
    And I have valid income source details
    When I post the income source details
    Then I should see the response status code for post as 202
    When I retrieve the income source details
    Then I should see the response status code for income source as 200