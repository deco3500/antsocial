#Antsocial

##Promotional material
https://github.com/deco3500/antsocial/blob/master/promotional%20website/index.html/

##Prototype Link
https://github.com/deco3500/antsocial
##Summary
Locals is an online community web application that groups people based on the location/suburb that they live in. In these groups, the users are also split into different subgroups based on their interest such as sport, entertainment, business, culture and life. News that are related to that location/suburb will be posted to that group so people can get up-to-date information on what is happening around them. The user is also able to express their opinion or leave feedback in the web application. Other than news, the user can also post other messages to the web application such as garage sales, lost items or advertisements etc. on the web application for the local community.
“Armed with easy-to-use Web publishing tools, always-on connections and increasingly powerful mobile devices, the online audience has the means to become an active participant in the creation and dissemination of news and information.” (WeMedia) Locals not only present local news in a traditional way, but one of its major functionalities is that users post what they see in the news and express their opinions to share with others. It turns users into journalists in reporting news, which largely increases the news amount that users get to read.
“To comprehend journalistic value creation we need to focus on the benefits it provides.”(Why journalists deserve low pay) Nowadays, as most of the news websites focus on the content of the news, this web application focuses on the place/area in which the news/event happened and delivers this information to the user group. One of the benefits in using this application is the ability to receive news events that were not reported by the mainstream news media and receive instant updates from the people in the local area.  

#Design Process
###Research
####Research 1:
IT and social media consumption is increasing, resulting in the growth of citizen journalism. According a study of 200 blogs, Kerr et al. (2012), identified that blogs and online social media sites provided online users the power to influence and share their opinion with like-minded users. Furthermore, they found that online platforms increased the number of citizen journalists but formed an absence of impartiality.
Source: Buy, Boycott or Blog (Kerr, Mortimer, Dickinson, & Waller, 2012)


Within decades, mobile phones have gone from calling devices to multitalented tools that complement consumers’ ability to function. Today, they can call, text, email, post, and video through the internet. The Internet has evolved from a platform originally used to facilitate info-exchanging to a suitcase of social-networks that offer virtual-content-sharing (Kaplan & Haenlein, 2010). It is here where technology has transformed the way journalists, institutions and consumers distribute and receive news. In fact, social media is no longer being embraced for it’s traditional use. If you go into Google and search ‘Journalism apps’, the results will shows several headings along the lines of ‘Top 10 apps that every Journalist should have’.
Source: Google, Retrieved 2015, October
Mobile devices have become a common way for consumers to source information and data. Traditionally, this was achieved through online governmental or other institutional databases such as The National Archives’ Digital Archive of Data Sites. The sites originally provided users to only obtain information that was formatted. However, the sites now host forums to discuss their use of data and further relevant information. This has provided an element of interactivity, which has been well explored and used through other platforms.
According to Bradshaw & Rohumaa (2011), live data has become a useful tool for journalists to obtain information. The difference between such data is that it is not stored anywhere but is produced at a particular time, which can be useful in certain contexts. For example, newspapers are increasingly using Twitter commentary to provide background information to a debate that is current at the time. 

Link: http://www.statista.com/statistics/330638/politics-governement-news-social-media-news-usa/

This is certainly true in the data above that shows the social media platforms consumers use to source information on political and governmental activities in the US in 2014. As shown, Facebook was the number one site that online users relied on for receiving such news. However, a dilemma arises from this dependence on social media applications, which Bradshaw has summarized in the following questions:
- How will users filter these platforms to obtain news that is relevant and significant?
- How can information be visualized most clearly?
- How can you ensured that these platforms are not being intentionally skewed for commercial or political reasons?
- How much do you love to leave comments below the news?

####Research 2: Public Record Survey Questionnaire
The link to the survey that aims to view users’ thoughts about the accessibility of news. It will provide some insight into this issue, and if Locals would be suitable product solution.

Link: https://docs.google.com/forms/d/e/1FAIpQLSdTaKTeapIdaVqAdaqpRvwj8lkhTeIX6Biw8dFVFx6tVNVcsQ/viewform;

