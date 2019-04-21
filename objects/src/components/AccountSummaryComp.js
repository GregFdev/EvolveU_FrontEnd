// summary card for list

import React, { Component } from 'react';
// import Account from './Account.js';
import './style_accounts.css';

class AccountSummaryComp extends Component {
	constructor (props) {
		super(props);
		
		// console.log('account is ', this.props.account);
		// console.log('edit btn is  ', this.props.editBtn);


	};

	
	render() {
		return(
			
			<div className='accountSummary'>
									
				
				<ul className='list'>						
					<li>Account ID: {this.props.account.acctID}</li>
					<li>Account Name: {this.props.account.acctType}</li>
					<li>Account Balance $CDN: {this.props.account.balance}</li>
				</ul>
				

				<div>
						<button 
							className='buttons' 
							id={this.props.account.acctID} 
							onClick={this.props.editBtn}>
							Edit Account
						</button>
						<button 
							className='buttons' 
							id={this.props.account.acctID} 
							onClick={this.props.deleteBtn}>
							Delete Account
						</button>

				</div>
				
								
			</div>
			


		)
	}

}

export default AccountSummaryComp;

