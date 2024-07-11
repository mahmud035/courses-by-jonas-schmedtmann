'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
const displayMovements = (movements) => {
  containerMovements.innerHTML = '';

  movements.forEach((movement, index) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${index + 1} ${type}
          </div>
          <div class="movements__value">${movement} €</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Calculate and Display Balance
const calcDisplayBalance = (currentAccount) => {
  const initialValue = 0;

  // Calculate balance and store it into currentAccount object
  currentAccount.balance = currentAccount?.movements.reduce(
    (accumulator, currentMovement) => {
      return accumulator + currentMovement;
    },
    initialValue
  );

  labelBalance.textContent = `${currentAccount?.balance} €`;
};

// Calculate and Display Summary (Chaining Methods)
const calcDisplaySummary = (currentAccount) => {
  const income = currentAccount?.movements
    .filter((movement) => movement > 0) // take all deposit
    .reduce((accumulator, currentDeposit) => {
      return accumulator + currentDeposit;
    }, 0);

  labelSumIn.textContent = `${income} €`;

  const out = currentAccount?.movements
    .filter((movement) => movement < 0) // take all withdrawal
    .reduce((accumulator, currentWithdrawal) => {
      return accumulator + currentWithdrawal;
    }, 0);

  labelSumOut.textContent = `${Math.abs(out)} €`;

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

  labelSumInterest.textContent = `${interest} €`;
};

// Update UI
const updateUI = (currentAccount) => {
  // Display Movements
  displayMovements(currentAccount?.movements);

  // Display Balance
  calcDisplayBalance(currentAccount);

  // Display Summary
  calcDisplaySummary(currentAccount);
};

//* Event handler
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();

  // Find current user account
  currentAccount = accounts.find(
    (account) => account.userName === inputLoginUsername.value
  );

  // Check Pin
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
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
  }
});

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value.trim());
  const receiverUserName = inputTransferTo.value.toLowerCase().trim();
  // const currentBalance = Number(labelBalance.innerText.split(' ').at(0));

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
    // Add negative movement to current user
    currentAccount.movements.push(-amount);

    // Add positive movement to recipient
    recipientAccount.movements.push(amount);

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
