import React, { Component } from 'react';
// import Account from './Account.js';
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
			displayAcctID: 0,
			largestAcct: this.controller.getMaxAccount(),
			smallestAcct: this.controller.getMinAccount(),
			totalAccts: this.controller.getAccountsTotal()
			};
		// console.log('state is ', this.state);
	};

	onClickAddAccount = (e) => {
		// const newController = new AccountContr();
		// newController.acctList = [...this.state.controllerState.acctList];
		// newController.acctID = this.state.controllerState.acctID;
		 // must assign a new array
		// const newState = newController;  
		this.controller.addAccount();
		this.setState({
			controllerState: this.controller
		})

		this.updateGeneralInfo();
		
		// console.log('num of accts in click = ', this.state.controllerState.acctList.length);
	};


	onClickDeleteAccount = (e) => {
		this.controller.deleteAccount(e.target.id);
		// console.log('del target is ', e.target.id, 'displayAcctID is = ',this.state.displayAcctID );
		if(Number(e.target.id) === Number(this.state.displayAcctID)) {
			console.log('same!');
			this.setState({
				displayAcctID: 0
			});

		};

		this.setState({
			controllerState: this.controller
		});

		this.updateGeneralInfo();

	};


	onClickEditAccount = (e) => {
		// console.log('you clicked edit and target is ', e.target.id);
		this.setState({
			displayAcctID: Number(e.target.id)
			});
		

	};
	
	updateAcctBalance = () => {
		// console.log('update accounts triggered and new balance is ', newBalance);
		// let balance = this.controller.acctList[this.controller.findAccountIndex(this.state.displayAcctID)].balance;
		// console.log('modify array balance is ', balance);
		this.setState({
					controllerState: this.controller
		})
		this.updateGeneralInfo();
	};

	updateGeneralInfo = () => {
		const newMax = this.controller.getMaxAccount();
		const newMin = this.controller.getMinAccount();
		const newTotal = this.controller.getAccountsTotal();
		this.setState({
					controllerState: this.controller,
					largestAcct: newMax,
					smallestAcct: newMin,
					totalAccts: newTotal
		});
	};

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
		// console.log('current state AcctID is ' + this.state.displayAcctID);
		// console.log('current state acct index is = ', this.state.controllerState.findAccountIndex(this.state.displayAcctID));
		const currAcctIndex = this.state.controllerState.findAccountIndex(this.state.displayAcctID);
		const currAcct = this.state.controllerState.acctList[currAcctIndex];
		// console.log('current state account list is ', this.state.controllerState.acctList)

	
		return(

			<div className='containerContr'>
				<div className='containerLeft'>
					<div className='account'>
						<h2>Accounts Summary</h2>
						<table>
							<tbody>
								<tr>
									<td>Total of all Accounts ($CDN):</td>
									<td>{this.state.totalAccts}</td>
								</tr>
								<tr>
									<td>Largest Account (ID):</td>
									<td>{this.state.largestAcct}</td>
								</tr>
								<tr>
									<td>Smallest Account (ID):</td>
									<td>{this.state.smallestAcct}</td>
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
                			account={currAcct}
	               			updateGeneralInfo={this.updateGeneralInfo} 
                			key={this.state.displayAcctID}
            			/>
            		}
							
				</div>
			</div>


		)

	
	};
};

export default AccountContrComp;

