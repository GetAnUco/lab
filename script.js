$("#localNetworkLoadTrigger").click(function(event) {
	let result = (parseFloat($("#kvN").val() * parseFloat($("#kvL").val()) +
	parseFloat($("#nhSN").val()) * parseFloat($("#nhSL").val()) +
	parseFloat($("#nhDN").val()) * parseFloat($("#nhDL").val()) +
	parseFloat($("#isdnN").val()) * parseFloat($("#isdnL").val())))
	* parseFloat($("#stationN").val());
	
	$("#localNetworkLoad").text(result);
	let devResult = result * 0.9;
	$("#localNetworkLoadDev").text(devResult);
});

$("#iATSPartTrigger").click(function(event) {
	let result = parseFloat($("#iATSLoad").val()) / parseFloat($("#totalLoad").val());
	$("#iATSPart").text(result);
	let percentResult = result * 100;
	$("#iATSPercent").text(percentResult);
});