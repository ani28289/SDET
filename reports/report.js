$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("assignment1.feature");
formatter.feature({
  "line": 1,
  "name": "Verification of elearning.gm functionalities",
  "description": "",
  "id": "verification-of-elearning.gm-functionalities",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "verify the website of elearning.gm",
  "description": "",
  "id": "verification-of-elearning.gm-functionalities;verify-the-website-of-elearning.gm",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user opens the elearning webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on signup button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the registration page opens",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters mandatory values first name as  \"\u003cFirstname\u003e\" last name as \"\u003cLastname\u003e\" email as \"\u003cemail\u003e\" username as \"\u003cusername\u003e\" password as \"\u003cpassword\u003e\" confirm \"\u003cconfirmpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on register button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the registration is successful msg is seen",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user clicks on the dropdown in top right corner",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "check if the emaild id is matched with the mail id given by user",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on inbox and compose a new email",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "enter the email id to be sent email id as \"\u003cemailname\u003e\" subject as \"\u003csubject\u003e\" message as  \"\u003cmessage\u003e\" description as \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on send message button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the mail is successfully sent",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "verification-of-elearning.gm-functionalities;verify-the-website-of-elearning.gm;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "email",
        "username",
        "password",
        "confirmpassword",
        "emailname",
        "subject",
        "message",
        "descrpition"
      ],
      "line": 18,
      "id": "verification-of-elearning.gm-functionalities;verify-the-website-of-elearning.gm;;1"
    },
    {
      "cells": [
        "Quser11",
        "Qser23",
        "Quser11@gmail.com",
        "Quser11xy",
        "garrick2014@",
        "garrick2014@",
        "virat",
        "testing",
        "Hi Virat",
        "testing the email"
      ],
      "line": 19,
      "id": "verification-of-elearning.gm-functionalities;verify-the-website-of-elearning.gm;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2049131600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "verify the website of elearning.gm",
  "description": "",
  "id": "verification-of-elearning.gm-functionalities;verify-the-website-of-elearning.gm;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user opens the elearning webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on signup button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the registration page opens",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters mandatory values first name as  \"Quser11\" last name as \"Qser23\" email as \"Quser11@gmail.com\" username as \"Quser11xy\" password as \"garrick2014@\" confirm \"garrick2014@\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on register button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the registration is successful msg is seen",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user clicks on the dropdown in top right corner",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "check if the emaild id is matched with the mail id given by user",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on inbox and compose a new email",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "enter the email id to be sent email id as \"virat\" subject as \"testing\" message as  \"Hi Virat\" description as \"\u003cdescription\u003e\"",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on send message button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the mail is successfully sent",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitionclass.the_user_opens_the_elearning_webpage()"
});
formatter.result({
  "duration": 8055224400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitionclass.user_clicks_on_signup_button()"
});
formatter.result({
  "duration": 1460714600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitionclass.the_registration_page_opens()"
});
formatter.result({
  "duration": 105300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Quser11",
      "offset": 45
    },
    {
      "val": "Qser23",
      "offset": 68
    },
    {
      "val": "Quser11@gmail.com",
      "offset": 86
    },
    {
      "val": "Quser11xy",
      "offset": 118
    },
    {
      "val": "garrick2014@",
      "offset": 142
    },
    {
      "val": "garrick2014@",
      "offset": 165
    }
  ],
  "location": "stepdefinitionclass.user_enters_mandatory_values_first_name_as_last_name_as_email_as_username_as_password_as_confirm(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 453611000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitionclass.clicks_on_register_button()"
});
formatter.result({
  "duration": 1829162000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitionclass.the_registration_is_successful_msg_is_seen()"
});
formatter.result({
  "duration": 70600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitionclass.the_user_clicks_on_the_dropdown_in_top_right_corner()"
});
formatter.result({
  "duration": 3068459300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitionclass.check_if_the_emaild_id_is_matched_with_the_mail_id_given_by_user()"
});
formatter.result({
  "duration": 72100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitionclass.click_on_inbox_and_compose_a_new_email()"
});
formatter.result({
  "duration": 9901161700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "virat",
      "offset": 43
    },
    {
      "val": "testing",
      "offset": 62
    },
    {
      "val": "Hi Virat",
      "offset": 84
    },
    {
      "val": "\u003cdescription\u003e",
      "offset": 110
    }
  ],
  "location": "stepdefinitionclass.enter_the_email_id_to_be_sent_email_id_as_subject_as_message_as_description_as(String,String,String,String)"
});
formatter.result({
  "duration": 5303691900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitionclass.click_on_send_message_button()"
});
formatter.result({
  "duration": 1966173100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinitionclass.the_mail_is_successfully_sent()"
});
formatter.result({
  "duration": 713647600,
  "status": "passed"
});
});