##Current offerings:
“Locals” dedicates to provide information sorted in categories, on regional basis, and to encourage users to be the reporters by publishing comments or posting news/events. A popular news web application, BuzzFeed also allows users to customize the categories of news/articles to read. Locals provides a similar functionality as to BuzzFeed as it also sort news into categories which users may choose to read. However, BuzzFeed does not allow users to select locations of where the news occurred nor search for a specific news event in specific areas. 

###Problem Identification
- Limited source of receiving news -- mainstream news media.
- Difficult to receive news in surrounding areas -- unless something huge happens and reported by the media.
- One-way communication -- people read the news, but no interactions can be done.
- Most of the online news platforms are designed in ordinary ways.
- As most of the news events are formal, it takes time for the journalist to write up and publish the news event.

##Target audience and context of use
###Target audience 
“Locals” are aimed at people who wanted to know what news/events happening in their surrounding area and are keen to share their views with others towards the news/events. For example, these people can be students who wanted to know what events are happening in their school/uni. They can open the web application, register/sign in,  choose the location of their school/uni and view the news/events according to their interest by clicking the pins on Google map. If there are any news/events that they are interested in, they can also share their opinion about the new/event by clicking on the comment button. These students can also create new post if they see anything that they think is fun or significant and would like to share to the public. 


People who drives to work and wanted to know about the traffic conditions in certain regions can also use the app after choosing the region and selecting “Lifestyle” as the news category to read about the traffic news in that area. They can also post traffic news of their current locations to benefit other drivers. 


Travellers can also use the app to see what is happening in the place where they plan to visit by selecting the pin in Google Map and browsing through the news list. They can read the comments that are posted by other users to see how the locals view/opinion on a certain event/news.  

The persona below represents our intended users as it was developed by the research performed on common attributes of our target audiences. 

![GitHub Logo](/images/persona.jpg)

##Requirement Analysis
We have collected a lot of raw data and initial personas from research phase and in requirement analysis phase. We would analyze such statistics further in order to get universal and comprehensive requirements of the user. 

##Conceptual Design
###Concept
The idea of this project is to provide a medium for the local community to communicate and share news and opinions. As most of the news websites focus on an international/national perspective, Locals focuses on providing up-to-date news in the local area for people that is living in that area. One of the benefits of using Locals is that the users get a chance to know the people that are living in the same area.

###Conceptual Model
Locals is a web application that is based on Google Map, focusing on new communication methods in local areas. The major technique of this project is the connection of different APIs from different resources such as Google Earth for web map and Facebook, Twitter and other news publishers for news data.The data collected will be analysed and logical filters will be used to allocate certain news events to corresponding areas. As for the user interaction, rich exploration in terms of interaction mode were provided for users with the support of drag-and-drop, zoom-in/zoom-out by scrolling on the mouse gives the user different interaction methods when using the application. The core question is on how to augment the communication between users in providing a personal news post mechanism in which users could post their news from the Locals platform as the supplementary news resources apart from other mainstream publishers. 
The users can also share posts from the Locals platform to social websites such as Facebook or Twitter to increase engagement and attract other users from different channels. People should use this web application as it combines news from different sources about a particular suburb/area without the need to search using specific keywords of the suburb/area on different news websites.
###Framework Design
####Functions
- Login, Register, Forgot Password, and Logout.
- Google Map which can be zoomed in or out on a specific area. 
- Transparent circles displayed on Google Map shows the news’ region contour, the larger the circle, the more news that are contained in the region.
- The user can read the outline of the news events by clicking on the pins with different letters that represents different categories of news. Users can click on the link provided in the outline to read the full list of news contained in the category. 
- Users can click on any news events in the forum list to view its detail, location and where the article was posted as shown in the form of Google Map. 
- Users can leave comments under each news event post in the forum. The comment made can be purely text or with pictures attached. The user also gets an option to display the current location of where the comment was made. 
- Users can create new post by using the new post function. It is required to enter the title and content of the post. The post can be purely text or with pictures attached. The user also gets an option to display the current location of where the post was made. 
- A news library which contains all the news category in the local area.
- An About Us page about the developer team behind Locals.

