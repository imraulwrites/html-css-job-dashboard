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
  {
    id: 9,
    companyName: 'Stripe',
    position: 'API Developer',
    location: 'Germany',
    type: 'Full-time',
    salary: '$106,000',
    description: 'Work on new payment method in backend services.',
  },
];

const interviewArr = [];

const rejectedArr = [];

const jobs = document.querySelector('#totalJobs h3');
const interview = document.querySelector('#totalInterview h3');
const rejected = document.querySelector('#totalRejected h3');
const availableJobs = document.querySelector('#available-jobs p');

const allJobList = document.getElementById('all-job-list');
const interviewList = document.getElementById('interview-list');
const rejectedList = document.getElementById('rejected-list');

const all = document.getElementById('all');
const interviewBtn = document.getElementById('interview');
const reject = document.getElementById('reject');

const listWrapper = document.querySelectorAll('.single-job');
const tabs = document.querySelectorAll('.tabs button');

tabs.forEach(tab =>
  tab.addEventListener('click', () => {
    tabs.forEach(item => {
      item.classList.remove('bg-blue-500', 'text-white');
      item.classList.add('bg-white', 'text-[#64748B]');
    });

    tab.classList.remove('bg-white', 'text-[#64748B]');
    tab.classList.add('bg-blue-500', 'text-white');

    listWrapper.forEach(item => {
      item.classList.add('hidden');
    });

    if (tab.id === 'all') {
      allJobList.classList.remove('hidden');
    }
    if (tab.id === 'interview') {
      interviewList.classList.remove('hidden');
    }
    if (tab.id === 'reject') {
      rejectedList.classList.remove('hidden');
    }

    updateCounts(tab.id);
  })
);

function showJobs(arr, container, type) {
  container.innerHTML = '';
  if (arr.length > 0) {
    arr.forEach(item => {
      const singleJob = document.createElement('div');
      singleJob.className = 'job-desc bg-white grid grid-col-1 my-4 p-4 rounded-md';
      singleJob.innerHTML = `<div class="flex justify-between pr-2"><h3 class="text-2xl text-[#002C5C] font-semibold">${item.companyName}</h3>
                                <span class="delete-btn">
                                    <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                      width="25px" height="25px" viewBox="0 0 482.428 482.429"
                                      xml:space="preserve">
                                    <g>
                                      <g>
                                        <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098
                                          c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117
                                          h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828
                                          C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879
                                          C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096
                                          c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266
                                          c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979
                                          V115.744z"/>
                                        <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07
                                          c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"/>
                                        <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07
                                          c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"/>
                                        <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07
                                          c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"/>
                                      </g>
                                    </g>
                                    </svg>
                                </span>
                              </div>
              <h4 class="text-[#64748B] text-xl font-semibold mt-3 mb-5">${item.position}</h4>
              <ul class="flex gap-2">
                <li>${item.location}</li>
                <li>${item.type}</li>
                <li>${item.salary}</li>
              </ul>

              <div class="my-2"> 
                <button class="status px-3 py-1.5 bg-[#EEF4FF] rounded-md uppercase font-medium"
                >Not Applied</button>
              </div>
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
      const deleteBtn = singleJob.querySelector('.delete-btn');
      const statusBtn = singleJob.querySelector('.status');

      interviewBtn.addEventListener('click', () => {
        moveToInterview(item.id, type);
      });

      rejectBtn.addEventListener('click', () => {
        moveToRejected(item.id, type);
      });

      deleteBtn.addEventListener('click', () => {
        deleteJob(item.id, type);
      });

      const updatedStatus = showStatus(item.id);
      statusBtn.innerHTML = updatedStatus;

      container.appendChild(singleJob);
    });
  } else {
    container.innerHTML = '';

    const noJobsCard = document.createElement('div');
    noJobsCard.classList =
      'flex flex-col items-center justify-center job-desc bg-white grid grid-col-1 my-4 p-4 rounded-md';
    noJobsCard.innerHTML = `
      <div class="flex justify-center items-center"><svg class=" w-40 h-40 text-[#7DA8FF] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 112L304 112L304 200C304 239.8 336.2 272 376 272L464 272L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 128C176 119.2 183.2 112 192 112zM352 131.9L444.1 224L376 224C362.7 224 352 213.3 352 200L352 131.9zM192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 250.5C512 233.5 505.3 217.2 493.3 205.2L370.7 82.7C358.7 70.7 342.5 64 325.5 64L192 64zM248 320C234.7 320 224 330.7 224 344C224 357.3 234.7 368 248 368L392 368C405.3 368 416 357.3 416 344C416 330.7 405.3 320 392 320L248 320zM248 416C234.7 416 224 426.7 224 440C224 453.3 234.7 464 248 464L392 464C405.3 464 416 453.3 416 440C416 426.7 405.3 416 392 416L248 416z"/></svg>
      </div>
      <h2 class="text-center text-2xl text-[#002C5C] font-semibold">No job available</h2>
      <p class="text-center text-xl text-[#64748B]">Check back soon for new job opportunities</p>
  `;

    container.appendChild(noJobsCard);
  }

  updateCounts(type);
}

function moveToInterview(id, type) {
  if (!interviewArr.find(item => item.id === id)) {
    const newInterview = jobsArr.find(item => item.id === id);

    interviewArr.push(newInterview);
  }

  const updatedRejectArr = rejectedArr.filter(item => item.id !== id);

  rejectedArr.length = 0;
  rejectedArr.push(...updatedRejectArr);

  refreshUI(type);
}

function moveToRejected(id, type) {
  if (!rejectedArr.find(item => item.id === id)) {
    const newRejected = jobsArr.find(item => item.id === id);

    rejectedArr.push(newRejected);
  }

  const updatedInterviewArr = interviewArr.filter(item => item.id !== id);

  interviewArr.length = 0;

  interviewArr.push(...updatedInterviewArr);

  refreshUI(type);
}

function deleteJob(id, type) {
  const newJobArr = jobsArr.filter(item => item.id !== id);
  jobsArr.length = 0;
  jobsArr.push(...newJobArr);

  const newInterviewArr = interviewArr.filter(item => item.id !== id);
  interviewArr.length = 0;
  interviewArr.push(...newInterviewArr);

  const newRejectedArr = rejectedArr.filter(item => item.id !== id);
  rejectedArr.length = 0;
  rejectedArr.push(...newRejectedArr);

  refreshUI(type);
}

function showStatus(id) {
  if (rejectedArr.find(item => item.id === id)) {
    return 'Rejected';
  } else if (interviewArr.find(item => item.id === id)) {
    return 'Interview';
  } else {
    return 'Not Applied';
  }
}

function updateCounts(type = 'all') {
  let jobText = jobsArr.length + ' jobs';

  if (type === 'interview') {
    jobText = interviewArr.length + ' of ' + jobText;
  }

  if (type === 'reject') {
    jobText = rejectedArr.length + ' of ' + jobText;
  }

  jobs.innerHTML = jobsArr.length;
  interview.innerHTML = interviewArr.length;
  rejected.innerHTML = rejectedArr.length;
  availableJobs.innerHTML = jobText;
}

function refreshUI(type = 'all') {
  showJobs(jobsArr, allJobList, 'all');
  showJobs(interviewArr, interviewList, 'interview');
  showJobs(rejectedArr, rejectedList, 'reject');
  updateCounts(type);
}

refreshUI();
