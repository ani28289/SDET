Feature: Verification of elearning.gm functionalities

  Scenario Outline: verify the website of elearning.gm
    Given the user opens the elearning webpage
    And user clicks on signup button
    When the registration page opens
    And user enters mandatory values first name as  "<Firstname>" last name as "<Lastname>" email as "<email>" username as "<username>" password as "<password>" confirm "<confirmpassword>"
    When clicks on register button
    Then the registration is successful msg is seen
    And the user clicks on the dropdown in top right corner
    And check if the emaild id is matched with the mail id given by user
    Then click on inbox and compose a new email
    And enter the email id to be sent email id as "<emailname>" subject as "<subject>" message as  "<message>" description as "<description>"
    And click on send message button
    Then the mail is successfully sent

    Examples: 
      | Firstname | Lastname | email             | username  | password     | confirmpassword | emailname | subject | message  | descrpition       |
      | Ruser11   | Rser23   | Ruser11@gmail.com | Ruser11xy | garrick2014@ | garrick2014@    | virat     | testing | Hi Virat | testing the email |
