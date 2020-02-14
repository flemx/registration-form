public with sharing class ksdFormController {
    
    @AuraEnabled
    public static Boolean getUser(){
        String userId = UserInfo.getUserId();
        List<KSD_Registration__c> registrations =  [select Id from KSD_Registration__c where OwnerId = :userId];
        if(registrations.size() > 0){
            return true;
        }
        return false;
    }



}
