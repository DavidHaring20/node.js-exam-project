// fetch("/api/motorhome/searchById").then(res => res.json()).then(res => console.log(res.response));

(async function read() {
    try {
        // Fetch data from API
        const response = await fetch('/api/motorhome/searchById');
        const result = await response.json();
        const motorhomeObject = result.response;
    
        // Get div by ID from HTML 
        const motorhomeDivInHtml = document.getElementById('motorhome');

        // Create div to display data for Updating the motorhome
        const motorhomeDiv = document.createElement('div');
        motorhomeDiv.classList.add('motorhome-div');

        // Brand
        const formDiv1 = document.createElement('div');
        formDiv1.classList.add('form-div');
        const brandLabel = document.createElement('label');
        brandLabel.innerText = "Brand: ";
        const brandInput = document.createElement('input');
        brandInput.setAttribute('type', 'text');
        brandInput.setAttribute('name', 'brand');
        brandInput.setAttribute('value', motorhomeObject.brand);
        
        formDiv1.appendChild(brandLabel);
        formDiv1.appendChild(brandInput);
        
        // Model
        const formDiv2 = document.createElement('div');
        formDiv2.classList.add('form-div');
        const modelLabel = document.createElement('label');
        modelLabel.innerText = "Model: ";
        const modelInput = document.createElement('input');
        modelInput.setAttribute('type', 'text');
        modelInput.setAttribute('name', 'model');
        modelInput.setAttribute('value', motorhomeObject.model);
        
        formDiv2.appendChild(modelLabel);
        formDiv2.appendChild(modelInput);        
        
        // Type
        const formDiv3 = document.createElement('div');
        formDiv3.classList.add('form-div');
        const typeLabel = document.createElement('label');
        typeLabel.innerText = "Type: ";
        const typeInput = document.createElement('input');
        typeInput.setAttribute('name', 'model');
        typeInput.setAttribute('type', 'text');
        typeInput.setAttribute('value', motorhomeObject.type);
        
        formDiv3.appendChild(typeLabel);
        formDiv3.appendChild(typeInput); 

        // Gas Type
        const formDiv4 = document.createElement('div');
        formDiv4.classList.add('form-div');
        const gasTypeLabel = document.createElement('label');
        gasTypeLabel.innerText = "Gas Type: ";
        const gasTypeInput = document.createElement('input');
        gasTypeInput.setAttribute('name', 'model');
        gasTypeInput.setAttribute('type', 'text');
        gasTypeInput.setAttribute('value', motorhomeObject.gasType);
        
        formDiv4.appendChild(gasTypeLabel);
        formDiv4.appendChild(gasTypeInput); 

        // Number of Seats
        const formDiv5 = document.createElement('div');
        formDiv5.classList.add('form-div');
        const numberOfSeatsLabel = document.createElement('label');
        numberOfSeatsLabel.innerText = "Number Of Seats: ";
        const numberOfSeatsInput = document.createElement('input');
        numberOfSeatsInput.setAttribute('name', 'model');
        numberOfSeatsInput.setAttribute('type', 'text');
        numberOfSeatsInput.setAttribute('value', motorhomeObject.numberOfSeats);
        
        formDiv5.appendChild(numberOfSeatsLabel);
        formDiv5.appendChild(numberOfSeatsInput);

        // Odometer
        const formDiv6 = document.createElement('div');
        formDiv6.classList.add('form-div');
        const odometerLabel = document.createElement('label');
        odometerLabel.innerText = "Odometer: ";
        const odometerInput = document.createElement('input');
        odometerInput.setAttribute('name', 'model');
        odometerInput.setAttribute('type', 'number');
        odometerInput.setAttribute('value', motorhomeObject.odometer);
        
        formDiv6.appendChild(odometerLabel);
        formDiv6.appendChild(odometerInput);

        // Year of Manufacture
        const formDiv7 = document.createElement('div');
        formDiv7.classList.add('form-div');
        const yearOfManufactureLabel = document.createElement('label');
        yearOfManufactureLabel.innerText = "Year Of Manufacture: ";
        const yearOfManufactureInput = document.createElement('input');
        yearOfManufactureInput.setAttribute('name', 'model');
        yearOfManufactureInput.setAttribute('type', 'text');
        yearOfManufactureInput.setAttribute('value', motorhomeObject.yearOfManufacture);
        
        formDiv7.appendChild(yearOfManufactureLabel);
        formDiv7.appendChild(yearOfManufactureInput);

        // Condition 
        const formDiv8 = document.createElement('div');
        formDiv8.classList.add('form-div');
        const conditionLabel = document.createElement('label');
        conditionLabel.innerText = "Condition: ";
        const conditionInput = document.createElement('input');
        conditionInput.setAttribute('name', 'model');
        conditionInput.setAttribute('type', 'text');
        conditionInput.setAttribute('value', motorhomeObject.condition);
        
        formDiv8.appendChild(conditionLabel);
        formDiv8.appendChild(conditionInput);

        // Additional Info
        const formDiv9 = document.createElement('div');
        formDiv9.classList.add('form-div');
        const additionalInfoLabel = document.createElement('label');
        additionalInfoLabel.innerText = "Additional Info: ";
        const additionalInfoInput = document.createElement('input');
        additionalInfoInput.classList.add('input-field');
        additionalInfoInput.setAttribute('name', 'model');
        additionalInfoInput.setAttribute('type', 'text');
        additionalInfoInput.setAttribute('value', motorhomeObject.additionalInfo);
        
        formDiv9.appendChild(additionalInfoLabel);
        formDiv9.appendChild(additionalInfoInput);

        // Appending child elements to main div in HTML
        motorhomeDiv.appendChild(formDiv1);
        motorhomeDiv.appendChild(formDiv2);
        motorhomeDiv.appendChild(formDiv3);
        motorhomeDiv.appendChild(formDiv4);
        motorhomeDiv.appendChild(formDiv5);
        motorhomeDiv.appendChild(formDiv6);
        motorhomeDiv.appendChild(formDiv7);
        motorhomeDiv.appendChild(formDiv8);
        motorhomeDiv.appendChild(formDiv9);
        motorhomeDivInHtml.appendChild(motorhomeDiv);

    } catch(error) {
        console.log(error);
    }
})()