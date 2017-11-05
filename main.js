document.getElementById("book").addEventListener("submit", addlist);


function addlist(e) {
    e.preventDefault();
    var sname = document.getElementById("sname").value;
    var surl = document.getElementById("surl").value;

    if (!sname || !surl) {
        return false;
    }

    var bookmark = {
        name: sname,
        surl: surl
    }
    //console.log(bookmark);
    var bookmarks = [];
    //localStorage.setItem("name", bookmark.name);
    if (localStorage.getItem("bookmarks") == null) {
        bookmarks.push(bookmark);
        //console.log(bookmarks);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
        bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

        bookmarks.push(bookmark);

        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
    showlist();
    document.getElementById("sname").value = "";
    document.getElementById("surl").value = "";

}


function showlist() {
    if (localStorage.getItem("bookmarks") != null) {
        bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        var len = bookmarks.length;
        var show = document.getElementById("show");
        show.innerHTML = ""
        for (var i = 0; i < len; i++) {
            //console.log(bookmarks[i].name);
            var surl = bookmarks[i].surl;
            show.innerHTML += "<div class='list'><h3>" + bookmarks[i].name + "</h3><br>";
            show.innerHTML += "<p class='text-danger'>" + bookmarks[i].surl + "</p>";
            show.innerHTML += "<a class='btn btn-danger' id='del" + i + "' onclick='del(del" + i + ")' title='" + bookmarks[i].surl + "'>" + bookmarks[i].surl + "</a>";
        }
    } else {
        return false;
    }
}

function del(ar) {
    //var tit = ar;
    //console.log(ar);
    var title = ar.getAttribute("title");
    //console.log(id);
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    for (var i = 0; i < bookmarks.length; i++) {
        //console.log(i);
        var st = bookmarks[i].surl;
        //st = st.toString();
        if (st == title) {

            //console.log(title);
            //console.log(st);
            //console.log(st);
            //console.log(bookmarks[i].surl);
            //console.log(bookmarks[i].surl);
            //console.log(i);
            bookmarks.splice(i, 1);
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        }
    }
    showlist();
}
