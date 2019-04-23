import React, { Component } from 'react';
import AccountSummaryComp from './AccountSummaryComp.js';
import AccountContr from './AccountContr.js';
import AccountDetailsComp from './AccountDetailsComp.js';
import './style_accounts.css';


class AccountContrComp extends Component {
	constructor () {
		super();
		this.controller = new AccountContr();
		this.controller.addAccount('saving', 1000);
		this.controller.addAccount('chequing', 2000);
		
		this.state = {
			controllerState: this.controller,
			displayAcctID: 0
			// largestAcct: this.controller.getMaxAccount(),
			// smallestAcct: this.controller.getMinAccount(),
			// totalAccts: this.controller.getAccountsTotal()
			};
	};

	onClickAddAccount = (e) => {
		this.controller.addAccount();
		// this.setState({
		// 	controllerState: this.controller
		// })

		this.updateGeneralInfo();
		
	};


	onClickDeleteAccount = (e) => {
		this.controller.deleteAccount(e.target.id);
		if(Number(e.target.id) === Number(this.state.displayAcctID)) {
			console.log('same!');
			this.setState({
				displayAcctID: 0
			});

		};

		// this.setState({
		// 	controllerState: this.controller
		// });

		this.updateGeneralInfo();

	};


	onClickEditAccount = (e) => {
		this.setState({
			displayAcctID: Number(e.target.id)
			});
		

	};
	
	updateGeneralInfo = () => {
		// const newMax = this.controller.getMaxAccount();
		// const newMin = this.controller.getMinAccount();
		// const newTotal = this.controller.getAccountsTotal();
		this.setState({
			// largestAcct: newMax,
			// smallestAcct: newMin,
			// totalAccts: newTotal
		});
	};

	render() {

		// const acctList = this.state.controllerState.acctList.map((item) => {
		const acctList = this.controller.acctList.map((item) => {

			return (
				<AccountSummaryComp 
					key={item.acctID} 
					account={item} 
					editBtn={this.onClickEditAccount} 
					deleteBtn={this.onClickDeleteAccount}
				/>
			)
		});
		

		// const currAcctIndex = this.state.controllerState.findAccountIndex(this.state.displayAcctID);
		// const currAcct = this.state.controllerState.acctList[currAcctIndex];
		const currAcctIndex = this.controller.findAccountIndex(this.state.displayAcctID);
		const currAcct = this.controller.acctList[currAcctIndex];

	
		return(

			<div className='containerContr'>
				<div className='containerLeft'>
					<div className='account'>
						<h2>Accounts Summary</h2>
						<table>
							<tbody>
								<tr>
									<td>Total of all Accounts ($CDN):</td>
									<td>{this.controller.getAccountsTotal()}</td>
								</tr>
								<tr>
									<td>Largest Account (ID):</td>
									<td>{this.controller.getMaxAccount()}</td>
								</tr>
								<tr>
									<td>Smallest Account (ID):</td>
									<td>{this.controller.getMinAccount()}</td>
								</tr>

							</tbody>
						</table>						
					
					</div>
			

					<button className='buttons' id='btnNewAcct' onClick={this.onClickAddAccount}>Add Account</button>

					{acctList}

									
				</div>

				<div id='accountDetails' className='containerRight'>

                   {this.state.displayAcctID < 1 ? '': 
                		<AccountDetailsComp 
                			accountID={this.state.displayAcctID}
                			account={currAcct}
	               			updateGeneralInfo={this.updateGeneralInfo} 

            			/>
            		}
							
				</div>
			</div>


		)

	
	};
};

export default AccountContrComp;

