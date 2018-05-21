$("#localNetworkLoadTrigger").click(function(event) {
	let atsList = $(".ats");
	let result = 0;
	for (var i = atsList.length - 1; i >= 0; i--) {
		let currentResult = 
		parseFloat($(atsList[i]).find($(".kvN")).val()) * parseFloat($(atsList[i]).find($(".kvL")).val()) +
		parseFloat($(atsList[i]).find($(".nhSN")).val()) * parseFloat($(atsList[i]).find($(".nhSL")).val()) +
		parseFloat($(atsList[i]).find($(".nhDN")).val()) * parseFloat($(atsList[i]).find($(".nhDL")).val()) +
		parseFloat($(atsList[i]).find($(".isdnN")).val()) * parseFloat($(atsList[i]).find($(".isdnL")).val());
		$(atsList[i]).find($(".currentAtsLoad")).text(currentResult);
		result += currentResult;
	}
	let devResult = result * 0.9;
	$("#localNetworkLoad").text(result);
	$("#localNetworkLoadDev").text(devResult);
});

$("#iATSPartTrigger").click(function(event) {
	let result = parseFloat($("#iATSLoad").val()) / parseFloat($("#totalLoad").val());
	$("#iATSPart").text(result);
	let percentResult = result * 100;
	$("#iATSPercent").text(percentResult);
});

$("#addAts").click(function(event) {
	let atsList = $(".ats");
	let atsClone = $(atsList[0]).clone();
	$("#stationN").val(parseInt($("#stationN").val()) + 1);
	$("#atsList").append(atsClone);
})

$("#removeAts").click(function(event) {
	if ($(".ats").length > 1) {
		$("#stationN").val(parseInt($("#stationN").val()) - 1);
		$($(".ats")[0]).remove();
	}
})