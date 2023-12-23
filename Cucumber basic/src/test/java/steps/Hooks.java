package steps;
import infrastructure.enums.Browser;
import io.cucumber.java.*;
import utils.TestContext;
import infrastructure.BrwoserWarpper;
import static utils.utils.takeScreenshot;

public class Hooks {

    private BrwoserWarpper browserwraber;
    private TestContext testContext;
    private Scenario scenario;

    public Hooks(TestContext testContext){
        this.browserwraber= new BrwoserWarpper("chromedriver.exe", Browser.CHROME);
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
        browserwraber.initBrowser();
        testContext.put("driver",browserwraber.getDriver());

    }
    @After
    public void afterEachTest(Scenario scenario) {
        if (scenario.isFailed()) {
            //takeScreenshot(scenario.getName(),browserwraber.getDriver(),scenario);
        }
        browserwraber.closeDriver();
    }






}
