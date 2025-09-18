//icon.parents
const ah = document.getElementById('ah');
const aw = document.getElementById('aw');
const al = document.getElementById('al');
const ar = document.getElementById('ar');
const logo = document.getElementById('logo');
const user = document.getElementById('user');

//icons.dataColect
const homeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" 
    fill="currentColor" 
    style="width: 28px; height: 24px; flex-shrink: 0;">
    <path fill-rule="evenodd" 
        d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" 
        clip-rule="evenodd" />
    </svg>`;
const dumbbellIcon = `<svg
  width="28"
  height="28"
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style="transform: rotate(-20deg);"  <!-- tilt -->
>
  <!-- bigger left plate -->
  <rect x="6" y="20" width="8" height="24" rx="2" fill="currentColor"/>
  <rect x="14" y="24" width="4" height="16" rx="1" fill="currentColor"/>

  <!-- bar -->
  <rect x="18" y="30" width="28" height="4" rx="2" fill="currentColor"/>

  <!-- bigger right plate -->
  <rect x="46" y="20" width="8" height="24" rx="2" fill="currentColor"/>
  <rect x="42" y="24" width="4" height="16" rx="1" fill="currentColor"/>
</svg>
`;

const calendarIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width: 24px; height: 24px; flex-shrink: 0;">
  <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25A.75.75 0 0 1 8 7.5h2.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM5.75 9.5a.75.75 0 0 0 0 1.5H8a.75.75 0 0 0 0-1.5H5.75Z" />
  <path fill-rule="evenodd" d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z" clip-rule="evenodd" />
</svg>
`;

const trophyIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 24px; height: 24px; flex-shrink: 0;">
  <path fill-rule="evenodd" d="M10 1c-1.828 0-3.623.149-5.371.435a.75.75 0 0 0-.629.74v.387c-.827.157-1.642.345-2.445.564a.75.75 0 0 0-.552.698 5 5 0 0 0 4.503 5.152 6 6 0 0 0 2.946 1.822A6.451 6.451 0 0 1 7.768 13H7.5A1.5 1.5 0 0 0 6 14.5V17h-.75C4.56 17 4 17.56 4 18.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75c0-.69-.56-1.25-1.25-1.25H14v-2.5a1.5 1.5 0 0 0-1.5-1.5h-.268a6.453 6.453 0 0 1-.684-2.202 6 6 0 0 0 2.946-1.822 5 5 0 0 0 4.503-5.152.75.75 0 0 0-.552-.698A31.804 31.804 0 0 0 16 2.562v-.387a.75.75 0 0 0-.629-.74A33.227 33.227 0 0 0 10 1ZM2.525 4.422C3.012 4.3 3.504 4.19 4 4.09V5c0 .74.134 1.448.38 2.103a3.503 3.503 0 0 1-1.855-2.68Zm14.95 0a3.503 3.503 0 0 1-1.854 2.68C15.866 6.449 16 5.74 16 5v-.91c.496.099.988.21 1.475.332Z" clip-rule="evenodd" />
</svg>
`;

const userIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 75px; height: 75px; flex-shrink: 0;">
  <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clip-rule="evenodd" />
</svg>
`;

//icon.parents.addIcon
ah.innerHTML = homeIcon + 'Home';
aw.innerHTML = dumbbellIcon + 'Recomended Workouts';
al.innerHTML = calendarIcon + 'Log';
ar.innerHTML = trophyIcon + 'Rank';
logo.innerHTML = dumbbellIcon+'LV';
user.innerHTML = userIcon;
user.style.color = 'orange';

//logoIcon.find
const logoIcon = logo.querySelector('svg');

//logoIcon.styles
logoIcon.style.width = '95px';
logoIcon.style.height = '95px';
logoIcon.style.transform = 'rotate(0deg)';
logoIcon.style.transform = 'translate(1.8%, 10%)';

//woukoutButton.getId
const bibtn = document.getElementById('bicep');
const trbtn = document.getElementById('tricep');
const chbtn = document.getElementById('chest');
const babtn = document.getElementById('back');
const shbtn = document.getElementById('shoulders');
const abbtn = document.getElementById('abs-core');
const fobtn = document.getElementById('forearm');
const lebtn = document.getElementById('legs');
const nebtn = document.getElementById('neck');

//workoutButton.children
bibtn.innerHTML = dumbbellIcon + 'Supinating Bicep Curl - Biceps';
trbtn.innerHTML = dumbbellIcon + 'Bench Dips - Triceps';
chbtn.innerHTML = dumbbellIcon + 'Push-Ups - Chest';
babtn.innerHTML = dumbbellIcon + 'Inverted Rows - Back';
shbtn.innerHTML = dumbbellIcon + 'Pike Push-Ups - Shoulders';
abbtn.innerHTML = dumbbellIcon + 'Plank(On The Forearm) - Abs & Core';
fobtn.innerHTML = dumbbellIcon + 'Farmers Hold - Forearm';
lebtn.innerHTML = dumbbellIcon + 'Running - Legs';
nebtn.innerHTML = dumbbellIcon + 'Neck Stretch - Neck';

const contLog = document.getElementById('contLog');
const xpDisplay = document.getElementById('xp');
const rankDisplay = document.getElementById('rankD');

function getStoredXP() {
  return Number(localStorage.getItem('workoutXP') || 0);
}
function setStoredXP(x) {
  localStorage.setItem('workoutXP', String(x));
}
function updateXPAndRankDisplay() {
  const xp = getStoredXP();
  const level = Math.floor(Math.sqrt(xp) / 5);
  xpDisplay.textContent = `XP: ${xp}`;
  rankDisplay.textContent = `Level: ${level}`;
}

window.addEventListener('load', () => {
  const logs = JSON.parse(localStorage.getItem('workoutLog') || '[]');
  contLog.innerHTML = '';
  logs.forEach(item => {
    const p = document.createElement('p');
    const safeDate = item.date ? item.date.slice(0, 10) : (new Date()).toISOString().slice(0,10);
    p.textContent = `${safeDate} – ${item.set} x ${item.rep}`;
    p.style.color = 'white';
    contLog.appendChild(p);
  });
  updateXPAndRankDisplay();
  contLog.style.opacity = '1';
});

function addLog() {
  const setInput = Number(document.getElementById('set').value || 0);
  const repInput = Number(document.getElementById('rep').value || 0);
  const dateInput = document.getElementById('date').value || new Date().toISOString();
  if (setInput <= 0 || repInput <= 0) {
    alert('Please enter valid sets and reps (numbers > 0)');
    return;
  }
  const newLog = { set: setInput, rep: repInput, date: dateInput };
  const logs = JSON.parse(localStorage.getItem('TestLog') || '[]');
  logs.push(newLog);
  localStorage.setItem('workoutLog', JSON.stringify(logs));
  const p = document.createElement('p');
  p.textContent = `${dateInput.slice(0,10)} – ${setInput} x ${repInput}`;
  p.style.color = 'white';
  contLog.appendChild(p);
  let xp = getStoredXP();
  xp += repInput * setInput;
  setStoredXP(xp);
  updateXPAndRankDisplay();
  document.getElementById('set').value = '';
  document.getElementById('rep').value = '';
  document.getElementById('date').value = '';

  contLog.style.opacity = '1';
}
localStorage.clear();
