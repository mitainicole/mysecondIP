var cc, year, month, date, weekday, day;
function getInput(){
  cc = parseInt(document.getElementById("cc").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  date = parseInt(document.getElementById("monthday").value);


  if(cc == ""){
    alert("select valid gender");
    return false;
  }else if (year == ""){
    alert("invalid year");
    return false;
  }else if (month == ""){
    alert("Invalid month");
    return false;
  }else if(date == ""){
    alert("invalid date");
    return false;
  }
}

function calculateDay(){
    getInput();
    weekday = ((((cc/4) -2*cc-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date) % 7) -1;
    console.log(weekday);
    return (Math.floor(weekday));
    if (weekday < 0) {
      weekday = weekday * -1;
    }
    else if (weekday > 0) {
      return weekday;
    }
}

 function checkweekday(){
     day = calculateDay();
      checkGender();
      console.log("The function runs");
}


let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];



function checkGender(){
  var gen = document.getElementsByName("rads");
  if(gen[0].checked == true){
      var gender = "male";
  }else if(gen[1].checked == true){
      var gender = "female";
  }else {
    console.log("pass");
  }
    switch(gender){
        case gender = "male":
              switch(day){
                case (0 || -0):
                  document.getElementById("result").innerHTML = "born on a sunday." + "  " + "your given akan name is " + maleNames[0];
                break;
                case (1 || -1):
                  document.getElementById("result").innerHTML = "born on a monday." + " " + "your given akan name is " + maleNames[1];
                break;
                case (2 || -2):
                  document.getElementById("result").innerHTML = "born on a tuesday." + " " + "your given akan name is " + maleNames[2];
                break;
                case (3 || -3):
                  document.getElementById("result").innerHTML = "born on a wednesday." + " " + "Your given akan name is "+ maleNames[3];
                break;
                case (4 || -4):
                  document.getElementById("result").innerHTML = "born on a thursday." + " " + "your given akan name is " + maleNames[4];
                break;
                case (5 || -5):
                  document.getElementById("result").innerHTML = "born on a friday." + " " + "your given akan name is " + maleNames[5];
                break;
                case (6 || -6):
                  document.getElementById("result").innerHTML = "born on a saturday." + " " + "your given akan name is " + maleNames[6];
                break;
                default:

              }
        break;
        case gender = "female":
                switch(day){
                  case 0 || -0:
                    document.getElementById("result").innerHTML = "born on a sunday." + "  " + "your given akan name is  akosua";
                  break;
                  case 1 || -1:
                    document.getElementById("result").innerHTML = "born on a monday." + " " + "your given akan name is adwoa ";
                  break;
                  case 2 || -2:
                    document.getElementById("result").innerHTML = "born on a tuesday." + " " + "your given akan name is abenaa";
                  break;
                  case 3 || -3:
                    document.getElementById("result").innerHTML = "born on a wednesday." + " " + "your given akan name is akua";
                  break;
                  case 4 || -4:
                    document.getElementById("result").innerHTML = "born on a thursday." + " " + "your given  akan name is yaa";
                  break;
                  case 5 || -5:
                    document.getElementById("result").innerHTML = "born on a friday." + " " + "your given akan name is afua";
                  break;
                  case 6 || -6:
                    document.getElementById("result").innerHTML = "born on a saturday." + " " + "your given akan name is ama";
                  break;

              }
        break
        default:
        console.log("pass");
    }
}
