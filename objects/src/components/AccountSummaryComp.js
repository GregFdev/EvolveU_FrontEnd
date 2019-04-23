// summary card for list

import React, { Component } from 'react';
// import Account from './Account.js';
import './style_accounts.css';

class AccountSummaryComp extends Component {
	constructor (props) {
		super(props);
		
		console.log('account is ', this.props.account);
		// console.log('edit btn is  ', this.props.editBtn);


	};

	
	render() {
		return(
			
			<div className='accountSummary'>
									
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


				
				

				<div className='summaryButtons'>
						<button 
							className='buttons' 
							id={this.props.account.acctID}
							name={'editBtn' + this.props.account.acctID}
							onClick={this.props.editBtn}>
							Edit Account
						</button>
						<button 
							className='buttons' 
							id={this.props.account.acctID} 
							name={'deleteBtn' + this.props.account.acctID}
							onClick={this.props.deleteBtn}>
							Delete Account
						</button>

				</div>
				
								
			</div>
			


		)
	}

}

export default AccountSummaryComp;

