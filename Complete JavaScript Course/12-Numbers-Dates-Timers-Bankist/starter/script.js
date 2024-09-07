'use strict';

// BANKIST APP
// https://simplelocalize.io/data/locales/

// DIFFERENT DATA! Contains movementsDates, currency and locale

const accounts = [
  {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2020-12-23T07:42:02.383Z',
      '2022-01-28T09:15:04.904Z',
      '2023-04-01T10:17:24.185Z',
      '2024-07-06T12:11:59.604Z',
      '2024-07-10T11:01:17.194Z',
      '2024-07-11T10:36:17.929Z',
      '2024-07-12T10:51:36.790Z',
    ],
    currency: 'USD',
    locale: 'en-US', // de-DE
  },
  {
    owner: 'Jessica Davis',
    movements: [50000, 34000, -150, -790, -3210, -10000, 8500000, -3000],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
      '2019-10-18T21:31:17.178Z',
      '2020-11-23T07:42:02.383Z',
      '2022-01-28T09:15:04.904Z',
      '2023-04-01T10:17:24.185Z',
      '2024-07-06T12:11:59.604Z',
      '2024-07-07T10:36:17.929Z',
      '2024-07-05T10:51:36.790Z',
      '2024-07-12T11:01:17.194Z',
    ],
    currency: 'BDT',
    locale: 'bn-BD',
  },
  {
    owner: 'Sarah Smith',
    movements: [43000, 1000, -700, 50, -4500, 2700, -1600, 70000],
    interestRate: 1.3,
    pin: 3333,

    movementsDates: [
      '2019-08-18T21:31:17.178Z',
      '2020-07-23T07:42:02.383Z',
      '2022-02-28T09:15:04.904Z',
      '2023-03-01T10:17:24.185Z',
      '2024-07-06T12:11:59.604Z',
      '2024-07-07T10:36:17.929Z',
      '2024-07-05T10:51:36.790Z',
      '2024-07-12T11:01:17.194Z',
    ],
    currency: 'EUR', // pound
    locale: 'pt-PT',
  },
];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let currentAccount;
let sorted = false;
let timerId;
const locale = navigator.language; // Get Browser Default Locale

// Computing Usernames
const createUserNames = (accounts) => {
  // Sample: 'Steven Thomas Williams' => Output: stw

  // NOTE: Add a new property called "userName" into each account object by taking the first letter of each word in the owner's name and converting to lowerCase.
  accounts.forEach(
    (account) =>
      (account.userName = account.owner
        .toLowerCase()
        .split(' ')
        .map((word) => word.at(0))
        .join(''))
  );
};
createUserNames(accounts);

