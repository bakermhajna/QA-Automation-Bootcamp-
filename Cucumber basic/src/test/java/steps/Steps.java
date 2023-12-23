package steps;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import logic.MainPage;
import logic.enums.SeasonTypes;
import logic.enums.StatusCategory;
import logic.enums.perMode;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.WebDriver;
import utils.TestContext;


public class Steps {

    private WebDriver driver;
    private TestContext testContext;
    private MainPage mainPage;
    public Steps(TestContext testContext){
        this.testContext = testContext;
        driver=this.testContext.get("driver");
    }


    @Given("I am on the player page")
    public void i_am_on_the_palyer_page()  {
        WebDriver driver =testContext.get("driver");
        driver.get("https://www.nba.com/stats/players/traditional");
        mainPage=new MainPage(driver);
        mainPage.maxpage();
        mainPage.ClickAccept();
    }
    @Given("I am on the team page")
    public void i_am_on_the_team_page()  {
        driver.get("https://www.nba.com/stats/teams/traditional");
        MainPage mainPage=new MainPage(driver);
        mainPage.maxpage();
        mainPage.ClickAccept();
    }

    @When("I select season category as \"([^\"]*)\"$")
    public void i_select_season_category(StatusCategory category) {
        mainPage.selectStatusGategory(category);
    }

    @When("I select {string} season")
    public void i_select_season(String season) {
        mainPage.selectSeason(season);
    }

    @When("I select season type as \"([^\"]*)\"$")
    public void i_select_season_type(SeasonTypes season) {
        mainPage.selectSeasonType(season);
        mainPage.refresh();
    }
    @When("I select season Segment as last {int} Game")
    public void i_select_season(int game) {
        mainPage.selectSeasonSegment(game);
    }

    @When("I select Per mode as \"([^\"]*)\"$")
    public void i_select_season(perMode mode) {
        mainPage.selectPerMode(mode);
    }

    @Then("validate filter is on")
    public void validate_filter_is_on(){
        Assertions.assertTrue(mainPage.checkFilter());
    }




}