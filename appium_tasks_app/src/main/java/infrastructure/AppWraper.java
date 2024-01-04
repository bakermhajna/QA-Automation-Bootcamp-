package infrastructure;

import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.MalformedURLException;
import java.net.URL;

public class AppWraper {

    private static DesiredCapabilities caps = new DesiredCapabilities();

    private AndroidDriver driver;
    PropertiesWrapper properties=new PropertiesWrapper();
    public AppWraper()  {
        caps.setCapability("platformName", properties.getProperties(("platformName")));
        caps.setCapability("deviceName", properties.getProperties(("deviceName")));
        caps.setCapability("platformVersion", properties.getProperties(("platformVersion")));
        caps.setCapability("automationName", properties.getProperties(("automationName")));
        caps.setCapability("appPackage", properties.getProperties(("appPackage")));
        caps.setCapability("appActivity", properties.getProperties(("appActivity")));
        try {
            driver=new AndroidDriver(new URL(properties.getProperties(("URL"))),caps);
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
    }

    public AndroidDriver getDriver(){
        return driver;
    }


}
