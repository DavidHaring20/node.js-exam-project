// fetch("/api/motorhome/").then(res => res.json()).then(res => console.log(res.response));

(async function read() {
    try {
        const response = await fetch("/api/motorhome/");
        const result = await response.json();  
        let motorhomeArray = await result.response;
        console.log("Motorhome array: " + motorhomeArray);

        const motorhomesDiv = document.getElementById('motorhome-list');

        motorhomeArray.map(motorhome => {
            const motorhomeDiv = document.createElement('div');
            motorhomeDiv.classList.add('motorhome-div');

            // Brand 
            const brand = document.createElement('div');
            brand.classList.add('brand');
            brand.innerText = motorhome.brand;
            
            // Model
            const model = document.createElement('div');
            model.classList.add('model');
            model.innerText = motorhome.model;

            // Type 
            const type = document.createElement('div');
            type.classList.add('type');
            type.innerText = motorhome.type;

            // Gas Type 
            const gasType = document.createElement('div');
            gasType.classList.add('gasType');
            gasType.innerText = motorhome.gasType;

            // Number of Seats 
            const numberOfSeats = document.createElement('div');
            numberOfSeats.classList.add('numberOfSeats');
            numberOfSeats.innerText = motorhome.numberOfSeats;

            // Odometer 
            const odometer = document.createElement('div');
            odometer.classList.add('odometer');
            odometer.innerText = motorhome.odometer;

            // Year of Manufacture 
            const yearOfManufacture = document.createElement('div');
            yearOfManufacture.classList.add('yearOfManufacture');
            yearOfManufacture.innerText = motorhome.yearOfManufacture;

            // Condition 
            const condition = document.createElement('div');
            condition.classList.add('condition');
            condition.innerText = motorhome.condition;

            // Additional info 
            const additionalInfo = document.createElement('div');
            additionalInfo.classList.add('additionalInfo');
            additionalInfo.innerText = motorhome.additionalInfo;

            motorhomeDiv.appendChild(brand);
            motorhomeDiv.appendChild(model);
            motorhomeDiv.appendChild(type);
            motorhomeDiv.appendChild(gasType);
            motorhomeDiv.appendChild(numberOfSeats);
            motorhomeDiv.appendChild(odometer);
            motorhomeDiv.appendChild(yearOfManufacture);
            motorhomeDiv.appendChild(condition);
            motorhomeDiv.appendChild(additionalInfo);
            motorhomesDiv.appendChild(motorhomeDiv);
        });
    } catch (error) {
        console.log(error);
    }
})();