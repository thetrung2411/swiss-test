 const rawData = {
  slas: [
    {
      status: "received",
      hours: 48
    },
    {
      status: "awaiting_action",
      hours: 72
    },
    {
      status: "rejected",
      hours: 36
    }
  ],
  claims: [
    {
      id: 1,
      claimant: "Skylar Dean",
      assignedTo: "John Smith",
      status: "received",
      color: "green",
      createdAt: "2020-08-09T00:00:00.000Z",
      updatedAt: "2020-08-09T00:00:00.000Z"
    },
    {
      id: 2,
      claimant: "Amber Green",
      assignedTo: "John Smith",
      status: "awaiting_action",
      color: "yellow",
      createdAt: "2020-08-12T00:00:00.000Z",
      updatedAt: "2020-08-13T00:00:00.000Z"
    },
    {
      id: 3,
      claimant: "Ross James",
      assignedTo: "John Smith",
      status: "received",
      color: "green",
      createdAt: "2020-08-05T00:00:00.000Z",
      updatedAt: "2020-08-05T00:00:00.000Z"
    },
    {
      id: 4,
      claimant: "Kim Jones",
      assignedTo: "John Smith",
      status: "awaiting_action",
      color: "yellow",
      createdAt: "2020-08-15T00:00:00.000Z",
      updatedAt: "2020-08-15T00:00:00.000Z"
    },
    {
      id: 5,
      claimant: "Henry Wong",
      assignedTo: "Michael Pool",
      status: "received",
      color: "green",
      createdAt: "2020-08-18T00:00:00.000Z",
      updatedAt: "2020-08-18T00:00:00.000Z"
    },
    {
      id: 6,
      claimant: "James Lee",
      assignedTo: "Michael Pool",
      status: "awaiting_action",
      color: "yellow",
      createdAt: "2020-08-10T00:00:00.000Z",
      updatedAt: "2020-08-13T00:00:00.000Z"
    },
    {
      id: 7,
      claimant: "Skylar Dean",
      assignedTo: "John Smith",
      status: "received",
      color: "green",
      createdAt: "2020-08-01T00:00:00.000Z",
      updatedAt: "2020-08-03T00:00:00.000Z"
    },
    {
      id: 8,
      claimant: "Amber Green",
      assignedTo: "Michael Pool",
      status: "rejected",
      color: "red",
      createdAt: "2020-08-02T00:00:00.000Z",
      updatedAt: "2020-08-02T00:00:00.000Z"
    }
  ]
};

function exceeding(date1, date2) {
  const start = new Date(date1).getTime();
  const end = new Date(date2).getTime();
  const milliseconds = Math.abs(end - start).toString();
  const seconds = parseInt(milliseconds / 1000);
  const minutes = parseInt(seconds / 60);
  const hours = parseInt(minutes / 60);
  const time = hours
  return time
}
var newData = rawData

function convertDMY(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

function convertHM(str) {
  var date = new Date(str),
    hour = ("0" + date.getHours()).slice(-2),
    min = ("0" + date.getMinutes()).slice(-2);
  return [hour, min].join(":");
}
for(let i of newData.claims){
  var check =  exceeding(i.createdAt, i.updatedAt)
  console.log(check)
  i.timeCreate = convertDMY(i.createdAt) + " " + convertHM(i.createdAt)
  i.timeUpdate = convertDMY(i.updatedAt) + " " + convertHM(i.updatedAt)
  if (i.status === 'received' && check >= 48)
    i.exceeded = true
  else if (i.status === 'awaiting_action' && check >= 72)
    i.exceeded = true
  else if (i.status === 'rejected' && check >= 36)
    i.exceeded = true
  else
    i.exceeded = false
}
export const data = newData

