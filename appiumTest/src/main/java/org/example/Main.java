package org.example;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;

public class Main {
    public static void main(String[] args) throws MalformedURLException {
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setCapability("platformName", "Android");
        caps.setCapability("deviceName", "R5CR112FFGV");
        caps.setCapability("platformVersion", "13");
        caps.setCapability("automationName", "UiAutomator2");
        caps.setCapability("appPackage", "com.android.settings");
        caps.setCapability("appActivity", ".Settings");


        // Use AppiumDriver instead of AndroidDriver
        AppiumDriver driver = new AndroidDriver(new URL("http://localhost:4723"), caps);

        // Find elements using MobileElement
        WebElement display = driver.findElement(By.xpath("//androidx.recyclerview.widget.RecyclerView[@resource-id=\"com.android.settings:id/recycler_view\"]/android.widget.LinearLayout[7]"));
        display.click();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(3));

        WebElement button =wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("(//android.widget.Switch[@resource-id=\"android:id/switch_widget\"])[1]")));
        button.click();
        String checked = button.getAttribute("checked");
        Assertions.assertEquals("true",checked);

        // Cleanup
        driver.quit();
    }
}
