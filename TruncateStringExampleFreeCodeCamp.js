function truncateString(str, num) {
    var rdo = "";

    if (str.length <= num) {
        rdo = str.substring(0, num) /*+ "..."*/ ;
    } else {
        rdo = str.substring(0, num) + "...";
    }


    return rdo;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);