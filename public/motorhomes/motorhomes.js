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
            brand.innerText = "Brand: " + motorhome.brand;
            
            // Model
            const model = document.createElement('div');
            model.classList.add('model');
            model.innerText = "Model: " + motorhome.model;

            // Type 
            const type = document.createElement('div');
            type.classList.add('type');
            type.innerText = "Type: " + motorhome.type;

            // Gas Type 
            const gasType = document.createElement('div');
            gasType.classList.add('gasType');
            gasType.innerText = "Gas Type: " + motorhome.gasType;

            // Number of Seats 
            const numberOfSeats = document.createElement('div');
            numberOfSeats.classList.add('numberOfSeats');
            numberOfSeats.innerText = "Number of Seats: " + motorhome.numberOfSeats;

            // Odometer 
            const odometer = document.createElement('div');
            odometer.classList.add('odometer');
            odometer.innerText = "Odometer: " + motorhome.odometer;

            // Year of Manufacture 
            const yearOfManufacture = document.createElement('div');
            yearOfManufacture.classList.add('yearOfManufacture');
            yearOfManufacture.innerText = "Year of Manufacture: " + motorhome.yearOfManufacture;

            // Condition 
            const condition = document.createElement('div');
            condition.classList.add('condition');
            condition.innerText = "Condition: " + motorhome.condition;

            // Additional info 
            const additionalInfo = document.createElement('div');
            additionalInfo.classList.add('additionalInfo');
            additionalInfo.innerText = "Additional info: " + motorhome.additionalInfo;

            // Divs to separate and style data better
            const divShortData1 = document.createElement('div');
            divShortData1.classList.add('div-short-data1');

            const divShortData2 = document.createElement('div');
            divShortData2.classList.add('div-short-data2');

            const divLongData = document.createElement('div');
            divLongData.classList.add('div-long-data');

            // Horizontal line to make it more readable
            const horizontalLine = document.createElement('hr');
            horizontalLine.classList.add('horizontal-line');

            // Append all data to one div which will be later appended to div in html
            divShortData1.appendChild(brand);
            divShortData1.appendChild(model);
            divShortData1.appendChild(type);
            divShortData1.appendChild(gasType);
            divShortData2.appendChild(numberOfSeats);
            divShortData2.appendChild(odometer);
            divShortData2.appendChild(yearOfManufacture);
            divShortData2.appendChild(condition);

            divLongData.appendChild(additionalInfo);

            motorhomeDiv.appendChild(divShortData1);
            motorhomeDiv.appendChild(divShortData2);            
            motorhomeDiv.appendChild(divLongData);
            motorhomeDiv.appendChild(horizontalLine);

            // Append every div for each motorhome to div in html
            motorhomesDiv.appendChild(motorhomeDiv);
        });
    } catch (error) {
        console.log(error);
    }
})();