###Design of the prototype
Design draft 1
![GitHub Logo](/images/draft1.png)
This is the main page of our web application, at the start of our design process, we used Google map along with a red pin on the map to represent the news events. 

Design draft 2
![GitHub Logo](/images/0.jpg)
At our second design phase, we decided to use black as our theme colour and used circles instead of pins to represent news events.

Final Design
![GitHub Logo](/images/1.png)
This is the login page for our web application. The user can register, login or reset their password in this page. After logging in, it will direct user to the main page. 
![GitHub Logo](/images/2.png)
This page is accessed when the user forgets the account password, and clicks on “Forgot Password?” button on the login page. Email address of the registered account is required to be entered. The user then clicks on the “Reset Password” button. An email will be sent to the user’s email address, providing a link to reset password. After the user clicks on the link and enter the new password, he/she will be able to login using the same password.  
![GitHub Logo](/images/3.png)
Register page requires the user to enter details including Name, Contact Number, Email Address, Username and Password. After all fields are filled in, user clicks on “Register” button to complete the registration process and continue to use the functions provided by the website.
![GitHub Logo](/images/4.png)
At the final stage of our design, we decided to use different colour pins along with different letters to represent different news events. S for sport, L for life, E for entertainment, B for business and C for culture, The user can hover their mouse over the pins to see what each letter represents. The transparent circle represents the news’ region contour. The user can click on the pins to retrieve more information about the event. The top stories will then be displayed at the pop-up window. There is also a link on the pop-up window which directs the user to the forum page. 
![GitHub Logo](/images/5.png)
This is the forum page of our web application, This page contains all the news that are related to the category that user has selected. The user can click on the post to retrieve more information about the event. The user can also create a new post by clicking on the new post button. The user can click the return button to return to the main page. 
![GitHub Logo](/images/6.png)
This is the page that the user will be directed to when they press on the post in the forum list. This page displays detailed information about the news event with a map that displays where the comment was made. The user can comment on the post by clicking on the comment button located under the user profile. 
![GitHub Logo](/images/7.png)
This page can be accessed by clicking on the “Comment” button in the page of detailed information of a news. User enters a comment title, its content, and choose to upload images to be attached to the comment. User can choose whether to save the current location to be the favourite location for future posts. After all the required fields are filled in, user clicks on “Post” button to share this comment. At the right hand side of the page, user can click on”New Post” to cancel the current comment, and post a news instead. By clicking on the “Return” button, the user can return to the homepage if he/she would like to cancel the comment. Three of the most recent updates of the user is listed below the “Return” button, which allows the user to click on the title of the post to view its detail.
![GitHub Logo](/images/8.png)
This page can be accessed by clicking on the second button of the navigation menu at the left of the home page. It displays a “News Library” of the user’s current location. The news are sorted in the descending order of number of views. User can click on any of the news in the list to view its detail. 
![GitHub Logo](/images/9.png)
The user can click on the news event to gain more information about the news. 
![GitHub Logo](/images/10.png)
This page can be accessed by clicking on the third button of the navigation menu at the left of the home page. It allows the user to submit new post by entering a news title, selecting a category of the news from the list, writing the content of news, and also choose to upload images, which can be attached to the news content. User can choose whether to save the current location to be the favourite location for future posts. After all the required fields are filled in, user clicks on “Post” button to share this news. At the right hand side of the page, user can click on “Return” button to return to the homepage if he/she would like to cancel the post. Three of the most recent updates of the user is listed below the “Return” button, which allows the user to click on the title of the post to view its detail.
![GitHub Logo](/images/11.png)
This page can be accessed by clicking on the fourth button of the navigation menu at the left of the home page. It displays the information of the development team including pictures of each developer, our names, and the tasks that we have done during the development process.

