// fetch("/api/motorhome/").then(res => res.json()).then(res => console.log(res.response));

(async function read() {
    try {
        const response = await fetch("/api/motorhome/");
        const result = await response.json();  
        let motorhomeArray = await result.response;

        const motorhomesDiv = document.getElementById('motorhome-list');

        motorhomeArray.map(motorhome => {
            const motorhomeDiv = document.createElement('div');
            motorhomeDiv.classList.add('motorhome-div');

            // Divs to separate and style data better
            const divLegend = document.createElement('div');
            divLegend.classList.add('div-legend');

            const divForData = document.createElement('div');
            divForData.classList.add('div-data');

            const divShortData0 = document.createElement('div');
            divShortData0.classList.add('div-short-data0');

            const divShortData1 = document.createElement('div');
            divShortData1.classList.add('div-short-data1');

            const divShortData2 = document.createElement('div');
            divShortData2.classList.add('div-short-data2');

            const divLongData = document.createElement('div');
            divLongData.classList.add('div-long-data');

            const deleteDiv = document.createElement('div');
            const updateDiv = document.createElement('div');
            
            const divButtons = document.createElement('div');
            divButtons.classList.add('div-buttons');

            // Legend
            const divLegendNotAvailable = document.createElement('div');
            divLegendNotAvailable.classList.add('not-available');
            const divLegendNotAvailableSign = document.createElement('div');
            divLegendNotAvailableSign.classList.add('not-available-sign');
            const divLegendNotAvailableText = document.createElement('div');
            divLegendNotAvailableText.classList.add('not-available-text');
            divLegendNotAvailableText.innerText = "Not Available";

            divLegendNotAvailable.appendChild(divLegendNotAvailableSign);
            divLegendNotAvailable.appendChild(divLegendNotAvailableText);

            const divLegendOnService = document.createElement('div');
            divLegendOnService.classList.add('on-service');
            const divLegendOnServiceSign = document.createElement('div');
            divLegendOnServiceSign.classList.add('on-service-sign');
            const divLegendOnServiceText = document.createElement('div');
            divLegendOnServiceText.classList.add('on-service-text');
            divLegendOnServiceText.innerText = "On Service";

            divLegendOnService.appendChild(divLegendOnServiceSign);
            divLegendOnService.appendChild(divLegendOnServiceText);

            divLegend.appendChild(divLegendNotAvailable);
            divLegend.appendChild(divLegendOnService);

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

            // Code
            const code = document.createElement('div');
            code.classList.add('code');
            code.innerText = "Code: " + motorhome.code;

            // Status
            const status = document.createElement('div');
            status.classList.add('status');
            console.log(motorhome.status);
            status.innerText = "Status: " + motorhome.status;
            if (motorhome.status === "Not Available") {
                divForData.style.backgroundColor = "rgb(214, 117, 117)";
                divForData.style.border = "3px solid red";
            } else if (motorhome.status === "On Service") {
                divForData.style.backgroundColor = "rgb(216, 190, 42)";
                divForData.style.border = "3px solid orange";
            }

            // Additional info 
            const additionalInfo = document.createElement('div');
            additionalInfo.classList.add('additionalInfo');
            additionalInfo.innerText = "Additional info: " + motorhome.additionalInfo;


            // FORMS
            let id = motorhome._id;

            // Delete form
            let deleteForm = document.createElement('form');
            deleteForm.setAttribute('method', 'post');
            deleteForm.setAttribute('action', '/deletemotorhome/' + id); 

            // Delete button
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete');
            deleteButton.innerText = "Delete Motorhome";
            deleteButton.setAttribute('type', 'submit');

            // Add Delete Button to Delete Form
            deleteForm.appendChild(deleteButton);

            // Update form
            let updateForm = document.createElement('form');
            updateForm.setAttribute('method', 'get');
            updateForm.setAttribute('action', '/updatemotorhome/' + id);

            // Update button
            const updateButton = document.createElement('button');
            updateButton.classList.add('update');
            updateButton.innerText = "Update Motorhome";
            updateButton.setAttribute('type', 'submit');

            // Add Update Button to Update Form
            updateForm.appendChild(updateButton);

            // Horizontal line to make it more readable
            const horizontalLine = document.createElement('hr');
            horizontalLine.classList.add('horizontal-line');

            // Firstly append data to smaller divs and then later to one div as a whole
            // Short info like: type, model, brand...
            divShortData0.appendChild(code);
            divShortData1.appendChild(brand);
            divShortData1.appendChild(model);
            divShortData1.appendChild(type);
            divShortData1.appendChild(gasType);
            divShortData2.appendChild(numberOfSeats);
            divShortData2.appendChild(odometer);
            divShortData2.appendChild(yearOfManufacture);
            divShortData2.appendChild(condition);

            divForData.appendChild(divLegend);
            divForData.appendChild(divShortData0);
            divForData.appendChild(divShortData1);
            divForData.appendChild(divShortData2);

            // Additional info
            divLongData.appendChild(additionalInfo);

            divForData.appendChild(divLongData);

            // Buttons
            deleteDiv.appendChild(deleteForm);
            updateDiv.appendChild(updateForm);
            divButtons.appendChild(deleteDiv);
            divButtons.appendChild(updateDiv);

            // Appending everything to one div as a whole
            motorhomeDiv.appendChild(divForData);
            // motorhomeDiv.appendChild(divShortData1);
            // motorhomeDiv.appendChild(divShortData2);            
            // motorhomeDiv.appendChild(divLongData);
            motorhomeDiv.appendChild(divButtons);            
            motorhomeDiv.appendChild(horizontalLine);

            // Append every div for each motorhome to div in html
            motorhomesDiv.appendChild(motorhomeDiv);
        });
    } catch (error) {
        console.log(error);
    }
})();