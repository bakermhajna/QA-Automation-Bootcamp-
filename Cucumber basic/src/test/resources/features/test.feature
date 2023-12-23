Feature: Filter Feature
  Scenario: Filter by season type
    Given I am on the player page
    When I select season type as "Playoffs"
    Then validate filter is on


  Scenario: Filter by season
    Given I am on the player page
    When I select "2022-23" season
    Then validate filter is on


  Scenario: Filter by season segment
    Given I am on the player page
    When I select season Segment as last 4 Game
    Then validate filter is on


  Scenario: Filter by per mode
    Given I am on the player page
    When I select Per mode as "PER100POSS"
    Then validate filter is on