##Evaluation
Area of risk in analytic evaluation for electronic prototype:

A. The integrity of information display

B. The smoothness transformation of the navigation system

C. The integrity of user input feedback

D. The responding mechanism of triggers

E. The observation of walkthrough process of users
 
According to these new changes in our evaluation goals, we have adjusted our test plan to correspond with the following areas.

Scope of testing:

1. Product: Locals

2. Testing ranges:

	* Observation of whole walkthrough of users testing
	* Observation of user operation in all functional modules
	* Navigations between different functional modules
	* Information inputting in the application prototype
	* Triggers responding in the application prototype
	* Escaping from functional modules
	* Efficiency of interfaces

Purpose:

1. The general questions should be answered in the user evaluation:

* The general impression of this product
* Which part of the product were you confused with
* Which part of the function you think is difficult to use
* Which part of the product is not accordant with your thoughts (mental concept)
* Are interfaces appealing and whether they provide clear information 
* Which part you think is unnecessary
* Which part you think is important/interesting

2. The specific risks of every functional module:

* Can users successfully register in the login and register page?
* Can users successfully input username and password to identify themselves?
* Can users successfully enter main page (map info page) of Locals?
* Can users find out the hatch in every functional page?
* Can users understand the implication of the digital circles in Google map?
* Can users understand the implication of the different markers (pins) in Google map?
* Can users recognise the four navigation buttons on the left side of the Google map?
* Can users successfully open any kind of news info window from makers (pins) in Google map in a certain area?
* Can users successfully enter the news list page from the link on the information  window in Google map? 
* Can users successfully open a detailed page of a certain news in the news list page?
* Can users successfully post a new event in the post page?
* Can users successfully post a new event from the side navigation button in Google map?
* Can users successfully  leave a comment in a detailed news page?
* Can users successfully escape from news page to Google map?
* Can users successfully log out?

3. According to the questions and risks above, the goals of our evaluations are:

* Intuitive design: the effortless understanding of the navigation system in this prototype
* Ease of learning: users who have never seen the user interface before can accomplish basic tasks
* Error frequency and severity: how often users make errors while using the prototype and how serious these errors are and how users recover from the errors
* Efficiency of use: experienced users can accomplish the tasks easily
* Memorability: after visiting this prototype, if the user can remember enough to use it effectively in future visits
* Subjective satisfaction: if the users are satisfied in using this application 

####Schedule and location:
The location of evaluation would generally be in building 78 or in canteen areas and the time would be flexible according to the testers.

####Sessions: 
This normal test session would be around 10 minutes which includes the test and interview.

####Equipment:
The electronic prototype would be shown and evaluated on a laptop.

Detailed information of the evaluation platform:

* Operating System: Windows 10 Professional 
* Operating System Version:10586.318
* Processor: Intel(R) Core(TM) i7-3940XM CPU @ 3.00GHz 3.20GHz
* RAM: 16.0GB (15.6 GB available)
* System Type: 64 - bit operating system

####Participants:
We would choose 5 participants for our evaluation in our electronic prototype. The participants would be different in majors and genders so that we could get relatively comprehensive feedback and recording from them.

####Scenario:
Task 1. Immersive observe and let users to walk through the prototype at their own pace, recording the process of users’ walk through path, the error and correction method.

After Task 1, we would give some specific tasks to users and observe how they complete each task.

Task 2. Encourage users to find a certain kind of news in a certain area and record the whole process.

Task 3. Encourage users to leave a comment in a certain news and record the whole process.

Task 4. Encourage users to post a new event by different ways and record the whole process.

Task 5. Encourage users to open news library in his current location and record the whole process.

Task 6. Encourage users to log out and leave the application and record the whole process.

Metrics:

 Quantitative Data:

1. Task time
2. Success rates
3. Error rates
4. Error-Free Rate
5. Satisfaction questionnaire rating
6. Demographic data of participants

Qualitative Data:

