let jobs = [
    { id: 1, company: "Mobile First Corp", title: "React Native Developer", type: "Remote", salary: "$130,000 - $175,000", location: "Dhaka", status: "NOT APPLIED", description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide." },
    { id: 2, company: "WebFlow Agency", title: "Web Designer & Developer", type: "On-site", salary: "$130,000 - $175,000", location: "Los Angeles, LA", status: "NOT APPLIED", description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends." },
    { id: 3, company: "DataViz", title: "Data Visualization Specialist", type: "Hybrid", salary: "$130,000 - $175,000", location: "Boston, MA", status: "NOT APPLIED", description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking." },
    { id: 4, company: "CloudFirst Inc", title: "Backend Developer", type: "Remote", salary: "$130,000 - $175,000", location: "Seattle, WA", status: "NOT APPLIED", description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure." },
    { id: 5, company: "Innovation Labs", title: "UI/UX Engineer", type: "On-site", salary: "$130,000 - $175,000", location: "Austin, TX", status: "NOT APPLIED", description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required." },
    { id: 6, company: "MegaCorp Solutions", title: "JavaScript Developer", type: "Remote", salary: "$130,000 - $175,000", location: "New York", status: "NOT APPLIED", description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities." },
    { id: 7, company: "StartupXYZ", title: "Full Stack Engineer", type: "Hybrid", salary: "$130,000 - $175,000", location: "remote", status: "NOT APPLIED", description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included." },
    { id: 8, company: "TechCorp Industries", title: "Graphic Designer", type: "Remote", salary: "$45k", location: "San Francisco, CA", status: "NOT APPLIED", description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects." }
];


let currentTab = 'all';


window.onload = function () {
    displayJobs();
    updateDashboard();
};


function displayJobs() {
    const jobContainer = document.getElementById('job-list');
    const noDataMsg = document.getElementById('no-data-msg');
    const jobCountDisplay = document.getElementById('job-count-display');


    jobContainer.innerHTML = '';


    let filteredJobs = [];

    if (currentTab === 'all') {
        filteredJobs = jobs;
    } else if (currentTab === 'interview') {
        
        filteredJobs = jobs.filter(function (job) {
            return job.status === 'interview';
        });
    } else if (currentTab === 'rejected') {
        
        filteredJobs = jobs.filter(function (job) {
            return job.status === 'rejected';
        });
    }
    if (jobCountDisplay) {
        jobCountDisplay.innerText = filteredJobs.length;
    }
    
    if (filteredJobs.length === 0) {
        noDataMsg.classList.remove('hidden'); 
        jobContainer.classList.add('hidden'); 
    } else {
        noDataMsg.classList.add('hidden'); 
        jobContainer.classList.remove('hidden'); 

       
        filteredJobs.forEach(function (job) {
            
            let interviewColor = job.status === 'interview' ? 'bg-green-500 text-white' : 'border border-green-500 text-green-500';
            let rejectedColor = job.status === 'rejected' ? 'bg-red-500 text-white' : 'border border-red-500 text-red-500';

           
            let card = `
                <div class="border p-4 rounded-md bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-start gap-4">
                    <div class="flex-1">
                        <p class="text-[#0B005C] font-bold text-2xl">${job.company}</p>
                        <h3 class="text-gray-500">${job.title}</h3>
                        <p class="text-sm text-gray-500 mt-4 mb-4">${job.location} • ${job.type} • Salary: ${job.salary}</p>
                        <p class="inline-block text-sm text-gray-500 mt-1 border border-gray-300 rounded-md px-2 py-1">${job.status}</p>
                        <p class="text-sm text-gray-500 my-4">${job.description}</p>
                        
                        <!-- Primary Button -->
                        <div class="flex gap-2">
                        <!-- Interview Button -->
                        <button onclick="makeInterview(${job.id})" class="px-3 py-1 rounded-md text-sm  ${interviewColor}">
                            Interview
                        </button>
                        
                        <!-- Rejected Button -->
                        <button onclick="makeRejected(${job.id})" class="px-3 py-1 rounded text-sm ${rejectedColor}">
                            Rejected
                        </button>
                    </div>
                    </div>

                    

                    <!-- Delete Button -->
                    <div>
                        <button onclick="deleteJob(${job.id})" class="bg-gray-100 px-3 py-2 rounded-md text-gray-500 hover:bg-red-100 hover:text-red-600 transition-colors">
                        <i class="fa-solid fa-trash-can mr-1"></i> Delete
                        </button>
                    </div>
                </div>
            `;
            
            jobContainer.innerHTML += card;
        });
    }
}


function makeInterview(id) {
    
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id === id) {
            jobs[i].status = 'interview';
            break;
        }
    }
    updateDashboard();
    displayJobs();
}

function makeRejected(id) {
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id === id) {
            jobs[i].status = 'rejected';
            break;
        }
    }
    updateDashboard();
    displayJobs();
}


function deleteJob(id) {
    let confirmDelete = confirm("Are you sure you want to delete?");
    if (confirmDelete) {
        
        jobs = jobs.filter(function (job) {
            return job.id !== id;
        });
        updateDashboard();
        displayJobs();
    }
}


function showTab(tabName) {
    currentTab = tabName;

    
    document.getElementById('btn-all').className = "px-4 py-2 rounded border bg-gray-100";
    document.getElementById('btn-interview').className = "px-4 py-2 rounded border bg-gray-100";
    document.getElementById('btn-rejected').className = "px-4 py-2 rounded border bg-gray-100";

    
    document.getElementById('btn-' + tabName).className = "px-4 py-2 rounded border active-btn";

    displayJobs();
}


function updateDashboard() {
    let total = jobs.length;


    let interviewCount = 0;
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].status === 'interview') {
            interviewCount++;
        }
    }

   
    let rejectedCount = 0;
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].status === 'rejected') {
            rejectedCount++;
        }
    }

   
    document.getElementById('total-count').innerText = total;
    document.getElementById('interview-count').innerText = interviewCount;
    document.getElementById('rejected-count').innerText = rejectedCount;
}