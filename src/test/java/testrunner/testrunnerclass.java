package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features = "src/test/java/feature"
		,glue= {"stepdefinition","utilities"},
		//tags= {"@Regression","@Smoke"}  //AND Condition
		//tags= {"@Regression,@Smoke"}  //OR Condition
				//tags= {"@Regression"},
				monochrome = true,
			//dryRun = false,
			plugin = {"pretty", "html:reports/" , "json:reports/jsonreport.json", "junit:reports/xmlreport.xml"}
		)	

public class testrunnerclass {

}
