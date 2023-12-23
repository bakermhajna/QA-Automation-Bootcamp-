package infrastructure;

import org.openqa.selenium.WebDriver;

public class BasePage {


    WebDriver driver;
    public BasePage(WebDriver driver){
        this.driver=driver;
        initPage();
    }

    public WebDriver getDriver() {
        return driver;
    }

    public void setDriver(WebDriver driver) {
        this.driver = driver;
    }

    private void initPage(){

    }
    public void refresh() {
    driver.navigate().refresh();
    }
    public void maxpage(){
        driver.manage().window().maximize();
    }















}