1. Observations about pathways participants took
2. Problems experienced
3. How to solve problems
4. Comments and recommendations

Open-ended questions about qualitative data:
* The general impression of this product
* Which part of the product makes you confused
* Which part of function you think hard to use
* Which part of the product is not accordant with your thought (mental concept)
* Are interfaces appealing and whether they provide you clear information or not
* Which part you think unnecessary
* Which part you think important/ interesting

Roles:

One member of our group would act as the guider at the very start and give users tasks we planned would be with the participants during the whole process. Also, there would be an open-ended interview for the participants after the testing session.

All test materials 

Protocol for Testing:
Preparation –
Prepare and lay out materials for the participant. Set up the laptop for the user, however do not bring up the website. Ensure the user doesn’t see the questions or the questionnaire until the appropriate time i.e. post testing. 

Introduction –
Introduce yourself and the team. Brief them on the testing and what they will be doing during the testing session. Tell them what is on the consent form. 

Consent –
Ask participant to fill in and sign consent form. All group members are to sign consent form. 

Instructions –
Give the participant more detailed instructions about the task they are to do.
Inform them of the task at hand and the time frame we have allowed.
Ask them to make comments out loud and/or inform us if there is any moment where they find they are stuck or don’t know where the go from here. Ask the participant if they have any questions.

Observe –
When the participant is ready, ask the participant to start on the task.
Ensure observers take (timed) hand notes and video the process. If the participant asks questions then have one dedicated observer engage with the participants. Other observers are to be flies on the wall.
When the time is up, close the observation process and say “great – we now have the information that we need for that part, we are now going to follow up with a questionnaire”.

Questionnaire –
Ask the participant to fill in the questionnaire. Clarify anything that is vague or not clear enough. 
When the participant has finished filling in the questionnaire, check over the responses to make sure that all parts have been filled out, and the answers are legible.

Further data collection –
Based on their responses determine whether further data collection is required. Ask any further questions or request further interaction with the software. 

Closing –
Tell the participant that the session is at the end. Thank the participant for their time. Tell them that their data are valuable. Let participant know that they are free to go. 






##Member’s contribution to the project

###Cheng Hang (Wilbur) Master of Interaction Design 

User Interface Designer and Web Developer 

Responsibilities:
* Design and development of Google Map page
* Optimization of Google Map Style 
* Optimization of Explore, Post News and Information Pages 


###Sin Man Simao Chan (Simon) Master of Information Technology
Database and PHP developer 


Responsibilities:
* API implementation 
* Documentation for reports at each of the stages
* Development of login page, forum page 


###Chen Xue (Scott) Bachelor of Information Technology
User Interface designer and Web Developer 

Responsibilities: 
* * Design and development of promotional website 
* Optimization of News Library page 
* Presentation preparation 


###Beijia Li(Rebecca) Bachelor of Information Technology 
User Interface Designer

* Responsibilities: 
* Home Page, About Us page and Team Logo design 
* Image resizing and editing, mockups 
* Documentation of research and user persona 

##References
Be ́lair-Gagnon, V. (2013). Revisiting impartiality: Social media and journalism at the BBC . Symbolic interaction , 36 (4), 478-492.

Bradshaw, P., & Rohumaa, L. (2011). The online journalism handbook: Skills to survice and thrive in the digital age (1st ed ed.). New York: Longman.

Kaplan, A. M., & Haenlein, M. (2010). Users of the world, unite! The challenges and opportunities of social media. Business Horizons , 53 (1), 59-68.

Kerr, G., Mortimer, K., Dickinson, S., & Waller, D. S. (2012). Buy, boycott or blog. European Journal of Marketing , 46 (3/4), 387-405.

Rudd, J., Stern, K., & Isensee, S. (1996, January). Fidelity: Prototyping Debate. Interactions , 76-85.

Zelizer, B. (2009, January 7). Changing Faces of Journalism : Tabloidization, Technology and Truthiness. Shaping Inquiry in Culture, Communication and Media Studies .