// Display Movements
const displayMovements = (currentAccount, sort = false) => {
  containerMovements.innerHTML = '';

  const movs = sort
    ? currentAccount.movements.slice().sort((a, b) => a - b)
    : currentAccount.movements;

  movs.forEach((movement, index) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">
             ${index + 1} ${type}
          </div>
          <div class="movements__date">
             ${getDateAndTimeInfo(currentAccount.movementsDates[index], false)}
          </div>
          <div class="movements__value">
             ${formatCurrency(
               movement,
               currentAccount.locale,
               currentAccount.currency
             )}
          </div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Calculate and Display Balance
const calcDisplayBalance = (currentAccount) => {
  const initialValue = 0;

  // NOTE: Calculate balance and store it into currentAccount object
  currentAccount.balance = currentAccount?.movements.reduce(
    (accumulator, currentMovement) => {
      return accumulator + currentMovement;
    },
    initialValue
  );

  labelBalance.textContent = formatCurrency(
    currentAccount.balance,
    currentAccount.locale,
    currentAccount.currency
  );
};

// Calculate and Display Summary (Chaining Methods)
const calcDisplaySummary = (currentAccount) => {
  const income = currentAccount?.movements
    .filter((movement) => movement > 0) // take all deposit
    .reduce((accumulator, currentDeposit) => {
      return accumulator + currentDeposit;
    }, 0);

  labelSumIn.textContent = formatCurrency(
    income,
    currentAccount.locale,
    currentAccount.currency
  );

  const out = currentAccount?.movements
    .filter((movement) => movement < 0) // take all withdrawal
    .reduce((accumulator, currentWithdrawal) => {
      return accumulator + currentWithdrawal;
    }, 0);

  labelSumOut.textContent = formatCurrency(
    out,
    currentAccount.locale,
    currentAccount.currency
  );

  const interest = currentAccount?.movements
    .filter((movement) => movement > 0) // take all deposit
    .map((deposit) => deposit * (currentAccount?.interestRate / 100)) // apply interestRate
    .filter((interest, index, array) => {
      // rule: interest will be added if it is greater than or equal to 1.
      // console.log(array);
      return interest >= 1;
    })
    .reduce((accumulator, currentInterest) => {
      return accumulator + currentInterest;
    }, 0);

  labelSumInterest.textContent = formatCurrency(
    interest,
    currentAccount.locale,
    currentAccount.currency
  );
};

// Update UI
const updateUI = (currentAccount) => {
  // Display Movements
  displayMovements(currentAccount);

  // Display Balance
  calcDisplayBalance(currentAccount);

  // Display Summary
  calcDisplaySummary(currentAccount);

  // Display current date and time
  const now = new Date();
  labelDate.textContent = getDateAndTimeInfo(now, true);
};

// Get Date and Time Info
const getDateAndTimeInfo = (dateStr, shouldReturnTime = false) => {
  // Create a Date object from the date string
  const dateObj = new Date(dateStr);

  // Get the current date and time
  const now = new Date();

  // Calculate the difference in milliseconds
  const diffInMs = now - dateObj;

  // Convert the difference from milliseconds to days
  const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

  if (!shouldReturnTime && diffInDays === 0) return 'Today';
  if (!shouldReturnTime && diffInDays === 1) return 'Yesterday';
  if (!shouldReturnTime && diffInDays <= 7) return `${diffInDays} Days Ago`;

  /*     
  // Get the day, month and year
  // Add leading zeros to day and month if necessary
  const day = `${dateObj.getDate()}`.padStart(2, '0');
  const month = `${dateObj.getMonth() + 1}`.padStart(2, '0'); // Months are zero-based
  const year = dateObj.getFullYear();

  // Format the date as 'DD/MM/YYYY'
  const date = `${day}/${month}/${year}`; 
  */

  // Format date using Intl.DateTimeFormat (MM/DD/YYYY)
  const optionsForDate = {
    timeZone: 'Asia/Dhaka',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const date = new Intl.DateTimeFormat(locale, optionsForDate).format(dateObj);

  // Format time using Intl.DateTimeFormat (H:MM)
  const optionsForTime = {
    timeZone: 'Asia/Dhaka',
    hour: 'numeric',
    minute: 'numeric',
  };
  const time = new Intl.DateTimeFormat(locale, optionsForTime).format(dateObj);

  return shouldReturnTime ? `${date}, ${time}` : `${date}`;
};

// Add movements Dates
const addMovementsDates = (account, date) => {
  account.movementsDates.push(date);
};

// Countdown Timer
const startCountdown = () => {
  const duration = 10; // Set time to 10 minutes
  let time = duration * 60; // Convert minutes to seconds

  // Clear any existing interval
  if (timerId) {
    clearInterval(timerId);
  }

  const tick = () => {
    // Calculate remaining minutes and seconds
    const minutes = String(Math.trunc(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');

    // Display the result in the timer element
    labelTimer.textContent = `${minutes}:${seconds}`;

    // When time is 0 seconds, stop timer and logout (Hide UI)
    if (time === 0) {
      clearInterval(timerId);
      containerApp.style.opacity = 0; // Logout (Hide UI)
      labelWelcome.textContent = `Log in to get started`;
    }

    // Decrease time by 1 second
    time--;
  };
  // Immediately start the timer
  tick();

  // And Then Update the timer every second
  timerId = setInterval(tick, 1000);
};

// Format Currency
const formatCurrency = (value, locale, currency) => {
  // Format number using Intl.NumberFormat
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

//* Event handler
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();

  // Find current user account
  currentAccount = accounts.find(
    (account) =>
      account.userName === inputLoginUsername.value.toLowerCase().trim()
  );

  // Check PIN
  if (currentAccount?.pin === Number(inputLoginPin.value.trim())) {
    // Start Countdown
    startCountdown();

    // Display UI and Welcome Message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner
      .split(' ')
      .at(0)}!`;
    containerApp.style.opacity = 100;

    // Update UI
    updateUI(currentAccount);

    // Clear Input Fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();
  } else {
    alert('Invalid User Credential!');
  }
});

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value.trim());
  const receiverUserName = inputTransferTo.value.toLowerCase().trim();
  const now = new Date().toISOString();

  // Find the recipient account
  const recipientAccount = accounts.find(
    (account) => account.userName === receiverUserName
  );

  if (
    amount > 0 &&
    currentAccount?.balance >= amount &&
    recipientAccount &&
    receiverUserName !== currentAccount.userName
  ) {
    // Start Countdown
    startCountdown();

    // Add negative movement to current user
    currentAccount.movements.push(-amount);

    // Add positive movement to recipient
    recipientAccount.movements.push(amount);

    // Add current time in both accounts
    addMovementsDates(currentAccount, now);
    addMovementsDates(recipientAccount, now);

    // Update UI
    updateUI(currentAccount);
  } else {
    const message =
      receiverUserName === currentAccount.userName
        ? `You can't transfer money into your own account!`
        : currentAccount?.balance < amount
        ? `You don't have enough money!`
        : amount === 0
        ? `Please enter valid amount of money!`
        : recipientAccount?.userName === undefined
        ? `Account doesn't exist!`
        : null;

    alert(`Something went wrong: ${message}`);
  }

  // Clear Input Fields
  inputTransferTo.value = '';
  inputTransferAmount.value = '';
  inputTransferAmount.blur();
});

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const loanAmount = Math.floor(inputLoanAmount.value);
  const now = new Date().toISOString();

  if (
    loanAmount > 0 &&
    currentAccount.movements.some((movement) => movement >= loanAmount * 0.1)
  ) {
    // Start Countdown
    startCountdown();

    // Accept loan request after 1 second
    setTimeout(() => {
      // Add positive movement to current user
      currentAccount.movements.push(loanAmount);

      // Add current time in currentAccount
      addMovementsDates(currentAccount, now);

      // Update UI
      updateUI(currentAccount);
    }, 1000);
  }

  // Clear Input Fields
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', (e) => {
  e.preventDefault();

  const closeUsername = inputCloseUsername.value.toLowerCase().trim();
  const closePin = Number(inputClosePin.value.trim());

  if (
    closeUsername === currentAccount.userName &&
    closePin === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (account) => account.userName === currentAccount.userName
    );

    accounts.splice(index, 1); // Delete user account from database
    containerApp.style.opacity = 0; // Logout (Hide UI)
    labelWelcome.textContent = `Log in to get started`;

    console.log(accounts);
  } else {
    alert('Invalid User Credential!');
  }

  // Clear Input Fields
  inputCloseUsername.value = '';
  inputClosePin.value = '';
});

btnSort.addEventListener('click', () => {
  // Sort the movements
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
