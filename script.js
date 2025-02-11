document.getElementById("generatePrediction").addEventListener("click", function() {
    let userName = document.getElementById("userName").value.trim();
    let weatherCondition = document.getElementById("weatherCondition").value.trim();

    let greeting = userName ? `¡Hola, ${userName}!` : "¡Hola!";
    console.log(greeting);

    console.log(`El clima de hoy es: ${weatherCondition}`);

    let randomPrediction = Math.floor(Math.random() * 6);

    let prediction;
    switch (randomPrediction) {
        case 0:
            prediction = "Hoy sera un dia increíble, ¡disfrutalo!";
            break;
        case 1:
            prediction = "Mantente alerta, puede haber sorpresas inesperadas.";
            break;
        case 2:
            prediction = "Sera un dia productivo si te organizas bien.";
            break;
        case 3:
            prediction = "No dejes que los pequeños problemas arruinen tu dia.";
            break;
        case 4:
            prediction = "Hoy es un buen día para probar algo nuevo.";
            break;
        case 5:
            prediction = "Confia en tu intuición, tomara las mejores decisiones por ti.";
            break;
    }

    let outputMessage = `${greeting}\nEl clima de hoy es: ${weatherCondition}\nPredicción del día: ${prediction}`;
    document.getElementById("output").textContent = outputMessage;
});
