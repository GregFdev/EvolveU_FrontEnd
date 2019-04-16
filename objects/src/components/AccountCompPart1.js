import React, { Component } from 'react';
import Account from './Account.js';
import './style_accounts.css';

// create sample account
const gregAccount = new Account('Savings', 1000, 'Julia Freson', 1);

class AccountComp extends Component {
	constructor () {
		super();
		this.state = {
			balance: gregAccount.balance
		};
	};

	onClickDep = (e) => {
		let depNum = document.getElementById("depInput");
		gregAccount.deposit(Number(depNum.value));
		this.setState({balance: gregAccount.balance});
	};

	onClickWithdrawal = (e) => {
		let withdNum = document.getElementById("wdInput");
		console.log('WD value is ' + withdNum.value);
		gregAccount.withdrawal(Number(withdNum.value));
		this.setState({balance: gregAccount.balance});
		console.log('new balance is ' + gregAccount.balance)
	};

	render() {
		return(
			<div className='container'>
				<div className='account'>
					<h1>
					Account Display
					</h1>
					
					<h2 className='acctInfo'>
						<div>

							<p>Account Holder: </p><p>{gregAccount.userName}</p>
							
							<p>Account Type: {gregAccount.acctType}</p>
							
							<p>Account Balance $CDN: {this.state.balance}</p>

						</div>

					</h2>
					<div className='acctInput'>
						<p>Deposit Amount $CDN: </p>
						<input className='inputFields' id='depInput'></input>
						<button className='buttons' id='btnDeposit' onClick={this.onClickDep} >Submit</button>
						<p>Withdrawal Amount $CDN: </p>
						<input className='inputFields' id='wdInput'></input>
						<button className='buttons' id='btnWithdrawal' onClick={this.onClickWithdrawal} >Submit</button>
					</div>
					<br></br><br></br><br></br>

				</div>
			</div>


		)
	}

}

export default AccountComp;

