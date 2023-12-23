package steps;
import io.cucumber.java.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import utils.TestContext;

public class Hooks {

    WebDriver driver;
    TestContext testContext;
    public Hooks(TestContext testContext){
        this.testContext = testContext;
    }

    @BeforeAll
    public static void setUp() {
        System.setProperty("webdriver.chrome.driver","chromedriver.exe");
    }

    @AfterAll
    public static void tearDown() {


    }

    @Before
    public void beforeEachTest() {
        driver = new ChromeDriver();
        testContext.put("driver",driver);

    }
    @After
    public void afterEachTest() {
        driver.close();
    }





}
