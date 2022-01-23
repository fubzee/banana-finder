
function banana_meter(result,rank)
{
    var noofbananas = rank;

    switch (result)
    {    
    case 1:
        $("#ranking1").empty();
        for (var i = 0; i < noofbananas;i++){
            $("#ranking1").append(`<img src= "./assets/images/favicon-16x16.png">`); 
        }
        break;
    case 2:
        $("#ranking2").empty();
        for (var i = 0; i < noofbananas;i++){
            $("#ranking2").append(`<img src= "./assets/images/favicon-16x16.png">`); 
        }
        break;
    case 3:
        $("#ranking3").empty();
        for (var i = 0; i < noofbananas;i++){
            $("#ranking3").append(`<img src= "./assets/images/favicon-16x16.png">`); 
        }
        break;
    default:
        $("#ranking3").append(`<img src= "./assets/images/badrank.png">`); 
    }
}    
