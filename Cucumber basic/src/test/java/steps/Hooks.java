package steps;
import infrastructure.enums.Browser;
import io.cucumber.java.*;
import utils.TestContext;
import infrastructure.Infra;

public class Hooks {

    private Infra infra;
    private TestContext testContext;
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
    public void beforeEachTest() {
        infra.initBrowser();
        testContext.put("driver",infra.getDriver());

    }
    @After
    public void afterEachTest() {
        infra.closeDriver();
    }





}
