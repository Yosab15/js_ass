/* 1-
var num =Number(window.prompt("enter number"));
console.log(num);
*/
/* 2-
var num =Number(window.prompt("enter number"));
if (num%4==0) {
   if(num%3==0){
    console.log("yes");
   }else{
         console.log("not just 4");
    }
}else{
    console.log("no");
}
*/
/* 3-
var num =Number(window.prompt("enter first number"));
var num2 =Number(window.prompt("enter sec number"));
if(num>num2){
    console.log(num);}
    else{
        console.log(num2);
    }
    */
/* 4-
var num =Number(window.prompt("enter number"));
if(num<0){
        console.log("negative");
    }else{
        console.log("positive");
    }
    */
/* 5-
var num =Number(window.prompt("enter first number"));
var num2 =Number(window.prompt("enter sec number"));
var num3 =Number(window.prompt("enter third number"));
if(num>num2){
    if(num>num3){
        console.log("the max namber =" + num);
            }
        }
            else if(num2>num3){
                console.log("the max namber =" + num2);
            }
            else{
                console.log("the max namber =" + num3);
            }
  console.log("------------------------");
if(num<num2){
                if(num<num3){
                    console.log("the min namber =" + num);}
                }
                    else if(num2<num3){
                        console.log("the min namber =" + num2);
                    }
                    else{
                        console.log("the min namber =" + num3);
                    }
                    */
/* 6 and 7-
var num =Number(window.prompt("enter number"));
if(num%2==0){
    console.log("even");
}else{
    console.log("odd");
}
*/
/* 8-
var char= window.prompt("enter char");
if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
    console.log("vowel");
}else{
    console.log("consonant");
}
*/
/* 9-
var num =Number(window.prompt("enter number"));
for (let i = 1; i <=num; i++) {
    console.log(i);
    
}
*/
/* 10-
var num =Number(window.prompt("enter number"));

for (let i = 1; i <=12; i++) {
    console.log(i*num);
    
}

*/
/* 11-
var num =Number(window.prompt("enter number"));

for (let i = 1; i <=num; i++) {
    if(i%2==0){
        console.log(i);   
}
}
*/
/* 12-(1)
var num =Number(window.prompt("enter first number"));
var num2 =Number(window.prompt("enter sec number"));
console.log(num**num2);
*/
/* 12-(2)
var num1 =95;
var num2 =76;
var num3 =58;
var num4 =90;
var num5 =89;
var total=num1+num2+num3+num4+num5;
console.log("the total number ="+ total);
var avg=total/5;
console.log("the avg number ="+ avg);
var Percentage=(total/500)*100;
console.log("the Percentage  number ="+ Percentage);  
*/
/* 13-
var num =Number(window.prompt("enter month number"));
if(num==1){
    console.log("num days:"+ 31);
}else if(num==2){
    console.log("num days:"+ 28);
}else if(num==3){
    console.log("num days:"+ 31);
}else if(num==4){
    console.log("num days:"+ 30);
}else if(num==5){
    console.log("num days:"+ 31);
}else if(num==6){
    console.log("num days:"+ 31);
}else if(num==7){
    console.log("num days:"+ 30);
}else if(num==8){
    console.log("num days:"+ 31);
}else if(num==9){
    console.log("num days:"+ 30);
}else if(num==10){
    console.log("num days:"+ 31);
}else if(num==11){
    console.log("num days:"+ 30);
}else if(num==12){
    console.log("num days:"+ 31);
}else{
    console.log("error");
}
*/
/* 14-
var num1 = Number(window.prompt("enter Physics grade"));
var num2 = Number(window.prompt("enter Chemistry grade"));
var num3 = Number(window.prompt("enter Biology grade"));
var num4 = Number(window.prompt("enter Mathematics grade"));
var num5 = Number(window.prompt("enter Computer grade"));
var total=num1+num2+num3+num4+num5;
var Percentage=(total/500)*100;
if(Percentage>=90){
    console.log("Grade A");
}else if(Percentage>=80){
    console.log("Grade B");
}else if(Percentage>=70){
    console.log("Grade C");
}else if(Percentage>=60){
    console.log("Grade D");
}else if(Percentage>=40){
    console.log("Grade E");
}else{
    console.log("Grade F");
}
*/
/* 15-
var num =Number(window.prompt("enter month number"));
switch (num) {
    case 1:
        console.log("num days:"+ 31);
        break;
        case 2:
            console.log("num days:"+ 28);
            break;
            case 3:
                console.log("num days:"+ 31);
                break;
                case 4:
                    console.log("num days:"+ 30);
                    break;
                    case 5:
                        console.log("num days:"+ 31);
                        break;
                        case 6:
                            console.log("num days:"+ 31);
                            break;
                            case 7:
                                console.log("num days:"+ 30);
                                break;
                                case 8:
                                    console.log("num days:"+ 31);
                                    break;
                                    case 9:
                                        console.log("num days:"+ 31);
                                        break;
                                        case 10:
                                            console.log("num days:"+ 31);
                                            break;
                                            case 11:
                                                console.log("num days:"+ 31);
                                                break;
                                                case 12:
                                                    console.log("num days:"+ 31);
                                                    break;
    default:
        console.log("error");
        break;
}

*/
/* 16-
var char= window.prompt("enter char");
switch (char) {
    case "a":
        console.log("vowel");
        break;
        case "e":
            console.log("vowel");
            break;
            case "i":
                console.log("vowel");
                break;
                case "o":
                    console.log("vowel");
                    break;
                    case "u":
                        console.log("vowel");
                        break;
    default:
        console.log("consonant");
        break;
}
*/
/* 17-
var num =Number(window.prompt("enter number"));
var num2 =Number(window.prompt("enter number"));
var max

switch (true) {
    case (num > num2):
        console.log("the max number ="+ num);
        break;
    default:
        console.log("the max number ="+ num2);
        break;
}
*/
/* 18-
var num =Number(window.prompt("enter number"));
switch (true) {
    case (num%2==0):
        console.log("even");
        break;
    default:
        console.log("odd");
        break;
}
*/
/* 19-
var num =Number(window.prompt("enter number"));
switch (true) {
    case (num>0):
        console.log("positive");
        break;
        case (num<0):
            console.log("negative");
            break;
    default:
        console.log("equal zero");
        break;
}
*/
/* 20-
var num =Number(window.prompt("enter number"));
var num2 =Number(window.prompt("enter number"));
var char= window.prompt("enter mathimatical operation");
var result;
switch (char) {
    case "+":
        result=num+num2;
        console.log("the result ="+ result);
        break;
        case "-":
            result=num-num2;
            console.log("the result ="+ result);
            break;
            case "*":
                result=num*num2;
                console.log("the result ="+ result);
                break;
                case "/":
                    result=num/num2;
                    console.log("the result ="+ result);
                    break;
    default:
        break;
}

*/