// College Matchmaker Class
class CollegeMatchmaker {
    constructor() {
        this.questions = [
            {
                id: 1,
                question: "What's your preferred location in Kerala?",
                options: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Palakkad"],
                weights: {
                    location: 1.0
                }
            },
            {
                id: 2,
                question: "Which branch interests you the most?",
                options: ["Computer Science", "Mechanical", "Electrical", "Civil", "Electronics", "Chemical"],
                weights: {
                    course: 1.2
                }
            },
            {
                id: 3,
                question: "What's your budget range for college fees?",
                options: ["Below 50,000", "50,000 - 1,00,000", "1,00,000 - 2,00,000", "Above 2,00,000"],
                weights: {
                    fees: 0.8
                }
            },
            {
                id: 4,
                question: "How important is placement record to you?",
                options: ["Very Important", "Important", "Somewhat Important", "Not Important"],
                weights: {
                    placement: 1.0
                }
            },
            {
                id: 5,
                question: "Do you prefer a college with strong research focus?",
                options: ["Yes", "No", "Maybe"],
                weights: {
                    research: 0.6
                }
            }
        ];

        this.userAnswers = {};
        this.currentQuestion = 0;
        this.matchmakingAlgorithm = new MatchmakingAlgorithm(colleges);
    }

    // Initialize the matchmaker
    init() {
        this.displayQuestion();
        this.updateProgress();
    }

    // Display current question
    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        const quizContainer = document.getElementById('quiz-questions');
        
        if (!quizContainer) return;

        quizContainer.innerHTML = `
            <div class="question-card animate-fade-in">
                <h3 class="mb-4">${question.question}</h3>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <button class="btn btn-outline-primary mb-3 w-100" 
                                onclick="collegeMatchmaker.selectOption(${index})">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Handle option selection
    selectOption(index) {
        const question = this.questions[this.currentQuestion];
        this.userAnswers[question.id] = {
            answer: question.options[index],
            weights: question.weights
        };

        this.currentQuestion++;

        if (this.currentQuestion < this.questions.length) {
            this.displayQuestion();
            this.updateProgress();
        } else {
            this.showResults();
        }
    }

    // Update progress bar
    updateProgress() {
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            const progress = ((this.currentQuestion) / this.questions.length) * 100;
            progressBar.style.width = `${progress}%`;
            progressBar.setAttribute('aria-valuenow', progress);
        }
    }

    // Show matchmaking results
    showResults() {
        const quizContainer = document.getElementById('quiz-questions');
        if (!quizContainer) return;

        const matchedColleges = this.matchmakingAlgorithm.findMatches(this.userAnswers);
        
        quizContainer.innerHTML = `
            <div class="results-container animate-fade-in">
                <h3 class="mb-4">Your Perfect College Matches</h3>
                <div class="row">
                    ${matchedColleges.map(match => `
                        <div class="col-md-6 mb-4">
                            <div class="college-match-card">
                                <h4>${match.college.name}</h4>
                                <div class="match-score">
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" 
                                             style="width: ${match.score}%"
                                             aria-valuenow="${match.score}"
                                             aria-valuemin="0"
                                             aria-valuemax="100">
                                            ${Math.round(match.score)}% Match
                                        </div>
                                    </div>
                                </div>
                                <div class="match-details">
                                    ${match.matchDetails.map(detail => `
                                        <p><i class="fas fa-check-circle text-success"></i> ${detail.description}</p>
                                    `).join('')}
                                </div>
                                <button class="btn btn-primary" onclick="viewCollegeDetails(${match.college.id})">
                                    View Details
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

// Matchmaking Algorithm Class
class MatchmakingAlgorithm {
    constructor(colleges) {
        this.colleges = colleges;
    }

    findMatches(userAnswers) {
        return this.colleges.map(college => {
            const score = this.calculateScore(college, userAnswers);
            return {
                college,
                score,
                matchDetails: this.generateMatchDetails(college, userAnswers)
            };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
    }

    calculateScore(college, userAnswers) {
        let score = 0;
        const weights = {
            location: 0.2,
            course: 0.3,
            fees: 0.2,
            placement: 0.15,
            research: 0.15
        };

        // Location match
        if (college.location.toLowerCase().includes(userAnswers.location.toLowerCase())) {
            score += weights.location;
        }

        // Course match
        if (college.courses.some(course => 
            course.toLowerCase().includes(userAnswers.branch.toLowerCase()))) {
            score += weights.course;
        }

        // Fees match
        if (isInFeesRange(college.fees, userAnswers.budget)) {
            score += weights.fees;
        }

        // Placement match
        if (userAnswers.placement === 'High' && college.placement >= 80) {
            score += weights.placement;
        } else if (userAnswers.placement === 'Medium' && college.placement >= 60) {
            score += weights.placement * 0.7;
        }

        // Research focus match
        if (userAnswers.research === 'Yes' && college.researchFocus) {
            score += weights.research;
        }

        // Additional factors
        if (college.accreditation === 'NAAC A++') {
            score += 0.1;
        }
        if (college.facilities && college.facilities.length >= 5) {
            score += 0.1;
        }
        if (college.highlights && college.highlights.length >= 3) {
            score += 0.1;
        }

        return Math.min(score * 100, 100);
    }

    generateMatchDetails(college, userAnswers) {
        const details = [];

        // Location match
        if (college.location.toLowerCase().includes(userAnswers.location.toLowerCase())) {
            details.push({
                factor: 'Location',
                match: true,
                description: `Located in ${college.location}`
            });
        }

        // Course match
        const matchingCourse = college.courses.find(course => 
            course.toLowerCase().includes(userAnswers.branch.toLowerCase()));
        if (matchingCourse) {
            details.push({
                factor: 'Course',
                match: true,
                description: `Offers ${matchingCourse}`
            });
        }

        // Fees match
        if (isInFeesRange(college.fees, userAnswers.budget)) {
            details.push({
                factor: 'Fees',
                match: true,
                description: `Annual fees: ₹${college.fees.toLocaleString()}`
            });
        }

        // Placement match
        if (college.placement >= 80) {
            details.push({
                factor: 'Placement',
                match: true,
                description: `Excellent placement record: ${college.placement}%`
            });
        } else if (college.placement >= 60) {
            details.push({
                factor: 'Placement',
                match: true,
                description: `Good placement record: ${college.placement}%`
            });
        }

        // Research focus
        if (college.researchFocus) {
            details.push({
                factor: 'Research',
                match: true,
                description: 'Strong research focus'
            });
        }

        // Additional highlights
        if (college.accreditation === 'NAAC A++') {
            details.push({
                factor: 'Accreditation',
                match: true,
                description: 'NAAC A++ Accredited'
            });
        }

        if (college.facilities && college.facilities.length >= 5) {
            details.push({
                factor: 'Facilities',
                match: true,
                description: 'Excellent infrastructure and facilities'
            });
        }

        return details;
    }
}

// Initialize the matchmaker when the page loads
let collegeMatchmaker;
document.addEventListener('DOMContentLoaded', function() {
    collegeMatchmaker = new CollegeMatchmaker();
    collegeMatchmaker.init();
}); 