//  var xReq = new XMLHttpRequest();
//  xReq.open('GET','js/json.json');
//  xReq.onload = function(){
//      var xData = xReq.responseText;
//      document.write(xData);
//      console.log(xData);
//  };
//  xReq.send();

// for (let i = 0; i < data.length; i++) {
//     data[i]['index']=i+1;
// }
// elemente += '<td>'+ value.index +'</td>';


 $(document).ready(function(){
    $.getJSON("alan.json", function(data){
        var elemente = '';   
        $.each(data, function(key, value){
            elemente += '<tr>';
            elemente += '<td>'+ value.id +'</td>';
            elemente += '<td>'+value.Name+'</td>';
            elemente += '<td>'+value.category+'</td>';
            elemente += '<td>'+value.price+'</td>';
            elemente += '<td>'+value.availablity+'</td>';
            elemente += '<td>'+value.provider.company_name+'</td>';
            elemente += '<td>'+value.provider.address+'</td>';
            elemente += '</tr>';
        });
        $('#element_table').append(elemente);
    });

    });
//
    $(document).ready(function(){
        $("input").on("keyup",function(){
            var value = $(this).val().toLowerCase();
            $("tbody tr").filter(function(){
                $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1)
    
            });
        });
        }); 
 

        $(document).ready(function(){
            $("th").each(function(column){  
                $(this).hover(function(){
                    $(this).data("type", $(this).attr("class"));
                    $(this).addClass("clickable");
                });
                
                $(this).click(function(){
                    var type = $(this).data("type");
                    var records = $("table").find("tbody > tr");
                    records.sort(function(a, b){
                        var value1 = $(a).children("td").eq(column).text();
                        var value2 = $(b).children("td").eq(column).text();
                        if(type == "number"){
                            value1 *= 1;
                            value2 *= 1;
                        }
                        return(value1 < value2) ? -1 : (value1 > value2 ? +1 : 1)
                    })
                    $.each(records, function(index, row){
                        $("tbody").append(row);
                    })
                });
            });
        });
            


