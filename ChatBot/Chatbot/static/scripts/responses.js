function getBotResponse(input) {
    // Simple responses
    if (input == "Why is my salary deducted?" || input == "What are the instances where my salary can be deducted?") {
        return "<u>General deductions</u><br>1.	Deductions for absence from work<br>2.	Deductions for damage to/ loss of goods entrusted to the employee due to his neglect or fault. This applies to loss of money, which an employee must account for.<br>3.	Deduction for the recovery of any advance, loan or unearned employment benefit, or overpayment of salary<br>4.	Deductions for CPF of employee<br><br><u>Deductions with the written consent</u><br>1.	Deductions for house accommodation supplied by the employer<br>2.	Deductions for amenities and services supplied by the employer<br>3.	Deductions for the subscriptions, entrance fee, installment of loans, interest, and others for a society which was paid for by the employer.<br>4.	Any other deductions with the written consent";
    } else if (input == "What are my work entitlements?" || input == "Do I get rest days or annual leaves?" || input == "What happens if I work overtime?") {
        return "<u>Working hours/OT</u><br>1.	The employer is not permitted to make you work for more than 6 straight hours without break. The break must be at least 45 minutes for you to have a meal.<br>2.	The employer is not permitted to make you work more than 8 hours in a day or more than 44 hours in a week. If you have agreed under the contract, you can work up to 9 hours a day but total hours a week remain 44 hours.<br>3.	If you have agreed under your contract to work less in the first week and more in the 2nd week (alternate weeks) the limit of 44 hours can be exceeded in the2nd week. However, the limit is 48 hours a week and 88 hours any continuous periods of 2 weeks.<br>4.	If regulations 2/3 is not followed, you are entitled to extra pay of a rate of at least 1.5 times your salary.<br>5.	The employer must also not let you work overtime more than 72 hours a month.<br><br><u>Rest Day</u><br>1.	You are entitled to one rest day (without pay) which is either a Sunday or any other day the employer allocate.<br>2.	You are not required to work on a rest day unless your job requires continuous rotation of shifts<br>3.	 If you request to work on a rest day with the regular working hours, you are entitled to more pay on that day than your basic rate<br><br><u>Annual Leave</u><br>1.	You are entitled to 7 days of paid annual leave. However, if you have worked with the same employer for more than a year, you are entitled to a maximum of 14 days of paid annual leaves.<br>2.	An employee who has served an employer for a period of not less than 3 months but has not completed 12 months of continuous service in any year, is entitled to annual leave in proportion to the number of completed months of service in that year. (eg. If I work for 4 months and its my first job, ill get 4 days of leave)<br>3.	If you are granted leave of absence without pay, this is not calculated in your annual leave.";
    } else if (input == "help"){
        return "<p class='botText'><span onclick='myFunction()'>Why is my salary deducted?</span></p><p class='botText'><span onclick='myFunction()'>What are the instances where my salary can be deducted?</span></p><p class='botText'><span onclick='myFunction1()'>What are my work entitlements?</span></p><p class='botText'><span onclick='myFunction1()'>Do I get rest days or annual leaves?</span></p><p class='botText'><span onclick='myFunction1()'>What are my work entitlements?</span></p><p class='botText'><span onclick='myFunction1()'>What happens if I work overtime?</span></p>"
    } else {
        return "Try asking something else!";
    }
}

