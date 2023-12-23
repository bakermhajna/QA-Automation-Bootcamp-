package logic;
import infrastructure.BasePage;
import logic.enums.SeasonTypes;
import logic.enums.StatusCategory;
import logic.enums.perMode;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class MainPage extends BasePage {


    private final String TEAM_PLAYER_BUTTON="//*[@id=\"__next\"]/div[2]/div[2]/div[3]/section[1]/div/nav/div[1]/button/span";
    private final String SEASON_SELECT="//*[@id=\"__next\"]/div[2]/div[2]/div[3]/section[1]/div/div/div[1]/label/div/select";
    private final String SEASON_TYPE_SELECT="//*[@id=\"__next\"]/div[2]/div[2]/div[3]/section[1]/div/div/div[2]/label/div/select";
    private final String PER_MODE_SELECT="//*[@id=\"__next\"]/div[2]/div[2]/div[3]/section[1]/div/div/div[3]/label/div/select";
    private final String SEASON_SEGMENT_SELECT="//*[@id=\"__next\"]/div[2]/div[2]/div[3]/section[1]/div/div/div[4]/label/div/select";
    private final String STATUS_CATEGORY_SELECT="//*[@id=\"__next\"]/div[2]/div[2]/div[3]/section[1]/div/div/div[4]/label/div/select";

    WebElement statusCategory;
    WebElement seasonSegmentSelector;
    WebElement perModeSelector;
    WebElement seasonTypeSelector;
    WebElement seasonSelector;
    WebElement teamPlayerButton;

    public MainPage(WebDriver driver) {
        super(driver);
        initPage();
    }

    private void initPage(){
        this.teamPlayerButton=this.getDriver().findElement(By.xpath(TEAM_PLAYER_BUTTON));
        this.seasonSelector=this.getDriver().findElement(By.xpath(SEASON_SELECT));
        this.seasonTypeSelector=this.getDriver().findElement(By.xpath(SEASON_TYPE_SELECT));
        this.seasonSegmentSelector=this.getDriver().findElement(By.xpath(SEASON_SEGMENT_SELECT));
        this.perModeSelector=this.getDriver().findElement(By.xpath(PER_MODE_SELECT));
        this.statusCategory=this.getDriver().findElement(By.xpath(STATUS_CATEGORY_SELECT));
    }


    public void selectSeasonSegment(int game){
        Select selector =new Select(seasonSegmentSelector);
        selector.selectByValue("LastNGames="+game);
    }
    public void selectStatusGategory(StatusCategory category){
        Select selector =new Select(statusCategory);
        selector.selectByValue(category.toString());
    }

    public void selectPerMode(perMode mode){
        Select selector =new Select(perModeSelector);
        selector.selectByValue(mode.getValue());
    }
    public void selectSeason(String season){
        Select selector =new Select(seasonSelector);
        selector.selectByValue(season);
    }
    public void selectSeasonType(SeasonTypes seasontype){
        Select selector =new Select(seasonTypeSelector);
        selector.selectByValue(seasontype.getValue());
    }
    public void clickTeamPlayerButton(){
        teamPlayerButton.click();
    }

    public void chosePlayers(){
        getDriver().findElement(By.xpath("//*[@id=\"__next\"]/div[2]/div[2]/div[3]/section[1]/div/nav/div[1]/ul/li[1]/a")).click();
    }
    public void choseTeams(){
        getDriver().findElement(By.xpath("//*[@id=\"__next\"]/div[2]/div[2]/div[3]/section[1]/div/nav/div[1]/ul/li[2]")).click();
    }
    public void ClickAccept(){
        getDriver().findElement(By.xpath("//*[@id=\"onetrust-accept-btn-handler\"]")).click();
    }

    public boolean checkFilterSeasonType(){
        WebElement Filter= getDriver().findElement(By.cssSelector("#__next > div.Layout_base__6IeUC.Layout_justNav__2H4H0.Layout_withSubNav__ByKRF > div.Layout_mainContent__jXliI > div.MaxWidthContainer_mwc__ID5AG > section:nth-child(1) > div > div > div.SplitsPills_sp__GHtfm > div"));
        return Filter.isDisplayed();

    }
    public boolean checkFilterSeason(){
        WebDriverWait wait = new WebDriverWait(getDriver(), 10);
        WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"__next\"]/div[2]/div[2]/div[3]/section[1]/div/div/div[6]/div")));
        return element.isDisplayed();

    }
    public boolean checkFilter(){
        WebDriverWait wait = new WebDriverWait(getDriver(), 10);
        WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"__next\"]/div[2]/div[2]/div[3]/section[1]/div/div/div[6]/div")));
        return element.isDisplayed();

    }



}
