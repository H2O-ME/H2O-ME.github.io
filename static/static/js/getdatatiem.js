function TimeGet() {
                mydate = new Date();
                var day = mydate.getDate();
                var mymonth = mydate.getMonth() + 1;
                var myyear = mydate.getYear();
                var year = (myyear > 200) ? myyear : 1900 + myyear;
                document.getElementById("yue").innerText = mymonth;
                var d = new Date(year, mymonth, 0);
                var strday = "";
                for (var i = 1; i <= d.getDate(); i++) {
                    if (i == day) {
                        strday += "<li class='hover'>" + i + "</li>";
                    }
                    else {
                        strday += "<li>" + i + "</li>";
                    }
                }
                document.getElementById("day").innerHTML = strday;
            };
            function TimeUp() {
                var mymonth = "";
                if (parseInt(document.getElementById("yue").innerText) == 1) {
                    mymonth = 12;
                }
                else {
                    mymonth = parseInt(document.getElementById("yue").innerText) - 1;
                }
                document.getElementById("yue").innerText = mymonth;
                mydate = new Date();
                var day = mydate.getDate();
                var myyear = mydate.getYear();
                var year = (myyear > 200) ? myyear : 1900 + myyear;
                var TrueMonth = mydate.getMonth() + 1;
                var d = new Date(year, mymonth, 0);
                var strday = "";
                for (var i = 1; i <= d.getDate(); i++) {
                    if (i == day && TrueMonth == mymonth) {
                        strday += "<li class='hover'>" + i + "</li>";
                    }
                    else {
                        strday += "<li>" + i + "</li>";
                    }
                }
                document.getElementById("day").innerHTML = strday;
            }
            function Timedown() {
                var mymonth = "";
                if (parseInt(document.getElementById("yue").innerText) == 12) {
                    mymonth = 1;
                }
                else {
                    mymonth = parseInt(document.getElementById("yue").innerText) + 1;
                }
                document.getElementById("yue").innerText = mymonth;
                mydate = new Date();
                var day = mydate.getDate();
                var myyear = mydate.getYear();
                var year = (myyear > 200) ? myyear : 1900 + myyear;
                var TrueMonth = mydate.getMonth() + 1;
                var d = new Date(year, mymonth, 0);
                var strday = "";
                for (var i = 1; i <= d.getDate(); i++) {
                    if (i == day && TrueMonth == mymonth) {
                        strday += "<li class='hover'>" + i + "</li>";
                    }
                    else {
                        strday += "<li>" + i + "</li>";
                    }
                }
                document.getElementById("day").innerHTML = strday;
            }
