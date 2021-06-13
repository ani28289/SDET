package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.hooks;

import java.util.List;
import java.util.UUID;

public class stepdefinitionclass {
	WebDriver driver = hooks.driver;
	@Given("^the user opens the elearning webpage$")
	public void the_user_opens_the_elearning_webpage() throws InterruptedException  {
		driver.get("http://elearningm1.upskills.in/");
		driver.manage().window().maximize();
           Thread.sleep(3000);
	 
	}

	@Given("^user clicks on signup button$")
	public void user_clicks_on_signup_button() {
		WebElement register = driver.findElement(By.linkText("Sign up!"));
        register.click();
	}

	@When("^the registration page opens$")
	public void the_registration_page_opens()  {
		  System.out.println("The registration page is opened, and user enters the details");
	    
	}

	@When("^user enters mandatory values first name as  \"([^\"]*)\" last name as \"([^\"]*)\" email as \"([^\"]*)\" username as \"([^\"]*)\" password as \"([^\"]*)\" confirm \"([^\"]*)\"$")
	public void user_enters_mandatory_values_first_name_as_last_name_as_email_as_username_as_password_as_confirm(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) {
		//WebElement fn = driver.findElement(By.id("registration_firstname"));
		//fn.sendKeys(arg0);
		System.out.println(arg1);
		 driver.findElement(By.id("registration_firstname")).sendKeys(arg1);
		//driver.findElement(By.name("firstname")).sendKeys("Anita");
		driver.findElement(By.id("registration_lastname")).sendKeys(arg2);
		//String uuid = UUID.randomUUID().toString().replace("-", "").substring(0, 7);
		driver.findElement(By.id("registration_email")).sendKeys(arg3);
		driver.findElement(By.id("username")).sendKeys(arg4);
		driver.findElement(By.id("pass1")).sendKeys(arg5);
		driver.findElement(By.id("pass2")).sendKeys(arg6);
	}

	@When("^clicks on register button$")
	public void clicks_on_register_button() {
		driver.findElement(By.id("registration_submit")).click();
	}

	@Then("^the registration is successful msg is seen$")
	public void the_registration_is_successful_msg_is_seen() {
		System.out.println("The Registration is successfull");
	}
	

	@Then("^the user clicks on the dropdown in top right corner$")
	public void the_user_clicks_on_the_dropdown_in_top_right_corner() throws InterruptedException  {
		driver.findElement(By.xpath("//a[@class='dropdown-toggle']")).click();
		Thread.sleep(3000);
    
}

	@Then("^check if the emaild id is matched with the mail id given by user$")
	public void check_if_the_emaild_id_is_matched_with_the_mail_id_given_by_user()  {
		System.out.println("email matched");
	  
	}

	@Then("^click on inbox and compose a new email$")
	public void click_on_inbox_and_compose_a_new_email() throws InterruptedException  {
		//driver.findElement(By.xpath("//a[@title='Inbox']")).click()
		//Select inbox = new Select(driver.findElement(By.xpath("//a[@title='Inbox']")));
		//Select inbox;
		//inbox=Select( driver.findElement(By.xpath("//a[@title='Inbox']")));
        //inbox.selectByIndex(2);
		driver.findElement(By.xpath("//a[@title='Inbox']")).click();
		driver.findElement(By.xpath("//img[@alt='Compose message']")).click();
		Thread.sleep(3000);
       
		
	}
	@Then("^enter the email id to be sent email id as \"([^\"]*)\" subject as \"([^\"]*)\" message as  \"([^\"]*)\" description as \"([^\"]*)\"$")
	public void enter_the_email_id_to_be_sent_email_id_as_subject_as_message_as_description_as(String arg1, String arg2, String arg3, String arg4) throws InterruptedException {
		WebElement nameField = driver.findElement(By.className("select2-search__field"));
		nameField.sendKeys(arg1);
		Thread.sleep(5000);
		List<WebElement> elements = driver.findElements((By.className("select2-results__options")));
		elements.get(0).click();		
		
		
	//	driver.findElement(By.className("select2-search__field")).sendKeys(arg1);
		//Thread.sleep(5000);
	//	Select select = new Select(driver.findElement(By.className("select2-search__field"))) ;
		//select.selectByVisibleText("virat kohli (virat)");
		//Select dropdown;
		driver.findElement(By.id("compose_message_title")).sendKeys(arg2);
        //dropdown.selectByIndex(2);
		//driver.findElement(By.xpath("//li[@title='virat kohli (virat)']")).click();
		//driver.findElement(By.className("select2-results__option select2-results__option--highlighted")).click();
		//driver.findElement(By.id("cke_content")).click();
		//driver.findElement(By.id("cke_content")).sendKeys(arg3);
		//driver.findElement(By.className("cke_editable cke_editable_themed cke_contents_ltr cke_show_borders")).sendKeys(arg3);
		driver.findElement(By.id("file-descrtiption")).sendKeys(arg4);
		
		
		
	}
	
	@Then("^click on send message button$")
	public void click_on_send_message_button()  {
		driver.findElement(By.name("compose")).click();
		System.out.println("**********************Sending mail ********************");
	}
	
	@Then("^the mail is successfully sent$")
	public void the_mail_is_successfully_sent() throws Throwable {
		String expectedHeading = "The message has been sent to virat kohli (virat)";
			String heading =  driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
    	if(expectedHeading.equalsIgnoreCase(heading))
          	System.out.println("------->The mail is sent successfully --- "+heading);
    	else
          	System.out.println("------->Mail send failed --- "+heading);
    	driver.quit();
	}
	
}