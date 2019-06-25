// details of the account selected (on right)

import React, { Component } from 'react';
import './style_accounts.css';


class AccountDetailsComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			accountID: this.props.accountID
		};
	};

	onClickDep = (e) => {
		let depValue = Number(document.getElementById('depInput').value);
		this.props.account.deposit(depValue);
		this.props.updateGeneralInfo();

	};

	onClickWithdrawal = (e) => {
			let withdNum = Number(document.getElementById("wdInput").value);
			this.props.account.withdrawal(withdNum);
			this.props.updateGeneralInfo();
	};


	onClickTypeChange = (e) => {
			let newType = document.getElementById("typeInput").value;
			this.props.account.typeChange(newType); 
			this.props.updateGeneralInfo();
					
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
									<td>Account Type:</td>
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

						<input className='inputFields' id='depInput' type='number'></input>
						<button className='buttons' onClick={this.onClickDep} >Deposit</button>

						<p id='titles'>Withdrawal Amount $CDN: </p>

						<input className='inputFields' id='wdInput' type='number'></input>
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

