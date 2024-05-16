import express from "express";

let interviewData = [
  {
    _id: 1,
    companyName: "Zoho",
    role: "SDE",
    package: 10,
    date: 1715053687,
    location: "Chennai",
    experience: 3,
  },
  {
    _id: 2,
    companyName: "Google",
    role: "System Architech",
    package: 20,
    date: 1715053627,
    location: "Bangalore",
    experience: 6,
  },
  {
    _id: 3,
    companyName: "Facebook",
    role: "FSD",
    package: 10,
    date: 1715053627,
    location: "Pune",
    experience: 8,
  },
  {
    _id: 4,
    companyName: "PayPal",
    role: "FSD",
    package: 10,
    date: 1715053627,
    location: "Hyderabad",
    experience: 4,
  },
];

// Setting PORT
const PORT = 8080;

// Initializiing Express Server

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`<h1 style="text-align:center;">I'm started working!</h1>`);
});

app.get("/query", (req, res) => {
  const data = req.query;
  console.log(data);
  res.send("query end point");
});

app.get("/param/:id/:token", (req, res) => {
  const data = req.params;
  console.log(data);
  res.send("params end point");
});

app.get("/all/interview", (req, res) => {
  const _id = req.query.id;
  if (_id) {
    const reqData = interviewData.filter((item) => item._id == _id);
    return res.send(reqData);
  }
  return res.send(interviewData);
});

app.post("/add/interview", (req, res) => {
  const newInterview = { _id: interviewData.length + 1, ...req.body };
  interviewData = [...interviewData, newInterview];
  res.send(newInterview);
});

app.put("/edit/interview/:id", (req, res) => {
  const _id = req.params.id;
  const editInterview = { _id: _id, ...req.body };
  interviewData[_id - 1] = editInterview;
  res.send(editInterview);
});

app.delete("/delete/interview/:id", (req, res) => {
  const _id = req.params.id;
  let newData = interviewData.filter((data) => data._id != _id);
  interviewData = newData;
  res.send(newData);
});

// Activating and listening server
app.listen(PORT, () => {
  console.log(`Server started in PORT : ${PORT}
    listening in http://localhost:${PORT}`);
});
