var btnAdd= document.getElementById("btnAdd");
	btnRemove= document.getElementById("btnRemove");
/*************************VAR********************************/


/***********************Events*******************************/
	btnAdd.addEventListener("click", addTask);
	btnRemove.addEventListener("click", removeTask);
/************************Events******************************/


/************************functions**************************/

	function addTask() {
		var tBody= document.querySelector("#table1 tbody");
			sTask= document.getElementById("txtTask").value,
			sPrior= document.querySelector("#sltPrior").value,
			eRow= document.createElement("tr"), //crear fila
			eCellTask= document.createElement("td"), //crear celda
			textNodeTask= document.createTextNode(sTask); //crear nodo text

		controlError (sTask, sPrior);

		eCellTask.appendChild(textNodeTask); 	
		eRow.appendChild(eCellTask);
		tBody.appendChild(eRow);

		asignarColor(eRow);
		limpiarCampos();
	}

	function controlError (sTask, sPrior) {
		var eleTask=document.getElementById("txtTask"),
			elePrior=document.getElementById("sltPrior");

		if(sTask=="" || sPrior=="")
		{
			alert("Debe completar todos los datos requeridos");
		}


		if(sTask=="")
		{
			eleTask.classList.add("error");
		}
		else if(sPrior=="")
		{
			elePrior.classList.add("error");
		}
		else
		{
			eleTask.classList.remove("error");
			elePrior.classList.remove("error");
		}
	}


	function asignarColor(eRow) {
		var sPrior= document.querySelector("#sltPrior").value;

		switch (sPrior){
			case "Alta":
				eRow.classList.add("alto");
				break;
			case "Media":
				eRow.classList.add("medio");
				break;
			case "Baja":
			eRow.classList.add("bajo");
			break;
		}
	}


	function limpiarCampos () {
		document.getElementById("txtTask").value="";
		document.getElementById("sltPrior").value="";
	}

	function removeTask () {
		var nTask= Number(document.getElementById("txtRemove").value),
			arrTd= document.getElementsByTagName("td");

			arrTd[nTask-1].remove();

			document.getElementById("txtRemove").value="";		
	}