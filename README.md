# Prototype of Mera Ration App
This is a project that will help people – ration cardholders, especially migrant workers to check food grain entitlement, status of Aadhar seeding and recent transactions etc.
The key features that will be available:
•	With the help of this application, user can check their ration details, the current scheme they are enrolled in and etc. .
•	The user will be able to check if they are eligible for the ration policies. 
•	If user have seeded their Aadhaar with a ration card then its status can be checked from this app too. 
•	Information about the states in which ONORC is active can also be checked and their transactions. 
•	If have any suggestions then it can be submitted from this app. 

# INFRASTRUCTURE
1.	The application is designed, to make it easier for the user to know their details.
2.	The application starts with an Onboarding screen continuing with the Home Screen where there are various options. 
3.	User may choose the option according to the information that they may need.
4.	Including:
4.1.	Ration Information
4.2.	Home State Information
4.3.	Eligibility
4.4.	Aadhar Seeding
5.	There are also options that are work in progress and aren’t available to use as of now. 

# Onboarding Screen:

1.	This module provides the user with the basic information and what the scheme has achieved up till now.
2.	With the header and footer as fixed. This screen has a carousel that auto scrolls to the Homepage.
3.	A button “Go to Home” is also provided that links to the Homepage and on clicking will skip the Onboarding screen and navigate us to the Homepage.
4.	The carousel displays various pictures in an ordered format that also imparts the numbers/information about the ONORC scheme.
5.	Implemented using the flat list library making it scroll in the horizontal way rather than the native vertical way giving a carousel effect.
6.	Also added bounds and fixed movements. So, that the images don’t bounce at the end and on scrolling, smoothly shift to the next image and not be stuck in between.

<img width="409" alt="image" src="https://user-images.githubusercontent.com/91450039/178944899-200aa859-4858-4b12-b3a4-106cd45b2855.png">

 
# Home Screen
1.	This screen is the home of the application.
2.	This screen provides the user with the various options.
2.1.	Options currently working including:
2.1.1.	Know you ration
2.1.2.	Eligibility Criteria
2.1.3.	Aadhar Seeding
2.1.4.	ONORC States
2.2.	Options being worked on:
2.2.1.	Nearby Ration Stores
2.2.2.	Suggestion and Feedbacks
3.	The Screen is provided with a scrollable view that allows for more options in the future.
4.	Also, planning to add the app – navigation drawer that will not only help in the navigation, but will also provide us with the information related to the application.

 <img width="418" alt="image" src="https://user-images.githubusercontent.com/91450039/178944941-7a066638-2f3a-44f8-93fd-92f39545d363.png">


# Know your Ration
1.	On opening this module, there comes a dialogue box in which the user needs to fill their Ration card number.
2.	On providing with the Ration Card Number
2.1.	If the card number is wrong / not present in the database. It gives an error indicating “Enter the card number correctly!”.
2.2.	If the card number is present in the database, the module navigates user to the second screen where the results are shown.
2.3.	The module lets the user know about their information that is currently saved in the database. The information that they provided, while the ration card was being made.
3.	The result screen includes:
3.1.	The ration id of the user
3.2.	His / Her name according to their ration card
3.3.	The state that they reside in.
3.4.	Their current address.
3.5.	Any scheme that they are currently enrolled into.
3.6.	And relationship status, if they have any.
 
 <img width="448" alt="image" src="https://user-images.githubusercontent.com/91450039/178945038-33a115db-ca2a-466b-b8cc-6401a3ad6037.png">


# ONORC States
1.	Module:
1.1.	Contains the information about all the states that are active in the ONORC scheme.
1.2.	Lets the user know about the various districts, their location where FPS (Fair Price Shops) are located.
2.	On opening this module:
2.1.	An alert pops-up that states, the application wants to re-direct that page to a different website. 
2.2.	On cancelling, the dialogue box closes and the user remains on the home screen.
2.3.	While on pressing “Ok” the user is directed to the website.

<img width="410" alt="image" src="https://user-images.githubusercontent.com/91450039/178945115-84174ca7-8b66-4637-b5b7-fd9089d297bb.png">

2.4.	The website in this case is the “http://impds.nic.in/sale” which stores:
2.4.1.	Information regarding all the active states where ONORC is active.
2.4.2.	The number if districts in the particular state and relative FPS location.
2.4.3.	Information regarding the daily and monthly transactions that took place.

<img width="419" alt="image" src="https://user-images.githubusercontent.com/91450039/178945145-f4c8a1bc-1bf1-43ad-bc7d-c95f5e240627.png">

# Eligibility Criteria
1.	On opening this module, there comes a dialogue box in which the user needs to fill their Ration card number.
2.	On providing with the Ration Card Number
2.1.	The module navigates user to the second screen where the results are shown.
2.2.	The module lets the user know about their information that is currently saved in the database. The information that they provided, while the ration card was being made.
3.	The result screen includes:
3.1.	Home State of the user
3.2.	Home District of the user
3.3.	Any scheme that they are currently enrolled into.
3.4.	Ration ID number
3.5.	FPS ID number
4.	Other information our also shown such as :
4.1.	If beneficiary possess a duplicate UID or not.
4.2.	Is IMPDS available for the user or not.
4.3.	Are the Sales Details available or not.
4.4.	Is IMPDS allowed on the ID or not.
 
 <img width="449" alt="image" src="https://user-images.githubusercontent.com/91450039/178945235-0fbea23d-76f0-48f0-ab49-7e3d92e8adf6.png">


# Aadhar Seeding
1.	On opening this module, there comes a dialogue box in which the user needs to fill their Ration card number.
2.	On providing with the Ration Card Number
2.1.	The module navigates user to the second screen where the results are shown.	
2.2.	The module lets the user know about their information that is currently saved in the database. The information that they provided, while the ration card was being made.
3.	The result screen includes:
3.1.	Home State of the user
3.2.	Home District of the user
3.3.	Any scheme that they are currently enrolled into.
3.4.	Ration ID number
3.5.	FPS ID number
3.6.	If the user id eligible for the ONORC Scheme.
4.	Lastly, it shows if the user’s Aadhar seeding details.

 <img width="459" alt="image" src="https://user-images.githubusercontent.com/91450039/178945381-92430c1d-4594-411f-a8ba-43391133ccce.png">


# # WORKING ON::

# Shops Near You
1.	Module:
1.1.	Three dropdown list will be available. 
1.2.	Each for State,  District and Tehsil respectively.
1.3.	On entering/selecting the State name, district and the Tehsil the pop-up will show a list of Ration stores near the location filled in.
2.	As of now, only able to show the State list through the API
3.	Working on a way to merge the State API and the District API , continuing with the Tehsil API to get the location of the user and access the information from the database.
4.	Continuing…
4.1.	On further advancement, ask user for the accessing their current location as soon as they open the app.
4.2.	Making it hassle free for them to search Ration Stores near their current location.
 
 <img width="321" alt="image" src="https://user-images.githubusercontent.com/91450039/178945789-bd903d82-98c0-4162-b9e7-f9ccaf69ee48.png">

 
# Suggestions and Feedbacks
1.	Module:
1.1.	 Will allow the user to submit their suggestions and feedback in-relation to their phone number and ration number.
2.	Connecting it with the Firebase
2.1.	Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. 
2.2.	Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.
2.3.	Will be able to store the data in the real-time ¬database.

<img width="345" alt="image" src="https://user-images.githubusercontent.com/91450039/178945732-1bc3d352-219d-4130-8858-f57ba9bdd4c2.png">


