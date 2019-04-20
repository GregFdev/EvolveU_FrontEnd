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
			displayDetails: true
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

		const acctList = this.state.controllerState.acctList.map((item) => {
			return (
				<AccountSummaryComp key={item.acctID} account={item}/>
			)
		});

		

	
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

                    {/*{this.state.displayDetails === true ? <AccountDetailsComp /> : ''}*/}


					
						
					

					
					
								

						
				</div>
			</div>


		)

	
	};
};

export default AccountContrComp;

