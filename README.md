![License](https://img.shields.io/github/license/PadBase/Prime Alumni Database.svg?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/PadBase/Prime Alumni Database.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/PadBase/Prime Alumni Database.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/PadBase/Prime Alumni Database.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/PadBase/Prime Alumni Database.svg?style=for-the-badge)
    
# PadBase

## Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [projectCredentials](#projectCredentials)
- [Acknowledgements](#acknowledgements)
- [Contacts](#contacts)

## Description

Prime alumni database is an app to connect prime alumni. Pad gives primers the ability to share resources , job opportunities and to stay connected with the prime community.

## Screenshots



## Getting Started

1. Create a database called prime_alumni_resources.

2. Copy the data from the database.sql file and paste that data into postGresSQL. Run the sql.

3. Replace the .envExample file to a real .env file with the appropriate values. 

ie----------------------------------------------
-SERVER_SESSION_SECRET=

REACT_APP_FIREBASE_API_KEY =

REACT_APP_FIREBASE_AUTH_DOMAIN =

REACT_APP_FIREBASE_PROJECT_ID =

REACT_APP_FIREBASE_STORAGE_BUCKET = 

REACT_APP_FIREBASE_MESSAGING_SENDER_ID =

REACT_APP_FIREBASE_APP_ID =

SERVER_SESSION_SECRET=

REACT_APP_ACCESS_KEY=

REACT_APP_SECRET_ACCESS_KEY=


-------------------------------------------------

5. Navigate to your terminal and do a npm install.

6. Open a terminal using your vs code 

7. Run Npm run server.

8. Then open another terminal and Run Npm run client.

### Prerequisites

postgressql
node js
code editor (VS CODE)
database client 
firebase
aws s3
tailwind
material ui
react
redux 
react saga


### Installation

node----------------------------------
https://nodejs.org/en/download

postgressql---------------------------
https://www.postgresql.org/download/

vs code-------------------------------
https://code.visualstudio.com/download

postico-------------------------------
https://eggerapps.at/postico/v1.php

## Usage

1. register a user

2. fill in the required information in edit profile

3. navigate to profile to see updates 

4. navigate to resources to see/add available resources

5. navigate to jobs to see/add available jobs 

6. navigate to search to look up fellow prime alumni

## Project Credentials 

Gmail	
Account Name:clientName@gmail.com
	Password: ChangeMe!@34

This account will be used for sending automated emails to your users whenever important actions have taken place regarding their account.  
SomeApp is currently set up to generate automated emails to come from a gmail account with 2 Factor Authentication.  You will need to enable 2 Factor Authentication on your Gmail account and create a password for SkillSense to use.  See this tutorial link for instructions on setting up an “App Password” that will allow the app to log in and send emails from this account.

## AWS: 
Account Name: clientEmail@gmail.com
	Password: ChangeMe!@34

To manage your AWS settings online, access the AWS Management Console in the My Account tab on https://aws.amazon.com/
Please update this account’s location and phone number — it is currently set up using the address for Prime Digital Academy.
This account has been started, but it will still require you to add payment information prior to being able to create an S3 Bucket to store uploaded files.  
Once you have added payment information to your AWS account, you can follow the beginning of this tutorial for how to set up an S3 Bucket on your account.  Disregard anything after “Back End” — this has been provided for you already.
When setting up your account, be sure to record the AWSAccessKeyId AND the AWSSecretKey.  This information should be held securely as it is what will allow your app to access your AWS S3 storage bucket.  These keys will look like:
Access key ID example: AKIAIOSFODNN7EXAMPLE
Secret key example: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
You will also need to update permissions on your S3 Bucket.  From the same place you accessed your CORS settings in the tutorial above, you will need to select BLOCK PUBLIC ACCESS and turn off any settings that are blocking public access.  No boxes on this page should be checked with how your app is currently set up.

## Firebase
	Account login: clientEmail@gmail.com
	Password: ChangeMe!@34

Please update the password when you first get into your account
Within the console their are 2 primary locations that are used within this app
there is authentication and the firestore database both can be found in the navigation
menu to the left. Firebase requires no additional setup for the program to run  



## Acknowledgements
Big thanks to Pete St. Martin for trusting us to build this app for the betterment of Prime Digital Academy and current/future alumni

## Contacts
Yuh-Boh Feng
Email: fengyuhboh@gmail.com
LinkedIn: https://www.linkedin.com/in/yuhboh-feng-pm/

Luckie Bah
Email: Bah966@gmail.com
LinkedIn: https://www.linkedin.com/in/luckieb/

Luis Ortiz
Email: l.ortizintec@gmail.com
LinkedIn: https://www.linkedin.com/in/luis-ortiz-swe/