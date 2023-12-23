package infrastructure;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;

import java.time.Duration;

public class infra {

    private static WebDriver driver;
    private infra(WebDriver driver){
        this.setDriver(driver);
    }

    public static infra initInfra(String driverPath,String webLink){
            System.setProperty("webdriver.edge.driver",driverPath);
            EdgeDriver driver = new EdgeDriver();
            driver.get(webLink);
            return new infra(driver);
    }

    public void closeDriver(){
        driver.close();
    }

    public WebDriver getDriver() {
        return driver;
    }

    public void setDriver(WebDriver driver) {
        this.driver = driver;
    }
}
