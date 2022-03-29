let math = [];
let clear = 0;
let myRegex = /[+-/*]{2,}/g;
let oper;
let str = "";

buttons = document.getElementsByClassName('btn');
buttons = [...buttons];
buttons.forEach(selector => {
    selector.addEventListener('click', function () {

        if (selector.value == "=") {
            let sum = math[math.length - 1];
            $('#display').text(sum)

            if (myRegex.test(sum) == true) {
                let newMatch = sum.match(myRegex).toString().split("");
                let oldMatch = newMatch[newMatch.length - 1]

                if (oldMatch == "-") {
                    oper = newMatch[newMatch.length - 2]
                    str = sum.replace(myRegex, oper);
                    str = "-" + eval(str)
                    $('#display').text(str)

                } else {
                    oper = newMatch[newMatch.length - 1];
                    str = sum.replace(myRegex, oper);
                    str = eval(str)
                    $('#display').text(str);
                }
            } else {
                sum = eval(sum);
                $('#display').text(sum);
            }
        } else if (selector.value !== "clear") {
            if ($('#display').html() == "0") {
                $('#display').html("");
                $('#display').append(selector.value);

            } else {
                $('#display').append(selector.value);
                math.push($('#display').text());
            }

        } else {
            math = [];
            $('#display').html("0");

        }
        if (selector.value == ".") {
            document.getElementById('decimal').disabled = true;
        } else if (selector.value == "*" | selector.value == "-" | selector.value == "/" | selector.value == "+" | selector.value == "clear" | selector.value == "=") {
            document.getElementById('decimal').disabled = false;
        }
    });
});

