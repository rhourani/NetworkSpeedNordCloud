
const stationList = [
    {x:0,y:0,reach:9},
    {x:20,y:20,reach:6},
    {x:10,y:0,reach:12},
    {x:5,y:5,reach:13},
    {x:99,y:25,reach:2}
]

const deviceList = [
    {x:0,y:0},
    {x:100,y:100},
    {x:15,y:10},
    {x:18,y:18},
    {x:13,y:13},
    {x:25,y:99}
]


calculateStationSpeed(deviceList, stationList);

function calculateStationSpeed (devices, stations) {
const ZERO_SPEED = 0;
let speed = 0;
let distancBetweenDeviceAndStation = 0;

for (let i = 0; i < devices.length ; i++){
    printBestStation.speed = ZERO_SPEED;
    for(let j = 0; j < stations.length ; j++)
    {
        distancBetweenDeviceAndStation = Math.sqrt(Math.pow((stations[j].x - devices[i].x) , 2)
        + Math.pow((stations[j].y - devices[i].y) , 2))

        if(distancBetweenDeviceAndStation > stations[j].reach){
            speed = ZERO_SPEED;
        }
        else {
            speed = Math.pow(stations[j].reach - distancBetweenDeviceAndStation, 2);
        }

        if(printBestStation.speed < speed){

            printBestStation.stationX = stations[j].x;
            printBestStation.stationY = stations[j].y;
            printBestStation.deviceX = devices[i].x;
            printBestStation.deviceY = devices[i].y;
            printBestStation.speed = speed;
        }
    }

    if(printBestStation.speed == ZERO_SPEED){
        printError(devices[i].x, devices[i].y);
    }
    else{
        printBestStation(printBestStation.stationX, printBestStation.stationY, printBestStation.deviceX, printBestStation.deviceY, printBestStation.speed)
    }
}
}

function printBestStation (stationX, stationY, deviceX, deviceY, speed) {
console.log('Best Network station for point ' + deviceX +","+ deviceY + " is "
                                            + stationX + "," + stationY + " with speed " + speed +"\n");
}

function printError  (deviceX, deviceY)  {
console.log('No Network station within reach for point ' + deviceX +","+ deviceY +"\n");
}