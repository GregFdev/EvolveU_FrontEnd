// details of the account selected 

import React, { Component } from 'react';
// import Account from './Account.js';
import './style_accounts.css';


class AccountDetailsComp extends Component {
	constructor (props) {
		super(props);
		console.log('accountcomp account passed is ', this.props.account.acctID);
		
	};

	onClickDep = (e) => {
		let depNum = document.getElementById("depInput");
		this.props.account.deposit(Number(depNum.value));
		// this.setState({balance: this.account.balance});
		// console.log('new balance is ' + this.newAccount.balance)

	};

	onClickWithdrawal = (e) => {
		let withdNum = document.getElementById("wdInput");
		// console.log('WD value is ' + withdNum.value);
		this.props.account.withdrawal(Number(withdNum.value));
		// this.setState({balance: this.account.balance});
		// console.log('new balance is ' + this.newAccount.balance)
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
							<p>Account Num: {this.props.account.acctID}</p>
													
							<p>Account Type: {this.props.account.acctType}</p>
							
							<p>Account Balance $CDN: {this.props.account.balance}</p>

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
					
				</div>
			</div>


		)
	}

}

export default AccountDetailsComp;

