var btnAdd= document.getElementById("btnAdd"),
	btnRemove= document.getElementById("btnRemove"),
	btnRegistrar= document.getElementById("btnRegistrar");
/*************************VAR********************************/


/***********************Events*******************************/
	btnAdd.addEventListener("click", validateAddTask);
	btnRemove.addEventListener("click", removeTask);
/************************Events******************************/


/************************functions**************************/

	function validateAddTask () {
		sTask= document.getElementById("txtTask").value,
		sPrior= document.querySelector("#sltPrior").value,

		eleTask=document.getElementById("txtTask"),
		elePrior=document.getElementById("sltPrior");

		if(validarForm(sTask, sPrior)){  //si validarForm==true(el formularios esta completo)
			removeError(eleTask, elePrior);
			addTask();
		}
		else  // el formulario tiene campos vacios
		{
			addError(eleTask, elePrior, sTask, sPrior);

		}
	}

	function validarForm (sTask, sPrior) {		
		if(sTask=="" || sPrior==""){
			return false; //falso--hay algun campo vacio
		}
		else
		{
			return true;  //true el formulario esta lleno
		}
	}

	function removeError (eleTask, elePrior) {
		eleTask.classList.remove("error");
		elePrior.classList.remove("error");
	}

	function addTask() {
		var tBody= document.querySelector("#table1 tbody"),
			eRow= document.createElement("tr"), //crear fila
			eCellTask= document.createElement("td"), //crear celda
			textNodeTask= document.createTextNode(sTask), //crear nodo text
			btnDeleteTask= document.createElement("input");

		eCellTask.appendChild(textNodeTask); 	
		eRow.appendChild(eCellTask);
		tBody.appendChild(eRow);

		btnDeleteTask.type="button";
		btnDeleteTask.value="Borrar";
		btnDeleteTask.classList.add("deleteButton");
		eCellTask.appendChild(btnDeleteTask);
		
		asignarColor(eRow); 
		limpiarCampos();
		
		btnDeleteTask.addEventListener("click", deleteTask,false);
		
		//btnDeleteTask.addEventListener("click", deleteTask(eRow),false);  Esta funcion siempre se ejecuta automaticamente con la primera

		/*btnDeleteTask.addEventListener("click", function(){
			eRowP= this.parentNode;
			eRowP.remove();
		},false); 
		esta funcion sirve perfecto pero queda el codigo mezclado de las dos funciones*/

	}

	function deleteTask () {
		eRowP= this.parentNode;
		eRowP.remove();
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

/*	function deleteTask (eRow) {
		eRow.remove();
	}  
con esta funcion nunca funciona por que se viene a ejecutar automaticamente, no debe recibir parametros la funcion*/


	function addError (eleTask, elePrior, sTask, sPrior) {
		alert("Debe completar todos los campos del formulario");

		if(sTask==""){
			eleTask.classList.add("error");
		}
		else if(sPrior=="")
		{
			elePrior.classList.add("error");
		}
	}


	function removeTask () {
		var nTask= Number(document.getElementById("txtRemove").value),
			arrTd= document.getElementsByTagName("td");

			arrTd[nTask-1].remove();

			document.getElementById("txtRemove").value="";		
	}