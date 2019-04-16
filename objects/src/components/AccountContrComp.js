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
			acctList: this.controller.acctList
		};

	};

	onClickAddAccount = (e) => {
		// console.log('you clicked add account');
		let inAddBalance = document.getElementById('inputAddBalance').value;
		let inAddName = document.getElementById('inputAddAcctName').value;
		this.controller.addAccount(inAddName, inAddBalance);
		this.setState({
			acctList: this.controller.acctList
		});
		console.log('controller acct list ', this.controller.acctList);
		console.log('state acct list ', this.state.acctList);
		
	};



	render() {
		return(
			<div className='container'>
				<div className='leftside'>
					<div className='upperleft'>


						<h2>Total of all accounts is </h2>
						<p>{this.controller.getAccountsTotal()}</p>
						
					
					</div>

					<div className='lowerleft'>

						<h2>
							Add Account?  Why not!
						</h2>
						<input id='inputAddBalance' placeholder='Initial Balance' type='number'></input>
						<input id='inputAddAcctName' placeholder='Account Name'></input>

						<button id='btnNewAcct' onClick={this.onClickAddAccount}>Add Account</button>

					</div>

					<div className='rightside'>

						<h2>put account card here</h2>

						
					</div>

					

				</div>

			</div>


		)

	
	};
};

export default AccountContrComp;

