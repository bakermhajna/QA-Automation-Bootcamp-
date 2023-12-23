Feature: Filter Feature
#  Scenario: Filter by season type
#    Given I am on the player page
#    When I select season type as "Playoffs"
#    Then validate season type filter is on
#
#
#
#  Scenario: Filter by season type
#    Given I am on the player page
#    When I select "2022-23" season
#    Then validate season filter is on



#  Scenario: Filter by season category
#    Given I am on the player page
#    When I select season category as "EFF"
#    Then validate filter is on


  Scenario: Filter by per mode
    Given I am on the player page
    When I select season Segment as last 4 Game
    Then validate filter is on
