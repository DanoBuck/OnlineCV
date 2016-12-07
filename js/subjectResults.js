var education = angular.module("education", []);

    education.controller("educationController", 
		function educationController($scope) {
			// Make the table searchable
			$scope.searchFourthYear = "";
			$scope.searchThirdYear = "";
			$scope.searchSecondYear = "";
			$scope.searchFirstYear = "";
			
			// Array of my subjects and results added
			$scope.education = {
				fourthYear: [
					{
						id: 1,
						subject: "Enterprise Application Development 1",
						grade: "TBC"
					},
					{
						id: 2,
						subject: "Enterprise Application Architecture",
						grade: "TBC"
					},
					{
						id: 3,
						subject: "Interactive Media Design 1",
						grade: "TBC"
					},
					{
						id: 4,
						subject: "Social Media Analysis",
						grade: "TBC"
					},
					{
						id: 5,
						subject: "Information Management",
						grade: "TBC"
					},
					{
						id: 6,
						subject: "Project",
						grade: "TBC"
					}
				],
				thirdYear: [
					{
						id: 1,
						subject: "Algorithms and Data Structures 1",
						grade: "B+"
					},
					{
						id: 2,
						subject: "Advanced Database",
						grade: "B+"
					},
					{
						id: 3,
						subject: "Industry Project",
						grade: "B+"
					},	
					{
						id: 4,
						subject: "Web Design & Development 2",
						grade: "B+"
					},	
					{
						id: 5,
						subject: "Operating Systems",
						grade: "B"
					},	
					{
						id: 6,
						subject: "Innovation & Entrepreneurship",
						grade: "B"
					},	
					{
						id: 7,
						subject: "Cloud Services & Distributed Computing",
						grade: "B-"
					},	
					{
						id: 8,
						subject: "Work Placement",
						grade: "PASS"
					}						
				],
				secondYear: [
					{
						id: 1,
						subject: "Management Science",
						grade: "A"
					},
					{
						id: 2,
						subject: "Discrete Mathematics",
						grade: "A"
					},	
					{
						id: 3,
						subject: "Networking 2",
						grade: "A"
					},	
					{
						id: 4,
						subject: "Networking 1",
						grade: "B+"
					},	
					{
						id: 5,
						subject: "Software Quality Assurance & Testing",
						grade: "B+"
					},
					{
						id: 6,
						subject: "Software Development 4",
						grade: "B+"
					},
					{
						id: 7,
						subject: "Software Development 3",
						grade: "B"
					},	
					{
						id: 8,
						subject: "Project",
						grade: "B"
					},	
					{
						id: 9,
						subject: "Database Design & Programming",
						grade: "B"
					},	
					{
						id: 10,
						subject: "Web Design & Development 1",
						grade: "B"
					},
					{
						id: 11,
						subject: "Object Oriented Analysis & Design",
						grade: "C"
					}
				],
				firstYear: [
					{
						id: 1,
						subject: "Social Media Communication's",
						grade: "A"
					},
					{
						id: 2,
						subject: "Software Development 2",
						grade: "A"
					},
					{
						id: 3,
						subject: "Software Development 1",
						grade: "B+"
					},
					{
						id: 4,
						subject: "Discrete Mathematics 1",
						grade: "B"
					},
					{
						id: 5,
						subject: "Statistics",
						grade: "B"
					},
					{
						id: 6,
						subject: "Computer Architecture",
						grade: "B"
					},
					{
						id: 7,
						subject: "Object Oriented System Analysis",
						grade: "B"
					},
					{
						id: 8,
						subject: "Learning to Learn at 3rd Level",
						grade: "B-"
					},
					{
						id: 9,
						subject: "Operating Systems Fundamentals",
						grade: "C"
					},
					{
						id: 10,
						subject: "Business & Information Systems",
						grade: "C"
					},
					{
						id: 11,
						subject: "Fundamentals of Interface and Web Design",
						grade: "C"
					}
				]
			};
    });