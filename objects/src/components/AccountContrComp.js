import React, { Component } from 'react';
// import Account from './Account.js';
import AccountComp from './AccountComp.js';
import AccountContr from './AccountContr.js';
import './style_accounts.css';


class AccountContrComp extends Component {
	constructor () {
		super();
		this.controller = new AccountContr();
		this.state = {
			acctList: this.controller.acctList,
			total: this.controller.getAccountsTotal(),
			large: this.controller.getMaxAccount(),
			small: this.controller.getMinAccount()
		};

	};

	onClickAddAccount = (e) => {
		// console.log('you clicked add account');
		let inAddBalance = Number(document.getElementById('inputAddBalance').value);
		let inAddName = document.getElementById('inputAddAcctName').value;
		this.controller.addAccount(inAddName, inAddBalance);
		// console.log('total is ', this.controller.getAccountsTotal());

		this.setState({
			acctList: this.controller.acctList,
			total: this.controller.getAccountsTotal(),
			large: this.controller.getMaxAccount(),
			small: this.controller.getMinAccount()
		});
		// console.log('controller acct list ', this.controller.acctList);
		// console.log('state acct list ', this.state.acctList);
		
	};



	render() {
		return(
			<div className='containerContr'>
				<div className='containerLeft'>
					<div className='account'>


						<h2>Total of all accounts is ($CDN): {this.state.total}</h2>
						<h2>Number of Accounts is: {this.state.acctList.length}</h2>
						<h2>Largest account is: {this.state.large}</h2>
						<h2>Smallest account is: {this.state.small}</h2>
						
					
					</div>

					<div className='account'>

						<h2>
							Add Account?  Why not!
						</h2>
						<input className='inputFields' id='inputAddBalance' placeholder='Initial Balance' type='number'></input>
						<input className='inputFields' id='inputAddAcctName' placeholder='Account Name'></input>

						<button className='buttons' id='btnNewAcct' onClick={this.onClickAddAccount}>Add Account</button>

					</div>
				</div>

				<div className='containerRight'>

					<h2>put account card here</h2>
					<AccountComp />

						
				</div>

					

			</div>


		)

	
	};
};

export default AccountContrComp;

