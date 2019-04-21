import React, { Component } from 'react';
// import Account from './Account.js';
import AccountSummaryComp from './AccountSummaryComp.js';
import AccountContr from './AccountContr.js';
import AccountDetailsComp from './AccountDetailsComp.js';
import './style_accounts.css';


class AccountContrComp extends Component {
	constructor () {
		super();
		const controller = new AccountContr();
		controller.addAccount('saving', 1000);
		controller.addAccount('chequing', 2000);
					
		this.state = {
			controllerState: controller,
			displayAcctID: 0
			};
		// console.log('state is ', this.state);
	};

	onClickAddAccount = (e) => {
		const newController = new AccountContr();
		newController.acctList = [...this.state.controllerState.acctList]; // must assign a new array
		const newState = newController;  
		newState.addAccount();
		this.setState({
			controllerState: newState
		})

		
		// console.log('num of accts in click = ', this.state.controllerState.acctList.length);
	};

	onClickEditAccount = (e) => {
		console.log('you clicked edit and target is ', e.target.id);
		this.setState({
			displayAcctID: Number(e.target.id)
			});
		

	};
	
	onClickDeleteAccount = (e) => {
		// console.log('you clicked delete and target is ', e.target.id);
	}

	render() {

		const acctList = this.state.controllerState.acctList.map((item) => {
			return (
				<AccountSummaryComp 
					key={item.acctID} 
					account={item} 
					editBtn={this.onClickEditAccount} 
					deleteBtn={this.onClickDeleteAccount}
				/>
			)
		});
		console.log('current state AcctID is ' + this.state.displayAcctID);
		console.log('current state acct index is = ', this.state.controllerState.findAccountIndex(this.state.displayAcctID));
		const currAcctIndex = this.state.controllerState.findAccountIndex(this.state.displayAcctID);

		const currAcct = this.state.controllerState.acctList[currAcctIndex];
		// console.log('current state account list is ', this.state.controllerState.acctList)

	
		return(

			<div className='containerContr'>
				<div className='containerLeft'>
					<div className='account'>

						<h3>Accounts Summary</h3>
						<li className='list' >Total of all accounts is ($CDN): </li>
						<li className='list' >Number of Accounts is: </li>
						<li className='list' >Largest account is: </li>
						<li className='list' >Smallest account is: </li>
						
					
					</div>
			

					<button className='buttons' id='btnNewAcct' onClick={this.onClickAddAccount}>Add Account</button>
					{acctList}

									
				</div>

				<div id='accountDetails' className='containerRight'>

                   {this.state.displayAcctID < 1 ? '': <AccountDetailsComp account={currAcct}/>}
							
				</div>
			</div>


		)

	
	};
};

export default AccountContrComp;

