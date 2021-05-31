# GoogleDriveDirectoryWordCount
A simple Google Script that shows your word count for all the documents in a docs.google.com directory. 

# #############################
#
# Written by Johnny Renaissance
#
# ############################# 


############
# WHAT
############

This is a simple Google script that counts all the words in a Google drive directory. This way you don't have to keep a running tally or manually open every document in the directory to get the word count. It's helpful if you use multiple documents in the same directory when writing a book or other work.


############
# Setup and Execution
############

1) Go to https://script.google.com/home. 
2) Click on new project.
3) Click on "Untitled project" on the top, and give the script a better name. * This is optional and you can use whatever floats your flotilla.
4) Delete everything in the Google script (which is probably just function myFunction() {}) .
5) Copy the contents of CountScript.gs in this github and paste them into the Google script that you are editing.
6) Open https://drive.google.com and navigate to the directory that contains the documents you wish to wordcount.
7) Copy the directory ID from the URL. The URL should look something like this: https://drive.google.com/drive/u/0/folders/1ZEEV9a5gtBmQQSlIH7ZNDdmXbT_3qPu0. The directory ID is the alphabet soup part: 1ZEEV9a5gtBmQQSlIH7ZNDdmXbT_3qPu0. 
8) In your Google script, look for part that says <put in your directory ID here>, replace that section (including the <> angle brackets) with your directory ID.
   >   var folder = DriveApp.getFolderById('<put in your directory ID here>');
  should become
  >    var folder = DriveApp.getFolderById('1ZEEV9a5gtBmQQSlIH7ZNDdmXbT_3qPu0');
  but with your ID.
9) Click Run at the top.
10) Watch your word counts show up at the bottom of the page as well as a summary wordcount.
11) Profit!!!

   
############
# Caveat
############

This is not production code. This code is not configured to be deployed. It's simply a tool to give the wordcount. As well, you MUST have access to this drive directory using your currently logged in account.

   
############
# Contact
############

This is on github, so I'm assuming they give you some way to contact me. Feel free to do that.