function myFunction(){
    console.log("hello");
    let botHtml = '<p class="botText"><span>' + "<u>General deductions</u><br>1.	Deductions for absence from work<br>2.	Deductions for damage to/ loss of goods entrusted to the employee due to his neglect or fault. This applies to loss of money, which an employee must account for.<br>3.	Deduction for the recovery of any advance, loan or unearned employment benefit, or overpayment of salary<br>4.	Deductions for CPF of employee<br><br><u>Deductions with the written consent</u><br>1.	Deductions for house accommodation supplied by the employer<br>2.	Deductions for amenities and services supplied by the employer<br>3.	Deductions for the subscriptions, entrance fee, installment of loans, interest, and others for a society which was paid for by the employer.<br>4.	Any other deductions with the written consent"; + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    let bot2Html = '<p class="botText"><span onclick="myFunction2()">' + "Poster for more information<br><img src='../info1.jpg' alt='Infographic' width='20' height='20'>" ; + '</span></p>';
    $("#chatbox").append(bot2Html);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    let bot3Html = '<p class="botText"><span onclick="myFunction3()">' + "Video for more information<br><img src='../videoicon.bmp' alt='Infographic' width='20' height='20'>" ; + '</span></p>';
    $("#chatbox").append(bot3Html);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function myFunction1(){
    console.log("hello");
    let botHtml = '<p class="botText"><span>' + "<u>Working hours/OT</u><br>1.	The employer is not permitted to make you work for more than 6 straight hours without break. The break must be at least 45 minutes for you to have a meal.<br>2.	The employer is not permitted to make you work more than 8 hours in a day or more than 44 hours in a week. If you have agreed under the contract, you can work up to 9 hours a day but total hours a week remain 44 hours.<br>3.	If you have agreed under your contract to work less in the first week and more in the 2nd week (alternate weeks) the limit of 44 hours can be exceeded in the2nd week. However, the limit is 48 hours a week and 88 hours any continuous periods of 2 weeks.<br>4.	If regulations 2/3 is not followed, you are entitled to extra pay of a rate of at least 1.5 times your salary.<br>5.	The employer must also not let you work overtime more than 72 hours a month.<br><br><u>Rest Day</u><br>1.	You are entitled to one rest day (without pay) which is either a Sunday or any other day the employer allocate.<br>2.	You are not required to work on a rest day unless your job requires continuous rotation of shifts<br>3.	 If you request to work on a rest day with the regular working hours, you are entitled to more pay on that day than your basic rate<br><br><u>Annual Leave</u><br>1.	You are entitled to 7 days of paid annual leave. However, if you have worked with the same employer for more than a year, you are entitled to a maximum of 14 days of paid annual leaves.<br>2.	An employee who has served an employer for a period of not less than 3 months but has not completed 12 months of continuous service in any year, is entitled to annual leave in proportion to the number of completed months of service in that year. (eg. If I work for 4 months and its my first job, ill get 4 days of leave)<br>3.	If you are granted leave of absence without pay, this is not calculated in your annual leave." + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    let bot2Html = '<p class="botText"><span onclick="myFunction5()">' + "Poster for more information<br><img src='../info2.jpg' alt='Infographic' width='20' height='20'>" ; + '</span></p>';
    $("#chatbox").append(bot2Html);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    let bot3Html = '<p class="botText"><span onclick="myFunction4()">' + "Video for more information<br><img src='../videoicon.bmp' alt='Infographic' width='20' height='20'>" ; + '</span></p>';
    $("#chatbox").append(bot3Html);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function myFunction2(){
    console.log("hello");
    let botHtml = '<p class="botText"><span>' + "<img src='../info1.jpg' alt='Infographic' width='233' height='300'>" + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function myFunction3(){
    console.log("hello");
    let botHtml = '<p class="botText"><span>' + "<video width='250' height='150' controls><source src='../video1.mp4' type='video/mp4'><source src='../kanata_insulting_me.mp4' type='video/ogg'>Your browser does not support the video tag.</video> " + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function myFunction4(){
    console.log("hello");
    let botHtml = '<p class="botText"><span>' + "<video width='250' height='150' controls><source src='../video2.mp4' type='video/mp4'><source src='../kanata_insulting_me.mp4' type='video/ogg'>Your browser does not support the video tag.</video> " + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function myFunction5(){
    console.log("hello");
    let botHtml = '<p class="botText"><span>' + "<img src='../info2.jpg' alt='Infographic' width='233' height='300'>" + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

