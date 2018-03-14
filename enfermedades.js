var enfermedades = [
	{
		"nombre":"Bronquiectasia",
		"descripcion":"Es una enfermedad inflamatoria crónica  de las vías aéreas que implica la dilatación de los bronquios.",
		"recomendacion":"La principal vía de tratamiento consiste en mantener libres las vías respiratorias y evitar posibles obstrucciones y complicaciones derivadas de las bronquiectasias",
		"sintomas":{
			"Piel con color azul":0.6,
			"Halitosis o mal aliento bucal":0.5,
			"Tos crónica con esputo fétido (flema originada en el pulmón con mal olor)":0.6,
			"Infecciones bronquiales repetidas":0.7,
			"Dedos de la mano hinchados en la parte más distal":0.7,
			"Expectoración con sangre originada en los bronquios o los pulmones":0.7,
			"Fatiga":0.5,
			"Fiebre":0.5,
			"La tos suele producir expectoración con pus":0.5,
			"Dolor torácico":0.5,
			"Palidez":0.4,
			"Problemas respiratorios,en especial cuando se hace deporte":0.6,
			"Perdia de peso":0.5,
			"Sibilancias o sonido que hace el aire que se genera en las vías respiratorias cuando están obstruidas o congestionadas":0.3,
			"Dolor en el Pecho":0.4
			}
	},
	{
		"nombre":"Edema Pulmonar",
		"descripcion":"Un edema pulmonar es una acumulación anormal de líquido en los pulmones que provoca dificultad respiratoria.",
		"recomendacion":"Seguir una dieta saludable, baja en grasas y sal también disminuye considerablemente el riesgo de padecer esta enfermedad.",
		"sintomas":{
			"Expectoración de sangre o espuma con sangre":0.6,
			"Incapacidad para pronunciar oraciones largas completas debido a la falta de aire":0.5,
			"Ansiedad e inquietud":0.5,
			"Una tonalidad azul o gris en la piel":0.4,
			"Sudoración excesiva":0.7,
			"Sonidos roncus o de gorgoteo al respirar al auscultar el pulmón":0.6,
			"Fatiga":0.5,
			"Fiebre":0.5,
			"Hinchazón de piernas y abdomen":0.6,
			"Dolor torácico":0.3,
			"Palidez":0.4,
			"Disminución de la cantidad de orina":0.7,
			"Aumento de la frecuencia cardíaca":0.5,
			"Disminución de la lucidez menta":0.6,
			"Despertarse a la noche con sensación de dificultad para respirar que puede aliviarse al sentarse":0.6
			}
	},

	{
		"nombre":"Epoc",
		"descripcion":"La enfermedad pulmonar obstructiva crónica, conocida con las siglas EPOC, consiste en la obstrucción persistente de las vías respiratorias",
		"recomendacion":"Alimentación saludable, hacer ejercisio y no fumar",
		"sintomas":{
			"Tos y aumento de la mucosidad, normalmente al levantarse por la mañana":0.6,
			"Tendencia a sufrir resfriados de pecho":0.5,
			"El esputo que se produce durante estos resfriados con frecuencia se vuelve amarillo o verde debido a la presencia de pus":0.5,
			"Infecciones respiratorias frecuentes":0.4,
			"Respiración sibilante":0.7,
			"Sensación de ahogo cuando se hace un esfuerzo y, más adelante, ahogo en actividades diarias, como lavarse, vestirse y preparar la comida":0.6,
			"Fatiga":0.5,
			"Fiebre":0.5,
			"Hinchazón de piernas y abdomen":0.6,
			"Dolor torácico":0.3,
			"Color azul en los labios o los lechos ungueales":0.4,
			"Pérdida de peso":0.7,
			"Aumento de la frecuencia cardíaca":0.5,
			"Presión en el pecho":0.6,
			"Falta de energía":0.6
			}
	},
	{
		"nombre":"Neumonía",
		"descripcion":"Es una infección del pulmón caracterizada por la multiplicación de microorganismos en el interior de los alvéolos, lo que provoca una inflamación con daño pulmonar.",
		"recomendacion":"La abstención de fumar, reducir el consumo de alcohol y mejorar los hábitos higiénicos de limpieza oral y dental.",
		"sintomas":{
			"Dificultad para respirar":0.3,
			"Resfriado":0.5,
			"Dolor de cabeza":0.5,
			"Problemas respiratorios,en especial cuando se hace deporte":0.5,
			"Delirios (confusión)":0.7,
			"Mal aliento severo":0.7,
			"Fatiga":0.5,
			"Fiebre":0.5,
			"Dolor muscular":0.6,
			"Dolor en el pecho, especialmente al respirar profundamente":0.6,
			"Debilidad":0.4,
			"Diarrea":0.5,
			"Vómitos ":0.5,
			"Labios azules ":0.6,
			"Náuseas":0.6
			}
	},
	{
		"nombre":"Asma",
		"descripcion":"La enfermedad aparece como respuesta a determinados estímulos que producen alergia: polen, ácaros del polvo, partículas de la piel de gato y perro, humo, aire frío, ciertos alimentos o aditivos alimenticios.",
		"recomendacion":"evitar realizar ejercicios intensos en época de polinización, ya que esto puede generar dificultades respiratorias que deriven en un ataque de asma.",
		"sintomas":{
			"Dificultad para respirar":0.4,
			"Resfriado":0.3,
			"Una picazón en el cuello":0.5,
			"Dificultad para respirar.":0.5,
			"Ojeras":0.7,
			"Mal aliento severo":0.7,
			"Fatiga":0.5,
			"Fiebre":0.5,
			"Estar de mal genio o irritable":0.6,
			"Sentirse nervioso o inquieto":0.5,
			"Dificultad para caminar":0.4,
			"Difucultad para hablar debido a que es muy difícil respirar":0.6,
			"Tos":0.5,
			"Está confundido o reacciona menos de lo habitual":0.6,
			"Opresión en el pecho":0.7
			}
	},
	{
		"nombre":"Silicosis",
		"descripcion":"La silicosis es una enfermedad que no tiene cura y que afecta al sistema respiratorio por inhalar polvo sílice",
		"recomendacion":"Lave sus manos y cara antes de comer, beber, ir al baño, fumar o ponerse maquillaje.",
		"sintomas":{
			"Dificultad para respirar":0.5,
			"Debilidad general":0.3,
			"Sudores nocturnos":0.5,
			"Problemas respiratorios,en especial cuando se hace deporte":0.6,
			"Dolores en el pecho":0.7,
			"Mal aliento severo":0.4,
			"Fatiga":0.3,
			"Fiebre":0.5,
			"Gradual oscurecimiento de las uñas, llevando incluso a su ruptura":0.7,
			"Perdida de peso":0.6,
			"Tonalidad de Piel de color azul":0.5,
			"Dificultad al respirar cuando hace esfuerzo físico":0.6,
			"Tos fuerte":0.5,
			"Insuficiencia respiratoria":0.7,
			"Perdida del apetito.":0.5
			}
	},
		{
		"nombre":"Enfisema",
		"descripcion":"El enfisema es un tipo de enfermedad pulmonar obstructiva crónica (EPOC) por la que se produce la destrucción del tejido pulmonar, principalmente por fumar.",
		"recomendacion":"No exponerse a los factores de riesgo que la originan: el tabaco y los ambientes contaminados.",
		"sintomas":{
			"Dificultad para respirar":0.6,
			"Debilidad general":0.3,
			"Sudores nocturnos":0.4,
			"Dificultad al hablar por falta de aire":0.6,
			"Dolores en el pecho":0.7,
			"Mal aliento severo":0.4,
			"Fatiga":0.4,
			"Fiebre":0.5,
			"Trabajo para recobrar el aliento o hablar":0.7,
			"uñas de color azul":0.5,
			"Tonalidad de Piel de color azul":0.5,
			"Dificultad al respirar cuando hace esfuerzo físico":0.5,
			"Está confundido o reacciona menos de lo habitual":0.5,
			"Insuficiencia respiratoria":0.7,
			"El corazón le tarde muy rápido":0.6
			}
	},
	{
		"nombre":"Cáncer de pulmón",
		"descripcion":"Se produce cuando hay un crecimiento exagerado de células malignas en este órgano.",
		"recomendacion":" Si acude al médico cuando comienza a notar los síntomas, es posible que el cáncer se diagnostique en una etapa temprana cuando es más probable que el tratamiento sea más eficaz.",
		"sintomas":{
			"Tos con sangre o esputo (saliva o flema) del color del metal oxidado":0.7,
			"Dolor en el pecho que a menudo empeora cuando respira profundamente, tose o se ríe":0.5,
			"Pérdida de peso ":0.4,
			"Dificultad para respirar":0.5,
			"Dolores en el pecho":0.7,
			"Protuberancias cerca de la superficie del cuerpo":0.5,
			"Ronquera":0.4,
			"Coloración amarillenta de la piel y los ojos":0.5,
			"Perdida de apetito":0.6,
			"Caída o debilidad de un párpado":0.5,
			"Dolor severo del hombro":0.5,
			"Dificultad al respirar cuando hace esfuerzo físico":0.4,
			"Infecciones como bronquitis y neumonía que no desaparecen o que siguen recurriendo":0.5,
			"Parición de sibilancias (silbido de pecho)":0.7,
			"Dolor en los huesos":0.5
			}
	},
	{
		"nombre":"Faringitis",
		"descripcion":"Se produce un hinchazón, normalmente de la parte posterior de la garganta; en la mayoría de los casos como consecuencia de resfriados, gripe u otros virus.",
		"recomendacion":"Es recomendable descansar la voz o beber mucha agua para mantener la humedad de la garganta y prevenir la deshidratación.",
		"sintomas":{
			"Dolor de garganta":0.7,
			"Sarampión":0.5,
			"Pérdida de peso":0.3,
			"Erupciones cutáneas":0.5,
			"Varicela":0.7,
			"Dolor de Oido":0.5,
			"Ronquera":0.4,
			"Dolores musculares o articulares":0.5,
			"Voz ronca":0.7,
			"Amigdalitis o amígdalas rojas e inflamadas":0.5,
			"Picazón de garganta":0.5,
			"Dificultad al respirar":0.3,
			"Dolor que empeora al tragar o hablar":0.7,
			"Ganglios inflamados en el cuello":0.7,
			"Congestión":0.4
			}
	},
	{
		"nombre":"Gripe",
		"descripcion":"Se produce como resultado de virus que, generalmente, produce infección de garganta, pulmones y nariz.",
		"recomendacion":"Es aconsejable prevenir la gripe no solo con la vacunación, si no evitando el contagio, lavándose las manos cuando se cree ha estado en contacto con el virus",
		"sintomas":{
			"Cuerpo Cortado":0.7,
			"Escalofríos":0.5,
			"Pérdida de peso":0.3,
			"Mareos":0.5,
			"Dolor de cabeza":0.7,
			"nauseas":0.5,
			"Vomito":0.5,
			"Dolores musculares o articulares.":0.7,
			"Voz ronca":0.7,
			"Mucosidad nasal o nariz tapada":0.6,
			"Dolor de garganta":0.5,
			"Dificultad al respirar":0.3,
			"Respiración acelerada":0.4,
			"Fatiga (cansancio)":0.7,
			"Diarrea":0.4
			}
	}
]