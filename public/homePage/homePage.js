(async function getMotorhomeNumber() {
    try {
        const response = await fetch("/api/motorhome/");
        const result = await response.json();  
        let motorhomeArray = result.response; 
        let length = motorhomeArray.length;

        const numberOfMotorhomes = document.getElementById('number-of-motorhomes');
        numberOfMotorhomes.innerText = "(" + length + ")";
    } catch(error) {
        console.log(error);
    }
})()