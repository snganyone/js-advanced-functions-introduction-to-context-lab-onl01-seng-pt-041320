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

function createEmployeeRecords(arr){
    const emp_map = arr.map(x => createEmployeeRecord(x));
    return emp_map;
}

function createTimeInEvent(arr, time){
    let [date, hour] = time.split(' ');
    arr.type = "TimeIn";
    arr.hour = parseInt(hour, 10);
    arr.date = date;
    arr.timeInEvents.push(arr);
    return arr;
}

function createTimeOutEvent(arr, time){
    let [date, hour] = time.split(' ');
    arr.type = "TimeOut";
    arr.hour = parseInt(hour, 10);
    arr.date = date;
    arr.timeOutEvents.push(arr);
    return arr;
}

function hoursWorkedOnDate(arr, time){
    let timein = createTimeInEvent(arr, time);
    let timeout = createTimeOutEvent(arr, time);

    let elapsed_time = timein.hour - timeout.hour;
    let hours = parseInt(elapsed_time);
    return elapsed_time;
}