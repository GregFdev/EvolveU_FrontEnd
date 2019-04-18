import React, { Component } from 'react';
// import Account from './Account.js';
import AccountComp from './AccountCompPart2.js';
import AccountContr from './AccountContr.js';
import './style_accounts.css';


class AccountContrComp extends Component {
	constructor () {
		super();
		const controller = new AccountContr();

		controller.addAccount('saving');
		controller.addAccount('chequing');
		controller.addAccount('empty');
		controller.addAccount('invest');
		
		this.state = {
			controllerState: controller
		};
	};

	onClickAddAccount = (e) => {
		
		const newState = this.state.controllerState;  //must add controller to a variable to run addAcount
		newState.addAccount();
		this.setState({
			controllerState: newState
		})
		
		// console.log('num of accts in click = ', this.state.controllerState.acctList.length);
	};



	render() {

		// console.log('num accts in render = ', this.state.controllerState.length);
		const acctList = this.state.controllerState.acctList.map((item) => {
			// console.log('account type ', item.acctType, 'account ID', item.acctID);
			return (
				// <li key={item.acctID}>{item.acctID}: Account Name: {item.acctType} and Account Balance: {item.balance}</li>
				<AccountComp key={item.acctID} account={item}/>
			)
		});

		// console.log('list is:', acctListRender);
			

		

	
		return(

			<div className='containerContr'>
				<div className='containerLeft'>
					<div className='account'>


						<h4>Total of all accounts is ($CDN): </h4>
						<h4>Number of Accounts is: </h4>
						<h4>Largest account is: </h4>
						<h4>Smallest account is: </h4>
						
					
					</div>

					<div className='acctInfo'>

						<button className='buttons' id='btnNewAcct' onClick={this.onClickAddAccount}>Add Account</button>
						{acctList}

					</div>

					
				</div>

				<div id='accountlist' className='containerRight'>

					
						
					

					
					
								

						
				</div>
			</div>


		)

	
	};
};

export default AccountContrComp;

