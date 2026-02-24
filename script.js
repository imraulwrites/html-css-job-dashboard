const jobsArr = [
  {
    id: 0,
    companyName: 'Google',
    position: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120,000',
    description: 'Work with React and modern frontend tools.',
  },
  {
    id: 1,
    companyName: 'Microsoft',
    position: 'Backend Engineer',
    location: 'USA',
    type: 'Full-time',
    salary: '$130,000',
    description: 'Build scalable APIs using Node.js.',
  },
  {
    id: 3,
    companyName: 'Amazon',
    position: 'Full Stack Developer',
    location: 'Canada',
    type: 'Hybrid',
    salary: '$115,000',
    description: 'Develop and maintain web applications.',
  },
  {
    id: 4,
    companyName: 'Meta',
    position: 'Software Engineer',
    location: 'UK',
    type: 'Full-time',
    salary: '$125,000',
    description: 'Work on large-scale distributed systems.',
  },
  {
    id: 5,
    companyName: 'Netflix',
    position: 'UI Engineer',
    location: 'Remote',
    type: 'Contract',
    salary: '$110,000',
    description: 'Improve streaming platform UI experience.',
  },
  {
    id: 6,
    companyName: 'Tesla',
    position: 'Embedded Software Engineer',
    location: 'Germany',
    type: 'Full-time',
    salary: '$135,000',
    description: 'Develop automotive software systems.',
  },
  {
    id: 7,
    companyName: 'Airbnb',
    position: 'React Developer',
    location: 'Remote',
    type: 'Part-time',
    salary: '$90,000',
    description: 'Build reusable UI components.',
  },
  {
    id: 8,
    companyName: 'Spotify',
    position: 'Backend Developer',
    location: 'Sweden',
    type: 'Full-time',
    salary: '$118,000',
    description: 'Work on music streaming backend services.',
  },
  // Additional 4 simple cards
  {
    companyName: 'Stripe',
    position: 'API Developer',

    location: 'Germany',
    type: 'Full-time',
    salary: '$106,000',
    description: 'Work on new payment method in backend services.',
  },
];

// console.log('first');

const interviewArr = [
  {
    id: 0,
    companyName: 'Google',
    position: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120,000',
    description: 'Work with React and modern frontend tools.',
  },
  {
    id: 0,
    companyName: 'Google',
    position: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120,000',
    description: 'Work with React and modern frontend tools.',
  },
];

const rejectedArr = [
  {
    id: 0,
    companyName: 'Google',
    position: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120,000',
    description: 'Work with React and modern frontend tools.',
  },
];

const jobs = document.querySelector('#totalJobs h3');
const interview = document.querySelector('#totalInterview h3');
const rejected = document.querySelector('#totalRejected h3');
const availableJobs = document.querySelector('#available-jobs p');

function updateCounts() {
  jobs.innerHTML = jobsArr.length;
  interview.innerHTML = interviewArr.length;
  rejected.innerHTML = rejectedArr.length;
  availableJobs.innerHTML = jobsArr.length;
}

const allJobList = document.getElementById('all-job-list');
const interviewList = document.getElementById('interview-list');
const rejectedList = document.getElementById('rejected-list');

const all = document.getElementById('all');
const interviewBtn = document.getElementById('interview');
const reject = document.getElementById('reject');

all.addEventListener('click', () => {
  allJobList.classList.remove('hidden');
  interviewList.classList.add('hidden');
  rejectedList.classList.add('hidden');
});

interviewBtn.addEventListener('click', () => {
  allJobList.classList.add('hidden');
  interviewList.classList.remove('hidden');
  rejectedList.classList.add('hidden');
});

reject.addEventListener('click', () => {
  allJobList.classList.add('hidden');
  interviewList.classList.add('hidden');
  rejectedList.classList.remove('hidden');
});

function showJobs(arr, container) {
  container.innerHTML = '';
  if (arr.length > 0) {
    arr.forEach(item => {
      const singleJob = document.createElement('div');
      singleJob.className = 'job-desc bg-white grid grid-col-1 my-4 p-4 rounded-md';
      singleJob.innerHTML = `<h3 class="text-2xl text-[#002C5C] font-semibold">${item.companyName}</h3>
              <h4 class="text-[#64748B] text-xl font-semibold mt-3 mb-5">${item.position}</h4>
              <ul class="flex gap-2">
                <li>${item.location}</li>
                <li>${item.type}</li>
                <li>${item.salary}</li>
              </ul>

              <div class="my-2"> <button class="px-3 py-1.5  bg-[#EEF4FF] rounded-md uppercase font-medium"
              >Not Applied</div>
              <p class="my-2">${item.description}
              </p>

              <div>
                <div>
                  <button class="interview-btn px-3 py-1.5 border border-green-500 text-green-500 rounded-md uppercase font-medium">Interview</button>
                  <button class="reject-btn px-3 py-1.5 border border-red-500 text-red-500 rounded-md uppercase font-medium">Rejected</button>
                </div>
              </div>`;

      const interviewBtn = singleJob.querySelector('.interview-btn');
      const rejectBtn = singleJob.querySelector('.reject-btn');

      interviewBtn.addEventListener('click', () => {
        moveToInterview(item.id);
      });

      rejectBtn.addEventListener('click', () => {
        moveToRejected(item.id);
      });

      container.appendChild(singleJob);
      console.log(container);
    });
  }
}

function moveToInterview(id) {
  const newInterview = jobsArr.slice(id, id + 1);

  if (interviewArr.some(item => item.id != id)) {
    interviewArr.push(newInterview);
  }

  refreshUI();
}

function moveToRejected(id) {
  const newRejected = jobsArr.slice(id, id + 1);
  rejectedArr.push(newRejected);
  refreshUI();
}

function refreshUI() {
  showJobs(jobsArr, allJobList, 'all');
  showJobs(interviewArr, interviewList, 'interview');
  showJobs(rejectedArr, rejectedList, 'reject');
  updateCounts();
}

refreshUI();
