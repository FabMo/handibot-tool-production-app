var that;

function updateConsolidation() {
//    that = doclength;

       if (that === "long"){
         $('.long').slideDown();
         fabmo.setAppConfig({"doclength":"long"});
       } else if (that === "short"){
         $('.long').slideUp();
         fabmo.setAppConfig({"doclength":"short"});
       }
}

function updateConsolidation() {
//    that = doclength;

       if (that === "long"){
         $('.preview1004766001').slideDown();
         fabmo.setAppConfig({"doclength":"long"});
       }
}

$("#call-c3").click(function(evt) {
	  fabmo.runSBP('C#,3');
});
$("#call-c3").click(function(evt) {
	  fabmo.runSBP('C#,3');
});
$("#call-c88").click(function(evt) {
    fabmo.runSBP('C#,88');
});
$("#call-c1004766001").click(function(evt) {
    fabmo.runSBP('C#,1004766001');
});
$("#call-c1004766002").click(function(evt) {
    fabmo.runSBP('C#,1004766002');
});
$("#call-c1004766003").click(function(evt) {
    fabmo.runSBP('C#,1004766003');
});
$("#call-c1004766004").click(function(evt) {
    fabmo.runSBP('C#,1004766004');
});
$("#call-c1004766005").click(function(evt) {
    fabmo.runSBP('C#,1004766005');
});
$("#call-c1004766006").click(function(evt) {
    fabmo.runSBP('C#,1004766006');
});
$("#call-c1004766007").click(function(evt) {
    fabmo.runSBP('C#,1004766007');
});
$("#call-c1004766008").click(function(evt) {
    fabmo.runSBP('C#,1004766008');
});
$("#call-c1004766009").click(function(evt) {
    fabmo.runSBP('C#,1004766009');
});
$("#call-c1004766010").click(function(evt) {
    fabmo.runSBP('C#,1004766010');
});
$("#call-c1004766011").click(function(evt) {
    fabmo.runSBP('C#,1004766011');
});
$("#call-home").click(function(evt) {
    fabmo.runSBP('MH,');
});
$("#call-back").click(function(evt) {
    fabmo.runSBP('C#,79');
});
$("#call-pull-keypad").click(function(evt) {
    fabmo.showDRO();
});
$("#call-set-z-zero").click(function(evt) {
    fabmo.runSBP('C#,78');
});
$("#call-reset-z-off").click(function(evt) {
    fabmo.runSBP('C#,77');
});
$("#call-DRO-rollout").click(function(evt) {
    fabmo.showDRO();
});
$("#call-DRO-hide").click(function(evt) {
    fabmo.hideDRO();
});
$("#call-touch-and-go").click(function(evt) {
    fabmo.launchApp('fabmo-touchandgo');
});
// Updating Unit Type before Centering Tool
function updateUnits (callback){
  fabmo.getConfig(function(err, cfg) {
    curUnits = cfg.machine.units;
console.log("units1: " + curUnits);  
    callback(curUnits);
  });
}
function toCenter(curUnits){
console.log("units2: " + curUnits);
    if (curUnits ==="mm") {
      fabmo.runSBP('M2,75,100');
    } else {
      fabmo.runSBP('M2,3,4');
    }
}
$("#call-center").click(function(evt) { // CENTER HERE
    updateUnits(toCenter);
});

//$("#call-pull-keypad").click(function(evt) {
//  fabmo.notify('info', 'Heads Up! How extensive can this message be??');
//});

$("#nav-showdro").click(function(evt) {
  fabmo.showDRO();
});
$("#nav-hidedro").click(function(evt) {
  fabmo.hideDRO();
});
$("#dash-info").click(function(evt) {
  fabmo.notify('info', 'Heads Up!');
});
$("#dash-success").click(function(evt) {
  fabmo.notify('success', 'Great Job!');
});
$("#dash-warning").click(function(evt) {
  fabmo.notify('warning', 'Uh Oh!');
});
$("#dash-error").click(function(evt) {
  fabmo.notify('error', 'Epic Fail!');
});
$("#dash-launch-job-manager").click(function(evt) {
  fabmo.launchApp('job-manager');
});
$("#dash-launch-doc").click(function(evt) {
  fabmo.navigate('http://docs.handibot.com/doc-output/Handibot%202%20MANUAL%20Safe%20Use%20Source_v001.pdf', {target : '_blank'});
});
