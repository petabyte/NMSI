var apiKey = "8e53d2fe59f28781d53332c279d173ffd8f6a952";
var searchParameterName="searchMaterial";
var sustainabilityClient = new MaterialsSustainabilityIndexClient( "http://nikemsiapi.nikebetterworld.com", apiKey, ".json" );
function writeDivPage(json){  
      if(json !="" && json != null && json != undefined){
	      $.each(json,function(i,item){
	        $("body").append("<div data-role=\"page\" id=\"material_"+
		                     item.Material.id+"\" data-theme=\"a\">"+
		                     "<div data-role=\"header\">"+
		                     "<h1>"+item.Material.name+"</h1>"+
	                             "</div><div data-role=\"content\" data-theme=\"c\">"+	
		                     "<h2>"+item.Material.name+"</h2>"+
		                     "<p><strong>Chemistry Total: </strong>"+item.Material.chemistry_total+"</p>"+	
		                     "<p><strong>Egei Total: </strong>"+item.Material.egei_total+"</p>"+	
		                     "<p><strong>Water Land Intensity Total: </strong>"+item.Material.water_land_intensity_total+"</p>"+	
		                     "<p><strong>Physical Waste Total: </strong>"+item.Material.physical_waste_total+"</p>"+
		                     "<p><strong>Total Score: </strong>"+item.Material.total_score+"</p>"+
		                     "<p><strong>Recyclable: </strong>"+item.Material.recyclable+"</p>"+	
		                     "<p><strong>Organic: </strong>"+item.Material.organic+"</p>"+		                       	
		                     "<p><a href=\"#two\" data-direction=\"reverse\" data-role=\"button\" data-theme=\"b\">Back to Search Result</a></p>"+	
		                     "<p><a href=\"./search.html\" data-direction=\"reverse\" data-role=\"button\" data-theme=\"b\">Back to Search</a></p>"+	
                              "</div><div data-role=\"footer\"></div></div>");		                     
		   $("#listOfMat").append("<li><a href=\"#material_"+item.Material.id+"\"+ data-role=\"button\">"+item.Material.name+"</a></li>");	
		  });
	}else{
		   $("#listOfMat").append("<li><div data-role=\"content\" data-theme=\"c\"><p><h2>Material Not Found!</h2></p></div></li>");
	};  
	 $("#listOfMat").listview("refresh");
}

function getURLParam(strParamName){
  var strReturn = "";
  var strHref = window.location.href;
  if ( strHref.indexOf("?") > -1 ){
    var strQueryString = strHref.substr(strHref.indexOf("?")).toLowerCase();
    var aQueryString = strQueryString.split("&");
    for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
      if ( 
aQueryString[iParam].indexOf(strParamName.toLowerCase() + "=") > -1 ){
        var aParam = aQueryString[iParam].split("=");
        strReturn = aParam[1];
        break;
      }
    }
  }
  return unescape(strReturn);
};