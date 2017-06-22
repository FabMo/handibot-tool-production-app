// Load Single Macro File
function InstallMacro (numMacro,type_mac,name,description) {
  var sbp_macro = "";
  var source_folder = type_mac + "/";
  var source_data = source_folder + numMacro + ".sbp";
  jQuery.get(source_data, function(data) {
      sbp_macro += data;
    })
    .done(function() {
      source_data = source_data.replace(source_folder, '');
      source_data = source_data.replace('.sbp', '');
      var macro = {};
      macro.id = source_data;
      macro.name = name;
      macro.description = description;
      macro.content = sbp_macro;

    console.log("id: ", macro.id );
    console.log("name: ", macro.name );
//    console.log("description: ", macro.description );
//    console.log("id: ", macro.content );

      // create the macro with id macro.id
 	  fabmo.updateMacro(macro.id,{},function(err, result) {
 	  // sett the macro fields (name, description,content);
 	    fabmo.updateMacro(macro.id,{name:macro.name,content:macro.content,description:macro.description}, function(err, result) {
          fabmo.notify('info', "Macro '" + macro.id + "' saved.");
        });
      });
  });
}

// NOTE: There are subtle difference in the naming and descriptions of the same ("specific") macro across versions
//        and different macros will be loaded

// //Install ALL Handibot V2
$("#install-macroALL").click(function(evt) {
    InstallMacro(1004766001, "macros","004766_001","Handibot 2 Blue Plastic");
    InstallMacro(1004766002, "macros","004766_002","Handibot 2 Yellow Plastic");
	InstallMacro(1004766003, "macros","004766_003","Handibot 2 1/8 Acrylic");
	InstallMacro(1004766004, "macros","004766_004","Handibot 2 3/16 Acrylic");
	InstallMacro(1004766005, "macros","004766_005","Handibot 2 Dust Feet");
	InstallMacro(1004766006, "macros","004766_006","Handibot 2 Neoprene");
	InstallMacro(1004766007, "macros","004766_007","Handibot 2 Pointers");
	InstallMacro(1004766008, "macros","004766_008","Handibot 2 Tool Holders");
	InstallMacro(1004766009, "macros","004766_009","Handibot 2 Logo Plates");
	InstallMacro(1004766010, "macros","004766_010","Handibot 2 Foam Packaging");
	InstallMacro(1004766011, "macros","004766_011","Handibot 2 Test Base");
});

// Install Individually
$("#install-macro2").click(function(evt) {
    InstallMacro(2, "macros_specific","Reset Cutter Offset Distance","Defines offset for Z-Zero location for #3, and sets Axis Zero for Z (use after changing cutter");
});
$("#install-macro3").click(function(evt) {
    InstallMacro(3, "macros_specific","Set Zero Locations","Automatically Set Axis Zero for XYZ");
});
$("#install-macro6").click(function(evt) {
    InstallMacro(6, "macros","Start Spindle","Start the spindle and pause for spin up");
});
$("#install-macro7").click(function(evt) {
    InstallMacro(7, "macros","Stop Spindle","Stop the spindle");
});
$("#install-macro9").click(function(evt) {
    InstallMacro(9, "macros","Tool Change","Use ATC or manual tool change");
});
$("#install-macro77").click(function(evt) {
    InstallMacro(77, "macros_specific","Adjust Zero Plate Height","Remeasure Height of Z-Zero Plate");
});
$("#install-macro78").click(function(evt) {
    InstallMacro(78, "macros","Manually Set Z-Zero","Set Zeroing for Z based on Current Location for use with Macro#3");
});
$("#install-macro79").click(function(evt) {
    InstallMacro(79, "macros_specific","Park","Move to Park Location");
});
$("#install-macro88").click(function(evt) {
    InstallMacro(88, "macros","Quick-Bit","Measure Cutter Using Quick-Bit Pressure Sensitive Z Zero Plate");
});
$("#install-macro90").click(function(evt) {
    InstallMacro(90, "macros","MY_Variables","Load variables (with variable information)");
});
$("#install-macro91").click(function(evt) {
    InstallMacro(91, "macros","Change Unit type","Change Units");
});
