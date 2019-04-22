// details of the account selected 

import React, { Component } from 'react';
// import Account from './Account.js';
import './style_accounts.css';


class AccountDetailsComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			balance: this.props.account.balance
		}
		console.log('current account is = ', this.props.account);
	};

	onClickDep = (e) => {
		let depNum = Number(document.getElementById('depInput').value);
		console.log('depNum is ', depNum);
		this.props.account.deposit(depNum);
		const newBalance = this.props.account.balance;
		console.log('new balance is ', newBalance);
		this.setState({
			balance:newBalance
		})

		this.props.updateBalance(newBalance);

		// this.props.updateBalance(new Balance);
		// this.props.account.deposit(Number(depNum.value));
		// this.setState({balance: this.account.balance});
		// console.log('new balance after deposit is ' + this.props.account.balance)

	};

	onClickWithdrawal = (e) => {
			let withdNum = Number(document.getElementById("wdInput").value);
			// console.log('WD value is ' + withdNum.value);
			this.props.account.withdrawal(withdNum);
			const newBalance = this.props.account.balance;
			console.log('new balance is ', newBalance);
			this.setState({
				balance:newBalance
			})
			
			this.props.updateBalance(newBalance);
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
							
							<p>Account Balance $CDN: {this.state.balance}</p>

						</div>

					</h2>
					<div className='acctInput'>
						<p>Deposit Amount $CDN: </p>
						<input className='inputFields' id='depInput'></input>
						<button className='buttons' onClick={this.onClickDep} >Deposit</button>
						<p>Withdrawal Amount $CDN: </p>
						<input className='inputFields' id='wdInput'></input>
						<button className='buttons' onClick={this.onClickWithdrawal} >Withdrawal</button>
					</div>
					
				</div>
			</div>


		)
	}

}

export default AccountDetailsComp;

