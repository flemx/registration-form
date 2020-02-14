import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import GET_USER from '@salesforce/apex/ksdFormController.getUser';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import TYPE from '@salesforce/schema/KSD_Registration__c.Attendee_Type__c';


export default class ksdRegistrationForm extends LightningElement {


    @track isNew = true;
    fields = [TYPE];

    constructor(){
        super();
        GET_USER()
        .then(result => {
            console.log('Result is:', result);
            this.isNew = result;
        })
        .catch(error => {
            const evt = new ShowToastEvent({
                title: "Error loading registration",
                message: this.error,
                variant: "error"
            });
            this.dispatchEvent(evt);
    
        });
    }


    checkCompleted(){
        
    }

 
            
    handleSuccess(event) {
        this.isNew = true;
        console.log('this.isNew is:', this.isNew);
        
        this.isNew = true;
        const evt = new ShowToastEvent({
            title: "Registration complete",
            message: "blablabla",
            variant: "success"
        });
        this.dispatchEvent(evt);

       
    }

}