package steps;
import infrastructure.enums.Browser;
import io.cucumber.java.*;
import org.openqa.selenium.OutputType;
import utils.TestContext;
import infrastructure.Infra;
import org.openqa.selenium.TakesScreenshot;

public class Hooks {

    private Infra infra;
    private TestContext testContext;
    private Scenario scenario;
    public Hooks(TestContext testContext){
        this.infra= new Infra("chromedriver.exe", Browser.CHROME);
        this.testContext = testContext;
    }

    @BeforeAll
    public static void setUp() {

    }

    @AfterAll
    public static void tearDown() {


    }

    @Before
    public void beforeEachTest(Scenario scenario) {
        this.scenario = scenario;
        infra.initBrowser();
        testContext.put("driver",infra.getDriver());

    }
    @After
    public void afterEachTest(Scenario scenario) {
        if (scenario.isFailed()) {
            takeScreenshot(scenario.getName());
        }
        infra.closeDriver();
    }
    private void takeScreenshot(String testName) {
        if (infra.getDriver() instanceof TakesScreenshot) {
            TakesScreenshot takesScreenshot = (TakesScreenshot) infra.getDriver();
            byte[] screenshot = takesScreenshot.getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot, "image/png", testName + "_screenshot");
        }
    }





}
