
app.filter("gender", function () {
    return function(item){
        switch(item){
            case 1:
                return "male";
            case 2:
                return "female";
            default:
                return "Not disclosed";

        }

    }
})
