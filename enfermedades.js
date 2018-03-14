var enfermedades = [
	{
		"nombre":"Bronquiectasia",
		"descripcion":"Es una enfermedad inflamatoria crónica  de las vías aéreas que implica la dilatación de los bronquios.",
		"recomendacion":"La principal vía de tratamiento consiste en mantener libres las vías respiratorias y evitar posibles obstrucciones y complicaciones derivadas de las bronquiectasias",
		"sintomas":{
			"Piel con color azul":0.6,	
			"Dedos de la mano hinchados en la parte más distal":0.7,	
			"Fiebre":0.5,
			"Respiración sibilante":0.5,
			"Problemas respiratorios, en especial cuando se hace deporte":0.6,
			"Pérdida de peso":0.5,	
			"Dolor en el pecho":0.4
			}
	},
	{
		"nombre":"Edema Pulmonar",
		"descripcion":"Un edema pulmonar es una acumulación anormal de líquido en los pulmones que provoca dificultad respiratoria.",
		"recomendacion":"Seguir una dieta saludable, baja en grasas y sal también disminuye considerablemente el riesgo de padecer esta enfermedad.",
		"sintomas":{
			"Expectoración de sangre o espuma con sangre":0.6,
			"Piel con color azul":0.4,
			"Sudoración excesiva":0.7,	
			"Fiebre":0.5
			}
	},

	{
		"nombre":"Epoc",
		"descripcion":"La enfermedad pulmonar obstructiva crónica, conocida con las siglas EPOC, consiste en la obstrucción persistente de las vías respiratorias",
		"recomendacion":"Alimentación saludable, hacer ejercisio y no fumar",
		"sintomas":{
			"Tos y aumento de la mucosidad, normalmente al levantarse por la mañana":0.6,	
			"Respiración sibilante":0.7,	
			"Fiebre":0.5,	
			"Pérdida de peso":0.7,	
			"Falta de energía":0.6
			}
	},
	{
		"nombre":"Neumonía",
		"descripcion":"Es una infección del pulmón caracterizada por la multiplicación de microorganismos en el interior de los alvéolos, lo que provoca una inflamación con daño pulmonar.",
		"recomendacion":"La abstención de fumar, reducir el consumo de alcohol y mejorar los hábitos higiénicos de limpieza oral y dental.",
		"sintomas":{
			"Dificultad para respirar":0.3,	
			"Mal aliento severo":0.7,	
			"Fiebre":0.5,	
			"Vómitos":0.5,
			"Labios azules":0.6,
			"Náuseas":0.6
			}
	},
	{
		"nombre":"Asma",
		"descripcion":"La enfermedad aparece como respuesta a determinados estímulos que producen alergia: polen, ácaros del polvo, partículas de la piel de gato y perro, humo, aire frío, ciertos alimentos o aditivos alimenticios.",
		"recomendacion":"evitar realizar ejercicios intensos en época de polinización, ya que esto puede generar dificultades respiratorias que deriven en un ataque de asma.",
		"sintomas":{
			"Dificultad para respirar":0.4,	
			"Una picazón en el cuello":0.5,	
			"Mal aliento severo":0.7,	
			"Fiebre":0.5
			}
	},
	{
		"nombre":"Silicosis",
		"descripcion":"La silicosis es una enfermedad que no tiene cura y que afecta al sistema respiratorio por inhalar polvo sílice",
		"recomendacion":"Lave sus manos y cara antes de comer, beber, ir al baño, fumar o ponerse maquillaje.",
		"sintomas":{
			"Dificultad para respirar":0.5,
			"Problemas respiratorios, en especial cuando se hace deporte":0.6,
			"Dolor en el pecho":0.7,
			"Mal aliento severo":0.4,	
			"Fiebre":0.5,
			"Gradual oscurecimiento de las uñas, llevando incluso a su ruptura":0.7,
			"Pérdida de peso":0.6,
			"Piel con color azul":0.5
			}
	},
		{
		"nombre":"Enfisema",
		"descripcion":"El enfisema es un tipo de enfermedad pulmonar obstructiva crónica (EPOC) por la que se produce la destrucción del tejido pulmonar, principalmente por fumar.",
		"recomendacion":"No exponerse a los factores de riesgo que la originan: el tabaco y los ambientes contaminados.",
		"sintomas":{
			"Dificultad para respirar":0.6,
			"Dolor en el pecho":0.7,
			"Mal aliento severo":0.4,	
			"Fiebre":0.5,	
			"Uñas de color azul":0.5,
			"Piel con color azul":0.5,	
			"El corazón le late muy rápido":0.6
			}
	},
	{
		"nombre":"Cáncer de pulmón",
		"descripcion":"Se produce cuando hay un crecimiento exagerado de células malignas en este órgano.",
		"recomendacion":" Si acude al médico cuando comienza a notar los síntomas, es posible que el cáncer se diagnostique en una etapa temprana cuando es más probable que el tratamiento sea más eficaz.",
		"sintomas":{
			"Pérdida de peso ":0.4,
			"Dificultad para respirar":0.5,
			"Dolor severo del hombro":0.5,
			"Dolor en los huesos":0.5
			}
	},
	{
		"nombre":"Faringitis",
		"descripcion":"Se produce un hinchazón, normalmente de la parte posterior de la garganta; en la mayoría de los casos como consecuencia de resfriados, gripe u otros virus.",
		"recomendacion":"Es recomendable descansar la voz o beber mucha agua para mantener la humedad de la garganta y prevenir la deshidratación.",
		"sintomas":{
			"Dolor de garganta":0.7,
			"Pérdida de peso":0.3,	
			"Dolor de oido":0.5,	
			"Dificultad para respirar":0.3
			}
	},
	{
		"nombre":"Gripe",
		"descripcion":"Se produce como resultado de virus que, generalmente, produce infección de garganta, pulmones y nariz.",
		"recomendacion":"Es aconsejable prevenir la gripe no solo con la vacunación, si no evitando el contagio, lavándose las manos cuando se cree ha estado en contacto con el virus",
		"sintomas":{
			"Cuerpo cortado":0.7,	
			"Pérdida de peso":0.3,
			"Náuseas":0.5,
			"Vómitos":0.5,	
			"Dolor de garganta":0.5,
			"Dificultad para respirar":0.3
			}
	}
]