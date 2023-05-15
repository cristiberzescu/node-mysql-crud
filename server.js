const express = require("express");
const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "doctari31",
  database: "mysqlDB",
});

con.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    // var participantsTable =
    //   "CREATE TABLE IF NOT EXISTS Participants(id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL)";

    // con.query(participantsTable, (err, res) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("participants connected");
    //   }
    // });

    // var meetingsTable =
    //   "CREATE TABLE IF NOT EXISTS Meetings(id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30) NOT NULL, id_Host INT UNSIGNED NOT NULL)";

    // con.query(meetingsTable, (err, res) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("meetings connected");
    //   }
    // });

    var idParticipantsAndMeetings =
      "CREATE TABLE IF NOT EXISTS idParticipantsAndMeetings(idMeet INT, idParticipant INT, PRIMARY KEY(idMeet, idParticipant))";

    con.query(idParticipantsAndMeetings, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("ids connected");
      }
    });

    con.query(
      "INSERT INTO idParticipantsAndMeetings (idMeet, idParticipant) select Meetings.id, Participants.id from Meetings, Participants where Meetings.id_Host = participants.id",
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log("meet ids added");
        }
      }
    );

    // con.query(
    //   "INSERT INTO idParticipantsAndMeetings (1,1)",
    //   (err, res) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log("meet ids added");
    //     }
    //   }
    // );

    // con.query(
    //   "INSERT INTO Participants (name) VALUES ('Alin'),('Mihai'),('Marius')",
    //   (err, res) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log("participants added");
    //     }
    //   }
    // );

    // con.query(
    //   "INSERT INTO Meetings (name, id_host) VALUES ('meeting1', 2),('meet2', 1),('meet3', 1)",
    //   (err, res) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log("meetings added");
    //     }
    //   }
    // );

    // con.query(
    //   "CREATE VIEW meetingHost AS SELECT Meetings.id_Host, Participants.name FROM Meetings INNER JOIN participants WHERE Meetings.id_Host = Participants.id",
    //   (err, res) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log("view meeting host id");
    //     }
    //   }
    // );
  }
});
