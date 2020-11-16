// Your code here

function createEmployeeRecord(arr){
    let emp_record = {};
    emp_record.firstName = arr[0];
    emp_record.familyName = arr[1];
    emp_record.title = arr[2];
    emp_record.payPerHour = arr[3];
    emp_record.timeInEvents = [];
    emp_record.timeOutEvents = [];
    return emp_record;
}