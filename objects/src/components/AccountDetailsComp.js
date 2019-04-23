// details of the account selected 

import React, { Component } from 'react';
// import Account from './Account.js';
import './style_accounts.css';


class AccountDetailsComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			balance: this.props.account.balance,
			acctType: this.props.account.acctType
		}
		console.log('current account is = ', this.props.account);
	};

	onClickDep = (e) => {
		let depValue = Number(document.getElementById('depInput').value);
		this.props.account.deposit(depValue);
		const newBalance = this.props.account.balance;
		console.log('new balance is ', newBalance);
		this.setState({
			balance: newBalance
		})

		// this.props.updateAcctBalance();
		this.props.updateGeneralInfo();

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
			
			// this.props.updateBalance(newBalance);
			// this.setState({balance: this.account.balance});
			// console.log('new balance is ' + this.newAccount.balance)
	};


	onClickTypeChange = (e) => {
			let newType = document.getElementById("typeInput").textContent;
			console.log('new type is ' + newType);
			this.props.account.typeChange(newType); // do I even need to change the account.acctType in this component?
			this.setState({
				acctType: newType
			});
			
			// this.props.updateBalance(newBalance);
			
	};
	render() {
		return(
			<div className='container'>
				<div className='account'>
					<h2>
					Account Details
					</h2>
					
						<table>
							<tbody>
								<tr>
									<td>Account ID:</td>
									<td>{this.props.account.acctID}</td>
								</tr>
								<tr>
									<td>Account Name:</td>
									<td>{this.props.account.acctType}</td>
								</tr>
								<tr>
									<td>Account Balance $CDN:</td>
									<td>{this.props.account.balance}</td>
								</tr>

							</tbody>
						</table>		


						

					
					<div className='acctInput'>
						<p id='titles'>Deposit Amount $CDN: </p>
						<input className='inputFields' id='depInput'></input>
						<button className='buttons' onClick={this.onClickDep} >Deposit</button>
						<p id='titles'>Withdrawal Amount $CDN: </p>
						<input className='inputFields' id='wdInput'></input>
						<button className='buttons' onClick={this.onClickWithdrawal} >Withdrawal</button>
						<p id='titles'>Change Account Type: </p>
						<input className='inputFields' id='typeInput'></input>
						<button className='buttons' onClick={this.onClickTypeChange}>Submit</button>
					</div>
					
				</div>
			</div>


		)
	}

}

export default AccountDetailsComp;

