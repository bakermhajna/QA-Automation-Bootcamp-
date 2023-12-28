package org.example;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;

public class test {

    private static DesiredCapabilities caps = new DesiredCapabilities();
    private AppiumDriver driver;
    private WebDriverWait wait;
    private static final String deviceName="R5CR112FFGV";

    @BeforeAll
    public static void beforeAll(){
        caps.setCapability("platformName", "Android");
        caps.setCapability("deviceName",deviceName );
        caps.setCapability("platformVersion", "13");
        caps.setCapability("automationName", "UiAutomator2");
    }
    @BeforeEach
    public void beforeEach() throws MalformedURLException {
        caps.setCapability("appPackage", "com.android.settings");
        caps.setCapability("appActivity", ".Settings");
        driver = new AndroidDriver(new URL("http://localhost:4723"), caps);
        wait = new WebDriverWait(driver, Duration.ofSeconds(3));
    }

    @Test
    public void checkdisplay()  {
        //arrange
        WebElement display = driver.findElement(By.xpath("//androidx.recyclerview.widget.RecyclerView[@resource-id=\"com.android.settings:id/recycler_view\"]/android.widget.LinearLayout[7]"));
        display.click();

        //act
        WebElement button =wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//android.widget.Switch[@resource-id=\"android:id/switch_widget\"])[1]")));
        button.click();
        //assert
        String checked = button.getAttribute("checked");
        Assertions.assertEquals("true",checked);
    }

    @Test
    public void textInput(){
        WebElement searchButton =wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//androidx.appcompat.widget.LinearLayoutCompat")));
        searchButton.click();
        WebElement searchBar =wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//android.widget.AutoCompleteTextView[@resource-id=\"com.android.settings.intelligence:id/search_src_text\"]")));
        searchBar.sendKeys("display");
        Utils.sendEnter(deviceName);
    }
}
