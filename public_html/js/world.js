                                
                                
                                $(document).ready(function() {
				var gd = new GraphicDisplay("CADCanvas", 800, 600);
				gd.unitMeasure = "cm";
				gd.unitConversionFactor = 1/100; 
				gd.showOrigin = true;
				gd.showGrid = true;
                                
				
                                // Check for the various File API support.
                                if (window.File && window.FileReader && window.FileList && window.Blob) {
                                  // Great success! All the File APIs are supported.
                                  alert('compatible');
                                } else {
                                  alert('The File APIs are not fully supported in this browser.');
                                }
                                    
                                   
                                loadIcons(gd);
				initCAD(gd);
                                
			});