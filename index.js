// 1.You are building a feature rollout system for a startup where a FeatureToggle constructor function has
//  properties: featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", 
// "admins"), and you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) 
// to enable or disable the feature, and simulate access attempts using if-else and switch statements for different roles.


function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
}

FeatureToggle.prototype.canAccess = function (userRole) {
    return this.isEnabled && this.userGroupAccess.includes(userRole);
};

FeatureToggle.prototype.toggleFeature = function (flag) {
        this.isEnabled = flag;
    
};

let chatFeature = new FeatureToggle("toggle", false, ["admins", "betaTesters"]);

chatFeature.toggleFeature(true);

let userRole = "admin";

if (chatFeature.canAccess(userRole)) {
  console.log("Access granted to feature.");
} else {
  switch (userRole) {
    case "admin":
    case "betaTesters":
      console.log("Feature not enabled yet.");
      break;
    default:
      console.log("Access denied.");
  }
}




//  2. In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName (string), projectDetails (object with name and 
//     hourlyRate), and logs (array of objects with date, hoursWorked), then add prototype methods to calculate total earnings, filter logs by date range, and determine if
//      weekly hours exceed 40 using if-else logic.

function TimeLog(freelancerName, projectDetails, logs) {
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;
  }
  
  TimeLog.prototype.totalEarnings = function() {
    return this.logs.reduce((sum, log) => sum + log.hoursWorked * this.projectDetails.hourlyRate, 0);
  };
  
  TimeLog.prototype.filterByDate = function(startDate, endDate) {
    return this.logs.filter(log => log.date >= startDate && log.date <= endDate);
  };
  
  TimeLog.prototype.checkWeeklyHours = function() {
    let totalHours = this.logs.reduce((sum, log) => sum + log.hoursWorked, 0);
    if (totalHours > 40) {
      console.log("Overtime worked this week!");
    } else {
      console.log("Within normal hours.");
    }
  };
  
  
  let log = new TimeLog("Hewan", { name: "Web App", hourlyRate: 22 }, [
    { date: "2025-05-12", hoursWorked: 8 },
    { date: "2025-05-03", hoursWorked: 18 },
    { date: "2025-05-05", hoursWorked: 15 },
  ]);
  
  console.log("Earnings:", log.totalEarnings());
  log.checkWeeklyHours();
  
  
  


// 3. You are developing a startup’s order management system where an Order constructor function should contain customer (object with name and email), items (array of objects 
//     with productName, quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, update order status based on payment, and categorize
//      order urgency using switch and conditional statements.


 function Order(customer, items, status) {
  this.customer = customer;
  this.items = items;
  this.status = status;
}

Order.prototype.totalCost = function() {
  return this.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
};

Order.prototype.updateStatus = function(paymentReceived) {
  if (paymentReceived) {
    this.status = "Paid";
  } else {
    this.status = "Pending";
  }
};

Order.prototype.orderUrgency = function() {
  switch (this.status) {
    case "Pending":
      console.log("Order needs urgent attention.");
      break;
    case "Paid":
      console.log("Order is being processed.");
      break;
    default:
      console.log("Order status unknown.");
  }
};


let order = new Order({ name: "Nebyat", email: "nebyat@example.com" }, [
  { productName: "Shoes", quantity: 2, unitPrice: 10 },
  { productName: "T-shirt", quantity: 1, unitPrice: 25 }
], "Pending");

console.log("Total:", order.totalCost());
order.updateStatus(true);
order.orderUrgency();




// 

// 4.In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), performanceMetrics (object with keys like communication, efficiency, and
//      reliability), and feedback (array of strings), then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.

function Employee(id, name, performanceMetrics, feedback) {
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedback = feedback;
  }
  
  Employee.prototype.calculateAverageScore = function() {
    const metrics = Object.values(this.performanceMetrics);
    const sum = metrics.reduce((total, score) => total + score, 0);
    return sum / metrics.length;
  };
  
  Employee.prototype.classifyPerformanceLevel = function() {
    const averageScore = this.calculateAverageScore();
    let level;
  
    if (averageScore >= 9) {
      level = "Excellent";
    } else if (averageScore >= 7) {
      level = "Good";
    } else if (averageScore >= 5) {
      level = "Needs Improvement";
    } else {
      level = "Unsatisfactory";
    }
  
    return level;
  };
  
  Employee.prototype.addFeedback = function(newFeedback) {
    if (this.classifyPerformanceLevel() === "Unsatisfactory") {
      this.feedback.push(newFeedback);
    } else {
      console.log("Employee performs well, no additional feedback needed.");
    }
  };
  
  
  const employee = new Employee(
    123,
    "Nebyat Takele",
    { communication: 8, efficiency: 9, reliability: 7 },
    ["Good communication skills", "Meets deadlines consistently"]
  );
  
  console.log(`Average score: ${employee.calculateAverageScore()}`);
  console.log(`Performance level: ${employee.classifyPerformanceLevel()}`);
  
  employee.addFeedback("Improve attention to detail.");
  console.log(`Feedback: ${employee.feedback}`);
  

// 5.Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise), and students (array of objects with name and completionStatus),
//  then add prototype methods to return names of students who completed the course, count enrolled students by expertise area, and use control flow to output different messages for instructors with more
//   or less than 5 students.

function Course(title, instructor, students) {
    this.title = title;
    this.instructor = instructor;
    this.students = students;
  }
  
  Course.prototype.getCompletedStudentNames = function() {
    return this.students.filter(student => student.completionStatus === "completed").map(student => student.name);
  };
  
  Course.prototype.countEnrolledStudentsByExpertise = function() {
    const expertiseCounts = {};
    this.students.forEach(student => {
      const expertise = student.expertise;
      expertiseCounts[expertise] = (expertiseCounts[expertise] || 0) + 1;
    });
    return expertiseCounts;
  };
  
  Course.prototype.instructorMessage = function() {
    const numStudents = this.students.length;
  
    if (numStudents > 5) {
      return `${this.instructor.name} is managing a large class of ${numStudents} students.`;
    } else {
      return `${this.instructor.name} is working with a smaller group of ${numStudents} students.`;
    }
  };
  
  
  const course = new Course(
    "JavaScript Fundamentals",
    { name: "Selam Berhe", expertise: "Web Development" },
    [
      { name: "Adeday Haftu", expertise: "Web Development", completionStatus: "completed" },
      { name: "Elizabeth Barongo", expertise: "Web Development", completionStatus: "incomplete" },
      { name: "Senay", expertise: "Maths", completionStatus: "completed" },
      { name: "Lidya", expertise: "Psychology", completionStatus: "completed" },
    ]
  );
  
  console.log(`Completed students: ${course.getCompletedStudentNames()}`);
  console.log(`Enrolled students by expertise: ${course.countEnrolledStudentsByExpertise()}`);
  console.log(course.instructorMessage());
  