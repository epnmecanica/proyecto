                                
                                
                                $(document).ready(function() {
				var gd = new GraphicDisplay("CADCanvas", 800, 600);
				gd.unitMeasure = "cm";
				gd.unitConversionFactor = 1/100; 
				gd.showOrigin = true;
				gd.showGrid = true;
                                
				//gd.readonly = true;
                                
				
				// Button behaviour
                                /*
				$("#gd_navigate").click(function(){gd.setMode(gd.MODES.NAVIGATE);});
				$("#gd_move").click(function(){gd.setMode(gd.MODES.MOVE);});
				$("#gd_edit").click(function(){gd.setMode(gd.MODES.EDIT);});
				$("#gd_delete").click(function(){gd.setMode(gd.MODES.DELETE);});
				
				$("#gd_zoomin").click(function(){gd.zoomIn();});
				$("#gd_zoomout").click(function(){gd.zoomOut();});
				
				$("#gd_addpoint").click(function(){gd.setMode(gd.MODES.ADDPOINT);});
				$("#gd_addline").click(function(){gd.setMode(gd.MODES.ADDLINE);});
				$("#gd_addcircle").click(function(){gd.setMode(gd.MODES.ADDCIRCLE);});
				$("#gd_addarc").click(function(){gd.setMode(gd.MODES.ADDARC);});
				$("#gd_addrectangle").click(function(){gd.setMode(gd.MODES.ADDRECTANGLE);});
				$("#gd_addmeasure").click(function(){gd.setMode(gd.MODES.ADDMEASURE);});
				$("#gd_addlabel").click(function(){gd.setMode(gd.MODES.ADDLABEL);});
				*/
				// # # # CUSTOM BINDING # # # 
				/*
                                $("#gd_add_serbatoio_orizzontale").click(function(){
					gd.setModeShape(getShapeSerbatoioOrizzontale);
				});

				$("#gd_add_serbatoio_verticale").click(function(){
					gd.setModeShape(getShapeSerbatoioVerticale);
				});

				$("#gd_add_edificio").click(function(){
					gd.setModeShape(getShapeEdificio);
				});

				$("#gd_add_albero").click(function(){
					gd.setModeShape(getShapeAlbero);
				});

				$("#gd_add_ostacolo").click(function(){
					gd.setModeShape(getShapeOstacolo);
				});

				$("#gd_add_autobotte").click(function(){
					gd.setModeShape(getShapeAutobotte);
				});
				// # # # END CUSTOM BINDING # # # 
				*/
                                
                                    
                                   
                                loadIcons(gd);
				initCAD(gd);
                                
			});